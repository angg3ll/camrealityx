import cv2
import mediapipe as mp
import numpy as np
import os
from pillow_heif import register_heif_opener
from PIL import Image
import json

BaseOptions = mp.tasks.BaseOptions
PoseLandmarker = mp.tasks.vision.PoseLandmarker
PoseLandmarkerOptions = mp.tasks.vision.PoseLandmarkerOptions
RunningMode = mp.tasks.vision.RunningMode

def load_image_any_format(image_path):
    register_heif_opener()
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        return np.array(img)
    except Exception as e:
        print(f"Error loading image: {e}")
        return None
    
def pixel_distance(p1, p2, img_w, img_h):
    x1, y1 = p1.x * img_w, p1.y * img_h
    x2, y2 = p2.x * img_w, p2.y * img_h
    return np.sqrt((x2 - x1)**2 + (y2 - y1)**2)

def ellipse_circumference(width_cm, depth_cm):
    """More accurate circumference w/ ellipse formula"""
    a = width_cm / 2
    b = depth_cm / 2
    return np.pi * (3*(a+b) - np.sqrt((3*a+b)*(a+3*b)))

def get_landmarks(image):
    """Run MediaPipe on an image array, return landmarks"""
    options = PoseLandmarkerOptions(
        base_options=BaseOptions(model_asset_path='pose_landmarker_full.task'),
        running_mode=RunningMode.IMAGE
    )
    with PoseLandmarker.create_from_options(options) as landmarker:
        mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=image)
        result = landmarker.detect(mp_image)
        if not result.pose_landmarks:
            return None
        return result.pose_landmarks[0]
    
def display_image(image, title="Photo"):
    """Fit image to screen and display"""
    max_height = 900
    display_scale = max_height / image.shape[0]
    display_w = int(image.shape[1] * display_scale)
    resized = cv2.resize(image, (display_w, max_height), interpolation=cv2.INTER_AREA)
    cv2.imshow(title, resized)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

def analyse_measurements(front_path, side_path, user_height_cm):
    front_path = os.path.abspath(front_path)
    side_path  = os.path.abspath(side_path)

    front_img = load_image_any_format(front_path)
    side_img  = load_image_any_format(side_path)

    if front_img is None:
        print(f"Couldn't load front image at: {front_path}")
        return
    if side_img is None:
        print(f"Couldn't load side image at: {side_path}")
        return
    fh, fw = front_img.shape[:2]
    sh, sw = side_img.shape[:2]

    print("Analysing front photo...")
    front_lm = get_landmarks(front_img)
    print("Analysing side photo...")
    side_lm = get_landmarks(side_img)

    if not front_lm:
        print("No person detected in front photo")
        return
    if not side_lm:
        print("No person detected in side photo")
        return
    # --- Scale factors (pixel -> cm) ---
    # Front
    front_ankle_y  = ((front_lm[27].y + front_lm[28].y) / 2) * fh
    front_body_px  = front_ankle_y - (front_lm[0].y * fh)
    front_scale    = user_height_cm / front_body_px

    # Side
    side_ankle_y   = ((side_lm[27].y + side_lm[28].y) / 2) * sh
    side_body_px   = side_ankle_y - (side_lm[0].y * sh)
    side_scale     = user_height_cm / side_body_px 

    # --- Front measurements (widths) ---
    shoulder_cm = pixel_distance(front_lm[11], front_lm[12], fw, fh) * front_scale
    waist_w_cm  = pixel_distance(front_lm[23], front_lm[24], fw, fh) * front_scale * 1.3
    hip_w_cm    = pixel_distance(front_lm[23], front_lm[24], fw, fh) * front_scale * 1.5
    waist_lx    = (front_lm[11].x + front_lm[23].x) / 2
    waist_rx    = (front_lm[12].x + front_lm[24].x) / 2
    waist_w_cm  = abs(waist_rx - waist_lx) * fw * front_scale

        # --- Arm length: shoulder → elbow → wrist (both sides averaged) ---
    left_arm  = pixel_distance(front_lm[11], front_lm[13], fw, fh) * front_scale \
              + pixel_distance(front_lm[13], front_lm[15], fw, fh) * front_scale
    right_arm = pixel_distance(front_lm[12], front_lm[14], fw, fh) * front_scale \
              + pixel_distance(front_lm[14], front_lm[16], fw, fh) * front_scale
    arm_length_cm = (left_arm + right_arm) / 2

        # --- Leg length: hip → knee → ankle ---
    leg_length_cm = pixel_distance(front_lm[23], front_lm[25], fw, fh) * front_scale \
                  + pixel_distance(front_lm[25], front_lm[27], fw, fh) * front_scale

    # --- Side measurements (depths) ---
    chest_depth_cm = shoulder_cm * 0.43
    waist_depth_cm = waist_w_cm  * 0.77 
    hip_depth_cm   = hip_w_cm    * 0.65

    # --- Torso length: shoulder mid → hip mid ---
    shoulder_mid_y  = (front_lm[11].y + front_lm[12].y) / 2 * fh
    hip_mid_y       = (front_lm[23].y + front_lm[24].y) / 2 * fh
    torso_length_cm = abs(hip_mid_y - shoulder_mid_y) * front_scale

    # --- Depth estimates ---
    chest_w_cm     = shoulder_cm * 1.15
    chest_depth_cm = chest_w_cm  * 0.52
    waist_depth_cm = waist_w_cm  * 0.72
    hip_depth_cm   = hip_w_cm    * 0.68

    # --- Combine into circumferences ---
    chest_cm = ellipse_circumference(shoulder_cm * 1.15, chest_depth_cm)
    waist_cm = ellipse_circumference(waist_w_cm, waist_depth_cm)
    hip_cm   = ellipse_circumference(hip_w_cm, hip_depth_cm)
    # --- Print results ---
    print("\n📏 Estimated Measurements:")
    print(f"  Height:    {user_height_cm} cm (user input)")
    print(f"  Shoulders: {shoulder_cm:.1f} cm")
    print(f"  Chest:     {chest_cm:.1f} cm")
    print(f"  Waist:     {waist_cm:.1f} cm")
    print(f"  Hips:      {hip_cm:.1f} cm")
    print(f'  Arm Length: {arm_length_cm:.1f} cm')
    print(f'  Torso Length: {torso_length_cm:.1f} cm')
    print(f'  Leg Length: {leg_length_cm:.1f} cm')

    # --- Save to JSON for Phase 2 ---
    measurements = {
        "height_cm":       user_height_cm,
        "shoulders_cm":    round(shoulder_cm, 1),
        "chest_cm":        round(chest_cm, 1),
        "waist_cm":        round(waist_cm, 1),
        "hips_cm":         round(hip_cm, 1),
        "arm_length_cm":   round(arm_length_cm, 1),
        "leg_length_cm":   round(leg_length_cm, 1),
        "torso_length_cm": round(torso_length_cm, 1),
    }

    with open('measurements.json', 'w') as f:
        json.dump(measurements, f, indent=2)
    print("Measurements saved to measurements.json")

    # --- Draw landmarks and display ---
    for lm_point in front_lm:
        x = int(lm_point.x * fw)
        y = int(lm_point.y * fh)
        cv2.circle(front_img, (x, y), 6, (0, 255, 0), -1)

    for lm_point in side_lm:
        x = int(lm_point.x * sw)
        y = int(lm_point.y * sh)
        cv2.circle(side_img, (x, y), 6, (0, 255, 0), -1)

    for a, b in [(11,13),(13,15),(12,14),(14,16)]:
        x1,y1 = int(front_lm[a].x*fw), int(front_lm[a].y*fh)
        x2,y2 = int(front_lm[b].x*fw), int(front_lm[b].y*fh)
        cv2.line(front_img, (x1,y1), (x2,y2), (255,200,0), 2)

    '''display_image(cv2.cvtColor(front_img, cv2.COLOR_RGB2BGR), "Front Photo")'''
    display_image(cv2.cvtColor(side_img,  cv2.COLOR_RGB2BGR), "Side Photo")

# --- Run it ---
front_path = input("Enter path to FRONT photo: ")
side_path  = input("Enter path to SIDE photo: ")
height     = float(input("Enter your height in cm: "))
analyse_measurements(front_path, side_path, height)