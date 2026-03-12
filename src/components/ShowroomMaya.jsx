import { useEffect, useRef } from "react";
import * as THREE from "three";

// ── BEACH SHOWROOM — Sunny Coastal Vibes ────────────────────────────────────
// Ocean blues, sandy floors, driftwood, beach ball, surfboard, parasol, shells

export default function ShowroomBeach({
  products = [],
  tags = [],
  title,
  spaceType,
  color,
  onClose,
  onSelectProduct,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── RENDERER ──────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // ── SCENE ─────────────────────────────────────────────────────────────
    const BG = 0x87ceeb; // sky blue
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BG);
    scene.fog = new THREE.Fog(BG, 2800, 4500);

    // ── CAMERA ────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(56, mount.clientWidth / mount.clientHeight, 1, 6000);
    camera.position.set(0, 320, 1100);
    camera.lookAt(0, 240, 0);

    // zoom state
    let zoomDist = 1100;
    const ZOOM_MIN = 400, ZOOM_MAX = 2200;

    // ── DIMENSIONS ────────────────────────────────────────────────────────
    const RW = 2400, RH = 1000, RD = 2200;

    // ── MATERIALS ─────────────────────────────────────────────────────────
    const sandMat       = new THREE.MeshStandardMaterial({ color: 0xe8d5a0, roughness: 0.98 });
    const driftwoodMat  = new THREE.MeshStandardMaterial({ color: 0xb8a070, roughness: 0.92 });
    const whiteMat      = new THREE.MeshStandardMaterial({ color: 0xfaf6ee, roughness: 0.9 });
    const oceanBlueMat  = new THREE.MeshStandardMaterial({ color: 0x1e90c8, roughness: 0.3, metalness: 0.15 });
    const coralMat      = new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.85 });
    const sunYellow     = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.6 });
    const turquoiseMat  = new THREE.MeshStandardMaterial({ color: 0x00d4c8, roughness: 0.5, metalness: 0.1 });

    const add = (geo, mat, px, py, pz, rx = 0, ry = 0, rz = 0) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(px, py, pz);
      m.rotation.set(rx, ry, rz);
      m.castShadow = true;
      m.receiveShadow = true;
      scene.add(m);
      return m;
    };

    // ── SANDY FLOOR ────────────────────────────────────────────────────────
    add(
      new THREE.PlaneGeometry(RW, RD),
      new THREE.MeshStandardMaterial({ color: 0xe8d89c, roughness: 0.99, metalness: 0 }),
      0, 0, 0, -Math.PI / 2
    );
    // Sand ripple strips (subtle)
    for (let i = -6; i <= 6; i++) {
      add(new THREE.PlaneGeometry(RW, 18),
        new THREE.MeshStandardMaterial({ color: 0xdccc8a, roughness: 1 }),
        0, 1, i * 160, -Math.PI / 2);
    }

    // ── SKY BACK WALL (ocean horizon) ─────────────────────────────────────
    // Gradient-like ocean with two planes
    add(new THREE.PlaneGeometry(RW, RH * 0.45),
      new THREE.MeshStandardMaterial({ color: 0x2aa8d8, roughness: 0.1, metalness: 0.2 }),
      0, RH * 0.23, -RD / 2);
    add(new THREE.PlaneGeometry(RW, RH * 0.55),
      new THREE.MeshStandardMaterial({ color: 0x87ceeb, roughness: 0.05 }),
      0, RH * 0.72, -RD / 2);

    // Waves (undulating strips)
    const waveMat1 = new THREE.MeshStandardMaterial({ color: 0x4fc8e8, roughness: 0.2, metalness: 0.1 });
    const waveMat2 = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.15, metalness: 0.05, transparent: true, opacity: 0.7 });
    [-280, -180, -80, 20].forEach((y, i) => {
      add(new THREE.BoxGeometry(RW, 18, 28), i % 2 === 0 ? waveMat1 : waveMat2, 0, y + 20, -RD / 2 + 2);
    });

    // ── SUN ───────────────────────────────────────────────────────────────
    add(new THREE.SphereGeometry(64, 18, 18),
      new THREE.MeshStandardMaterial({ color: 0xffee44, emissive: 0xffcc00, emissiveIntensity: 0.9, roughness: 0.3 }),
      460, RH - 80, -RD / 2 + 10);
    // Sun rays (thin cylinders)
    for (let a = 0; a < 8; a++) {
      const ang = (a / 8) * Math.PI * 2;
      add(new THREE.CylinderGeometry(2, 2, 60, 5),
        new THREE.MeshStandardMaterial({ color: 0xffee44, emissive: 0xffcc00, emissiveIntensity: 0.6 }),
        460 + Math.cos(ang) * 96, RH - 80 + Math.sin(ang) * 96, -RD / 2 + 10,
        0, 0, ang);
    }

    // ── SIDE WALLS ────────────────────────────────────────────────────────
    const skyWallMat = new THREE.MeshStandardMaterial({ color: 0x9dd8f0, roughness: 0.9 });
    add(new THREE.PlaneGeometry(RD, RH), skyWallMat, -RW / 2, RH / 2, 0, 0,  Math.PI / 2);
    add(new THREE.PlaneGeometry(RD, RH), skyWallMat.clone(), RW / 2, RH / 2, 0, 0, -Math.PI / 2);

    // ── LIGHTING — bright tropical sun ────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xfff5e0, 1.3));

    const sun3d = new THREE.DirectionalLight(0xfff2cc, 2.0);
    sun3d.position.set(500, 900, 300);
    sun3d.castShadow = true;
    sun3d.shadow.mapSize.setScalar(1024);
    scene.add(sun3d);

    // Ocean bounce — cyan from below
    const bounce = new THREE.DirectionalLight(0x80e8ff, 0.55);
    bounce.position.set(-400, 100, 600);
    scene.add(bounce);

    // ── BEACH TOWEL / RUG ─────────────────────────────────────────────────
    add(new THREE.BoxGeometry(680, 5, 420),
      new THREE.MeshStandardMaterial({ color: 0xff7b54, roughness: 1 }),
      0, 2, 100);
    // Stripes
    [-140, 0, 140].forEach(dx => {
      add(new THREE.BoxGeometry(80, 5.5, 420),
        new THREE.MeshStandardMaterial({ color: 0xffd166, roughness: 1 }),
        dx, 2.5, 100);
    });
    // Towel fringe
    for (let i = -12; i <= 12; i++) {
      add(new THREE.BoxGeometry(6, 4, 22),
        new THREE.MeshStandardMaterial({ color: 0xe85d3e, roughness: 1 }),
        i * 26, 2, 100 + 210 + 11);
      add(new THREE.BoxGeometry(6, 4, 22),
        new THREE.MeshStandardMaterial({ color: 0xe85d3e, roughness: 1 }),
        i * 26, 2, 100 - 210 - 11);
    }

    // ── BEACH UMBRELLA / PARASOL ───────────────────────────────────────────
    const paraX = -520, paraZ = -80;
    // Pole
    add(new THREE.CylinderGeometry(5, 5, 420, 10),
      new THREE.MeshStandardMaterial({ color: 0xe0c870, roughness: 0.8 }),
      paraX, 210, paraZ);
    // Canopy segments (colourful alternating)
    const canopyColors = [0xff6b6b, 0xffec3e, 0x4fc8ff, 0xff6b6b, 0xffec3e, 0x4fc8ff, 0xff6b6b, 0xffec3e];
    for (let seg = 0; seg < 8; seg++) {
      const ang = (seg / 8) * Math.PI * 2;
      const segMat = new THREE.MeshStandardMaterial({ color: canopyColors[seg], roughness: 0.8, side: THREE.DoubleSide });
      const segGeo = new THREE.ConeGeometry(180, 90, 8, 1, true, ang, Math.PI / 4);
      add(segGeo, segMat, paraX, 420 + 2, paraZ, 0, 0, 0);
    }
    // Canopy cap
    add(new THREE.SphereGeometry(14, 10, 10),
      new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.7 }),
      paraX, 420 + 90 + 10, paraZ);

    // ── BEACH CHAIRS (2) ──────────────────────────────────────────────────
    const makeChair = (cx, cz, ry) => {
      const g = new THREE.Group();
      g.position.set(cx, 0, cz);
      g.rotation.y = ry;
      scene.add(g);
      const woodMat = new THREE.MeshStandardMaterial({ color: 0xd4a850, roughness: 0.88 });
      // Seat
      const seat = new THREE.Mesh(new THREE.BoxGeometry(160, 10, 200), woodMat);
      seat.position.set(0, 60, 0); seat.castShadow = true; g.add(seat);
      // Backrest (angled)
      const back = new THREE.Mesh(new THREE.BoxGeometry(160, 180, 10), woodMat);
      back.position.set(0, 150, -95); back.rotation.x = 0.4; back.castShadow = true; g.add(back);
      // Legs
      [[-68,-88],[-68,88],[68,-88],[68,88]].forEach(([dx,dz]) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(6, 6, 60, 7), woodMat);
        leg.position.set(dx, 30, dz); leg.castShadow = true; g.add(leg);
      });
      // Cushion
      const cushMat = new THREE.MeshStandardMaterial({ color: 0xff9e7a, roughness: 0.95 });
      const cush = new THREE.Mesh(new THREE.BoxGeometry(148, 14, 188), cushMat);
      cush.position.set(0, 68, 0); cush.castShadow = true; g.add(cush);
    };
    makeChair(-280, 80, -0.25);
    makeChair(-420, 100,  0.2);

    // ── BEACH BALL ────────────────────────────────────────────────────────
    const ballGroup = new THREE.Group();
    ballGroup.position.set(320, 68, 280);
    scene.add(ballGroup);
    const ballColors = [0xff3333, 0xffffff, 0x2255ff, 0xffffff, 0xff3333, 0xffffff, 0x2255ff, 0xffffff];
    for (let seg = 0; seg < 8; seg++) {
      const ang = (seg / 8) * Math.PI * 2;
      const segMat = new THREE.MeshStandardMaterial({ color: ballColors[seg], roughness: 0.4 });
      // Use wedge-like spheres at different rotations
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(68, 6, 18, ang, Math.PI / 4), segMat);
      sphere.castShadow = true;
      ballGroup.add(sphere);
    }
    // Solid base sphere so no gaps
    const ballBase = new THREE.Mesh(new THREE.SphereGeometry(66, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }));
    ballBase.castShadow = true;
    ballGroup.add(ballBase);

    // ── SURFBOARD ────────────────────────────────────────────────────────
    const surfGroup = new THREE.Group();
    surfGroup.position.set(540, 0, -60);
    surfGroup.rotation.y = -0.25;
    scene.add(surfGroup);

    // Board body (elongated capsule-ish via scaled sphere + cylinder)
    const boardMat = new THREE.MeshStandardMaterial({ color: 0xff6b35, roughness: 0.5, metalness: 0.05 });
    const boardBody = new THREE.Mesh(new THREE.CylinderGeometry(36, 36, 480, 14), boardMat);
    boardBody.rotation.z = Math.PI / 2;
    boardBody.position.set(0, 36, 0);
    boardBody.scale.set(1, 0.28, 0.7);
    boardBody.castShadow = true;
    surfGroup.add(boardBody);

    // Board nose cap
    const noseMat = new THREE.MeshStandardMaterial({ color: 0xff4500, roughness: 0.5 });
    const nose = new THREE.Mesh(new THREE.SphereGeometry(36, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), noseMat);
    nose.rotation.z = Math.PI / 2;
    nose.position.set(240, 36, 0);
    nose.scale.set(1, 0.28, 0.7);
    surfGroup.add(nose);
    const tail = new THREE.Mesh(new THREE.SphereGeometry(36, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), noseMat);
    tail.rotation.z = -Math.PI / 2;
    tail.position.set(-240, 36, 0);
    tail.scale.set(1, 0.28, 0.7);
    surfGroup.add(tail);

    // Board stripe
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(440, 10, 18), stripeMat);
    stripe.position.set(0, 46, 0);
    surfGroup.add(stripe);

    // Fin
    const finMat = new THREE.MeshStandardMaterial({ color: 0xcc3300, roughness: 0.6, side: THREE.DoubleSide });
    const finGeo = new THREE.ConeGeometry(20, 44, 3);
    const fin = new THREE.Mesh(finGeo, finMat);
    fin.position.set(-180, 14, 0);
    fin.rotation.z = Math.PI;
    fin.scale.set(0.5, 1, 1);
    fin.castShadow = true;
    surfGroup.add(fin);

    // Board leaning against right wall
    surfGroup.rotation.z = 0.18;
    surfGroup.rotation.y = 0.3;
    surfGroup.position.set(RW / 2 - 180, 0, -200);

    // ── SAND BUCKET & SPADE ───────────────────────────────────────────────
    const bucketMat = new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.7 });
    // Bucket body
    add(new THREE.CylinderGeometry(28, 22, 50, 14), bucketMat, -340, 25, 320);
    // Bucket handle
    add(new THREE.TorusGeometry(24, 4, 6, 14, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0xffaa00, roughness: 0.7 }),
      -340, 56, 320, 0, 0, 0);
    // Spade
    add(new THREE.CylinderGeometry(4, 4, 120, 8),
      new THREE.MeshStandardMaterial({ color: 0xd4a0a0, roughness: 0.8 }),
      -290, 60, 330, 0, 0, -0.4);
    add(new THREE.BoxGeometry(30, 28, 8),
      new THREE.MeshStandardMaterial({ color: 0xbdbdbd, roughness: 0.5, metalness: 0.3 }),
      -267, 8, 330, 0, 0, -0.4);

    // ── SHELLS & PEBBLES ──────────────────────────────────────────────────
    const shellMat = new THREE.MeshStandardMaterial({ color: 0xf0d8b0, roughness: 0.6 });
    const shellMat2 = new THREE.MeshStandardMaterial({ color: 0xf4a07a, roughness: 0.6 });
    const shellPositions = [[120,200],[220,380],[80,420],[-100,350],[200,150],[300,300],[-80,180],[160,460]];
    shellPositions.forEach(([sx, sz], i) => {
      const scale = 0.5 + Math.random() * 0.8;
      const m = add(new THREE.SphereGeometry(9 * scale, 7, 5), i % 2 === 0 ? shellMat : shellMat2,
        sx, 4, sz, Math.random() * 0.5, Math.random() * Math.PI, 0);
      m.scale.set(1, 0.5, 1.4);
    });

    // ── DRIFTWOOD SHELF (back wall) ────────────────────────────────────────
    const SHELF_Y = 480;
    add(new THREE.BoxGeometry(760, 14, 42), driftwoodMat, 0, SHELF_Y, -RD / 2 + 24);
    [-340, 340].forEach(dx =>
      add(new THREE.BoxGeometry(9, 80, 44), driftwoodMat, dx, SHELF_Y - 44, -RD / 2 + 24)
    );

    // ── SHELF OBJECTS ─────────────────────────────────────────────────────
    const ST = SHELF_Y + 7;
    // Tall striped lighthouse vase
    add(new THREE.CylinderGeometry(10, 8, 60, 14), whiteMat, -200, ST + 30, -RD / 2 + 24);
    add(new THREE.CylinderGeometry(12, 10, 10, 14),
      new THREE.MeshStandardMaterial({ color: 0xff4444, roughness: 0.8 }), -200, ST + 65, -RD / 2 + 24);
    // Starfish (5 spheres in star pattern)
    const starMat = new THREE.MeshStandardMaterial({ color: 0xff8c42, roughness: 0.9 });
    add(new THREE.SphereGeometry(8, 7, 7), starMat, 0, ST + 8, -RD / 2 + 22);
    [[0,18],[18,0],[0,-18],[-18,0],[13,13]].forEach(([dx, dz]) =>
      add(new THREE.CylinderGeometry(5, 3, 18, 7), starMat, dx, ST + 7, -RD / 2 + 22 + dz, 0.3, Math.atan2(dz, dx), 0)
    );
    // Conch shell (rough approximation)
    const conch = add(new THREE.SphereGeometry(18, 10, 8), shellMat2, 180, ST + 14, -RD / 2 + 22);
    conch.scale.set(1, 0.7, 1.6);
    // Glass bottle
    add(new THREE.CylinderGeometry(8, 10, 48, 12),
      new THREE.MeshStandardMaterial({ color: 0x7fcca0, roughness: 0.2, metalness: 0.1, transparent: true, opacity: 0.75 }),
      -100, ST + 24, -RD / 2 + 24);
    // Tiny scroll (message in a bottle paper)
    add(new THREE.CylinderGeometry(5, 5, 12, 8),
      new THREE.MeshStandardMaterial({ color: 0xfff8e1, roughness: 1 }),
      -100, ST + 54, -RD / 2 + 24);

    // ── PRODUCT PLANES ────────────────────────────────────────────────────
    const loader = new THREE.TextureLoader();
    const productPlanes = [];
    const FW = 160, FH = 200, FD = 9;

    const addFrame = (p, px, py, pz, ry = 0) => {
      const g = new THREE.Group();
      g.position.set(px, py, pz);
      g.rotation.y = ry;
      scene.add(g);

      // Driftwood frame
      const frameMat = new THREE.MeshStandardMaterial({
        color: 0xb8a070, roughness: 0.78,
        emissive: new THREE.Color(0x000000), emissiveIntensity: 0,
      });
      const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(FW, FH, FD), frameMat);
      frameMesh.castShadow = true;
      g.add(frameMesh);

      // Rope corner detail (small tori)
      [[-FW/2+10, FH/2-10],[FW/2-10, FH/2-10],[-FW/2+10,-FH/2+10],[FW/2-10,-FH/2+10]].forEach(([cx,cy]) => {
        const knot = new THREE.Mesh(new THREE.TorusGeometry(7, 3, 6, 8),
          new THREE.MeshStandardMaterial({ color: 0xd4c090, roughness: 0.9 }));
        knot.position.set(cx, cy, FD/2 + 1);
        g.add(knot);
      });

      const imgMat = new THREE.MeshBasicMaterial({ color: 0xe8dfc8 });
      const imgPlane = new THREE.Mesh(new THREE.PlaneGeometry(FW - 22, FH - 22), imgMat);
      imgPlane.position.z = FD / 2 + 0.5;
      imgPlane.userData.product   = p;
      imgPlane.userData.frameMesh = frameMesh;
      g.add(imgPlane);
      productPlanes.push(imgPlane);

      // Teal wave accent line at bottom
      const accentLine = new THREE.Mesh(
        new THREE.PlaneGeometry(FW - 22, 4),
        new THREE.MeshBasicMaterial({ color: 0x00c8e8 })
      );
      accentLine.position.set(0, -(FH / 2 - 12), FD / 2 + 1.0);
      g.add(accentLine);

      if (p?.img) {
        loader.load(p.img, tex => {
          tex.colorSpace = THREE.SRGBColorSpace;
          imgMat.map = tex;
          imgMat.color.set(0xffffff);
          imgMat.needsUpdate = true;
        }, undefined, () => {});
      }
    };

    const backZ = -RD / 2 + FD / 2 + 2;
    [-200, 200].forEach((dx, i) => {
      if (products[i]) addFrame(products[i], dx, 680, backZ, 0);
    });

    // ── HOVER LABEL ───────────────────────────────────────────────────────
    const labelEl = document.createElement("div");
    labelEl.style.cssText = [
      "position:absolute","pointer-events:none",
      "background:rgba(255,250,235,0.97)","backdrop-filter:blur(12px)",
      "border:2px solid rgba(0,200,232,0.4)","padding:10px 18px","border-radius:8px",
      "font-family:'Pacifico',Georgia,cursive","font-size:14px","color:#1a3a4a",
      "line-height:1.5","transition:opacity 0.14s","opacity:0",
      "white-space:nowrap","z-index:20","box-shadow:0 4px 22px rgba(0,160,200,0.15)",
    ].join(";");
    mount.appendChild(labelEl);

    // ── INTERACTION ───────────────────────────────────────────────────────
    const ctrl = { phi: 0, theta: 0.02 };
    const drag = { on: false, x: 0, y: 0, phi0: 0, th0: 0 };
    let ptDown = { x: 0, y: 0 };
    let hoveredPlane = null;
    const raycaster = new THREE.Raycaster();
    const mouse2d   = new THREE.Vector2();
    const el = renderer.domElement;
    const _wp = new THREE.Vector3();

    const onPD = e => {
      drag.on = true; drag.x = e.clientX; drag.y = e.clientY;
      drag.phi0 = ctrl.phi; drag.th0 = ctrl.theta;
      ptDown = { x: e.clientX, y: e.clientY };
      el.style.cursor = "grabbing";
      el.setPointerCapture(e.pointerId);
    };
    const onPM = e => {
      if (drag.on) {
        ctrl.phi   = drag.phi0 - (e.clientX - drag.x) * 0.003;
        ctrl.theta = Math.max(-0.22, Math.min(0.35, drag.th0 + (e.clientY - drag.y) * 0.002));
        return;
      }
      const rect = el.getBoundingClientRect();
      mouse2d.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      mouse2d.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse2d, camera);
      const hits = raycaster.intersectObjects(productPlanes);
      const prev = hoveredPlane;
      hoveredPlane = hits.length ? hits[0].object : null;
      el.style.cursor = hoveredPlane ? "pointer" : "grab";
      if (prev !== hoveredPlane) {
        if (prev?.userData.frameMesh) { prev.userData.frameMesh.material.emissive.set(0,0,0); prev.userData.frameMesh.material.emissiveIntensity = 0; }
        if (hoveredPlane?.userData.frameMesh) { hoveredPlane.userData.frameMesh.material.emissive.set(0, 0.78, 0.9); hoveredPlane.userData.frameMesh.material.emissiveIntensity = 0.22; }
      }
    };
    const onPU = () => { drag.on = false; el.style.cursor = hoveredPlane ? "pointer" : "grab"; };
    const onClick = e => {
      if (Math.hypot(e.clientX - ptDown.x, e.clientY - ptDown.y) > 6) return;
      const rect = el.getBoundingClientRect();
      mouse2d.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      mouse2d.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse2d, camera);
      const hits = raycaster.intersectObjects(productPlanes);
      if (hits.length && hits[0].object.userData.product) onSelectProduct(hits[0].object.userData.product);
    };

    // ── ZOOM (wheel + pinch) ─────────────────────────────────────────────
    const onWheel = e => {
      e.preventDefault();
      zoomDist = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoomDist + e.deltaY * 0.8));
    };

    let pinchStart = null;
    const onTouchStart = e => {
      if (e.touches.length === 2) {
        pinchStart = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };
    const onTouchMove = e => {
      if (e.touches.length === 2 && pinchStart !== null) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        zoomDist = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoomDist - (dist - pinchStart) * 1.5));
        pinchStart = dist;
        e.preventDefault();
      }
    };

    const onKey = e => {
      if (e.key === "ArrowLeft")  ctrl.phi   -= 0.07;
      if (e.key === "ArrowRight") ctrl.phi   += 0.07;
      if (e.key === "ArrowUp")    ctrl.theta  = Math.max(-0.22, ctrl.theta - 0.04);
      if (e.key === "ArrowDown")  ctrl.theta  = Math.min(0.35,  ctrl.theta + 0.04);
      if (e.key === "+" || e.key === "=") zoomDist = Math.max(ZOOM_MIN, zoomDist - 80);
      if (e.key === "-")          zoomDist = Math.min(ZOOM_MAX, zoomDist + 80);
      if (e.key === "Escape")     onClose();
    };
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    el.addEventListener("pointerdown", onPD);
    el.addEventListener("pointermove", onPM);
    el.addEventListener("pointerup",   onPU);
    el.addEventListener("click",       onClick);
    el.addEventListener("wheel",       onWheel, { passive: false });
    el.addEventListener("touchstart",  onTouchStart, { passive: false });
    el.addEventListener("touchmove",   onTouchMove,  { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize",  onResize);

    // ── RENDER LOOP ───────────────────────────────────────────────────────
    let raf;
    let time = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      time += 0.016;

      // Smooth zoom
      camera.position.z += (zoomDist - camera.position.z) * 0.09;

      // Gently bob the beach ball
      ballGroup.position.y = 68 + Math.sin(time * 1.6) * 8;
      ballGroup.rotation.y = time * 0.4;

      // Sway the parasol slightly
      // (canopy is a child via scene, we ref by tag - just skip for simplicity)

      const lx =  Math.sin(ctrl.phi) * Math.cos(ctrl.theta);
      const ly = -Math.sin(ctrl.theta);
      const lz = -Math.cos(ctrl.phi) * Math.cos(ctrl.theta);
      camera.lookAt(camera.position.x + lx * 200, camera.position.y + ly * 200, camera.position.z + lz * 200);

      if (hoveredPlane && !drag.on) {
        hoveredPlane.getWorldPosition(_wp);
        const proj = _wp.clone().project(camera);
        const cx = (proj.x * 0.5 + 0.5) * el.clientWidth;
        const cy = (-proj.y * 0.5 + 0.5) * el.clientHeight;
        const p  = hoveredPlane.userData.product;
        const nm = p?.title ? p.title.split(" ").slice(0, 5).join(" ") : "View piece";
        const pr = p?.price ? ` · $${p.price}` : "";
        labelEl.innerHTML = `🌊 ${nm}${pr}<br><span style="font-size:10px;opacity:0.5;font-family:monospace;letter-spacing:0.1em">TAP TO VIEW</span>`;
        labelEl.style.left = `${cx}px`;
        labelEl.style.top  = `${cy}px`;
        labelEl.style.transform = "translate(-50%, calc(-100% - 20px))";
        labelEl.style.opacity = "1";
      } else {
        labelEl.style.opacity = "0";
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", onPD);
      el.removeEventListener("pointermove", onPM);
      el.removeEventListener("pointerup",   onPU);
      el.removeEventListener("click",       onClick);
      el.removeEventListener("wheel",       onWheel);
      el.removeEventListener("touchstart",  onTouchStart);
      el.removeEventListener("touchmove",   onTouchMove);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize",  onResize);
      renderer.dispose();
      if (mount.contains(el)) mount.removeChild(el);
      if (mount.contains(labelEl)) mount.removeChild(labelEl);
    };
  }, []);

  const hudFont   = "monospace";
  const serifFont = "'Pacifico', Georgia, cursive";

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, background: "#87ceeb", cursor: "grab" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />

      {/* HUD top */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        padding: "20px 28px", zIndex: 10, pointerEvents: "none",
        background: "linear-gradient(to bottom, rgba(30,120,200,0.18) 0%, transparent 100%)"
      }}>
        <div>
          <div style={{ color: "#00d4ff", fontSize: 9, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 5, fontFamily: hudFont }}>
            🏄 {spaceType}
          </div>
          <div style={{ color: "#ffffff", fontSize: 23, fontFamily: serifFont, fontWeight: 400, letterSpacing: "0.01em", textShadow: "0 2px 12px rgba(0,80,180,0.35)" }}>
            {title}
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            pointerEvents: "auto",
            background: "rgba(255,255,255,0.88)",
            border: "2px solid rgba(0,200,230,0.4)",
            color: "#1a5070",
            fontSize: 9, padding: "9px 18px", cursor: "pointer",
            letterSpacing: "0.2em", textTransform: "uppercase",
            fontFamily: hudFont, borderRadius: 20,
            backdropFilter: "blur(8px)",
            boxShadow: "0 2px 14px rgba(0,150,220,0.2)"
          }}>
          ✕ &nbsp; Exit
        </button>
      </div>

      {/* Zoom buttons */}
      <div style={{
        position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", gap: 8, zIndex: 10
      }}>
        {[["＋", -80], ["－", 80]].map(([lbl, delta]) => (
          <button
            key={lbl}
            onClick={() => {
              const el = mountRef.current?.querySelector("canvas");
              if (!el) return;
              const event = new WheelEvent("wheel", { deltaY: delta * 10, bubbles: true });
              el.dispatchEvent(event);
            }}
            style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              border: "2px solid rgba(0,200,230,0.5)",
              color: "#1a5070", fontSize: 20, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: "bold", boxShadow: "0 2px 10px rgba(0,120,200,0.2)",
              backdropFilter: "blur(8px)"
            }}>
            {lbl}
          </button>
        ))}
      </div>

      {/* HUD bottom */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "14px 28px", zIndex: 10, pointerEvents: "none",
        background: "linear-gradient(to top, rgba(20,100,180,0.2) 0%, transparent 100%)"
      }}>
        <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 9, fontFamily: hudFont, letterSpacing: "0.12em" }}>
          🖱 Drag to look · Scroll/pinch to zoom · +/− keys · Click product to view
        </span>
        <span style={{ color: "#00e8ff", fontSize: 9, fontFamily: hudFont, letterSpacing: "0.1em" }}>
          🌊 {products.length} pieces
        </span>
      </div>
    </div>
  );
}
