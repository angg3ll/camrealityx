import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FittingRoom from "./FittingRoom";

export default function Showroom3D({ products, tags, palette, title = "Your Showroom", spaceType = "My Space", color, onClose, onSelectProduct }) {
  const mountRef = useRef(null);
  const ctrlRef  = useRef({ phi: 0, theta: 0.0 });
  const camPosRef = useRef({ x: 0, z: 0, tx: 0, tz: 0 }); // current & target camera XZ
  const [fittingRoomOpen, setFittingRoomOpen] = useState(false);
  const openFittingRoomRef = useRef(null);
  openFittingRoomRef.current = () => setFittingRoomOpen(true);

  const accent = palette?.[0] || color || "#c8a87a";
  const wallL  = products.filter((_, i) => i % 2 === 0).slice(0, 3);
  const wallR  = products.filter((_, i) => i % 2 === 1).slice(0, 3);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const ctrl = ctrlRef.current;

    // ── RENDERER ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace  = THREE.SRGBColorSpace;
    renderer.toneMapping       = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);

    // ── SCENE ─────────────────────────────────────────────────────────────────
    const BG = 0xf5f0e8;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BG);
    scene.fog = new THREE.Fog(BG, 2400, 4000);

    // ── CAMERA — positioned high and back so nothing blocks entry view ────────
    const camera = new THREE.PerspectiveCamera(58, mount.clientWidth / mount.clientHeight, 1, 6000);
    // Walk-in starts far back, camera is raised well above bench height
    const WALK_START_Z = 2000;
    const WALK_END_Z   = 950;
    const CAM_Y        = 310; // above bench (196) and rug
    camera.position.set(0, CAM_Y, WALK_START_Z);

    // ── DIMENSIONS ────────────────────────────────────────────────────────────
    const RW = 1800, RH = 920, RD = 2000;
    const accentCol = new THREE.Color(accent);

    // ── SHARED MATERIALS ──────────────────────────────────────────────────────
    const oakMat   = new THREE.MeshStandardMaterial({ color: 0xc8b48a, roughness: 0.65 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0xdedad6, metalness: 0.9, roughness: 0.14 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xfaf8f4, roughness: 0.92 });

    const add = (geo, mat, px, py, pz, rx = 0, ry = 0, rz = 0) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(px, py, pz);
      m.rotation.set(rx, ry, rz);
      m.castShadow = true;
      m.receiveShadow = true;
      scene.add(m);
      return m;
    };

    // ── FLOOR — polished light travertine ─────────────────────────────────────
    add(
      new THREE.PlaneGeometry(RW, RD),
      new THREE.MeshStandardMaterial({ color: 0xe8e0d0, roughness: 0.18, metalness: 0.06 }),
      0, 0, 0, -Math.PI / 2
    );

    // ── WALLS ─────────────────────────────────────────────────────────────────
    const wallMat  = new THREE.MeshStandardMaterial({ color: 0xf5f0e8, roughness: 0.95 });
    const backWallMat = new THREE.MeshStandardMaterial({ color: 0xeee8dc, roughness: 0.95 });
    // Back wall
    add(new THREE.PlaneGeometry(RW, RH), backWallMat, 0, RH / 2, -RD / 2);
    // Side walls
    add(new THREE.PlaneGeometry(RD, RH), wallMat,  -RW / 2, RH / 2, 0, 0,  Math.PI / 2);
    add(new THREE.PlaneGeometry(RD, RH), wallMat.clone(),  RW / 2, RH / 2, 0, 0, -Math.PI / 2);
    // Ceiling
    add(new THREE.PlaneGeometry(RW, RD), new THREE.MeshStandardMaterial({ color: 0xfaf8f4, roughness: 0.98 }), 0, RH, 0, Math.PI / 2);

    // ── OPEN STOREFRONT (front "wall" is open — mall entrance) ────────────────
    // Just side pillars and a header beam to frame the entrance
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0xd8d0be, roughness: 0.8 });
    add(new THREE.BoxGeometry(36, RH, 36), pillarMat, -RW / 2 + 18, RH / 2, RD / 2 - 18);
    add(new THREE.BoxGeometry(36, RH, 36), pillarMat,  RW / 2 - 18, RH / 2, RD / 2 - 18);
    // Header beam across front entrance
    add(new THREE.BoxGeometry(RW, 55, 36), new THREE.MeshStandardMaterial({ color: 0xcfc8b8, roughness: 0.8 }), 0, RH - 27, RD / 2 - 18);
    // Store name on header
    add(new THREE.BoxGeometry(480, 28, 4), new THREE.MeshStandardMaterial({ color: 0xf5f0e8, roughness: 0.9 }), 0, RH - 27, RD / 2 - 5);

    // ── BASE MOULDING ─────────────────────────────────────────────────────────
    const moulMat = new THREE.MeshStandardMaterial({ color: 0xe8e2d4, roughness: 0.88 });
    add(new THREE.BoxGeometry(RW + 8, 52, 8), moulMat, 0, 26, -RD / 2 + 4);
    add(new THREE.BoxGeometry(8, 52, RD),     moulMat, -RW / 2 + 4, 26, 0);
    add(new THREE.BoxGeometry(8, 52, RD),     moulMat,  RW / 2 - 4, 26, 0);

    // ── AREA RUG — center of shop ─────────────────────────────────────────────
    // Moved back so it doesn't sit right at camera entry point
    add(
      new THREE.BoxGeometry(880, 5, 620),
      new THREE.MeshStandardMaterial({ color: 0xb89070, roughness: 1 }),
      0, 2, -80
    );
    add(new THREE.BoxGeometry(882, 4, 14), new THREE.MeshStandardMaterial({ color: 0xa07858, roughness: 1 }), 0, 2,  230);
    add(new THREE.BoxGeometry(882, 4, 14), new THREE.MeshStandardMaterial({ color: 0xa07858, roughness: 1 }), 0, 2, -390);

    // ── LIGHTING ──────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xfff4e0, 1.0));

    // Track spot lights — evenly spaced (no visible ceiling rail)
    [-660, -220, 220, 660].forEach(tz => {
      const spot = new THREE.SpotLight(0xffc880, 3.8, 1400, Math.PI / 6, 0.55, 1.4);
      spot.position.set(0, RH - 12, tz);
      spot.target.position.set(0, 0, tz);
      spot.castShadow = true;
      spot.shadow.mapSize.setScalar(512);
      spot.shadow.bias = -0.001;
      scene.add(spot, spot.target);

      const bulb = new THREE.Mesh(new THREE.SphereGeometry(5, 10, 10), new THREE.MeshBasicMaterial({ color: 0xffeebb }));
      bulb.position.set(0, RH - 18, tz);
      scene.add(bulb);
    });

    // Fill lights
    const fill = new THREE.PointLight(0xfff8ee, 0.5, 2800);
    fill.position.set(0, 400, 1400);
    scene.add(fill);

    const wl1 = new THREE.PointLight(0xffd8a0, 1.0, 900);
    wl1.position.set(-RW / 2 + 160, 500, -100);
    scene.add(wl1);
    const wl2 = new THREE.PointLight(0xffd8a0, 1.0, 900);
    wl2.position.set(RW / 2 - 160, 500, -100);
    scene.add(wl2);

    // ── GARMENT PALETTE ───────────────────────────────────────────────────────
    const GARMENT_COLS = [
      0xe8e0d0, 0xc8bba8, 0xb8a890, 0xd4c4b0,
      0x9aaa98, 0xc4b0a4, 0xa89888, 0xd8d0c0,
      0xe0d4c0, 0xb0a898, 0xccc0ae, 0xa8b0a0,
    ];
    let gColorIdx = 0;

    const addGarments = (railX, railY, railZ, count, rotY, spacing) => {
      for (let i = 0; i < count; i++) {
        const col = GARMENT_COLS[gColorIdx % GARMENT_COLS.length];
        gColorIdx++;
        const offZ = rotY === 0 ? spacing * (i - (count - 1) / 2) : 0;
        const offX = rotY !== 0 ? spacing * (i - (count - 1) / 2) : 0;

        // No visible hooks or crossbars — garments hang directly from rail
        const gH = 200 + (i % 3) * 32;
        const garment = new THREE.Mesh(
          new THREE.BoxGeometry(28, gH, 4),
          new THREE.MeshStandardMaterial({ color: col, roughness: 0.97 })
        );
        garment.position.set(railX + offX, railY - 16 - gH / 2, railZ + offZ);
        garment.rotation.y = rotY;
        garment.castShadow = true;
        scene.add(garment);
      }
    };

    // ── FREESTANDING RACK ─────────────────────────────────────────────────────
    const addRack = (cx, cz, len = 580) => {
      const rail = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 3.5, len, 14), metalMat);
      rail.rotation.z = Math.PI / 2;
      rail.position.set(cx, 680, cz);
      scene.add(rail);

      // Just two vertical legs — clean
      const half = len / 2 - 8;
      [-half, half].forEach(dx => {
        add(new THREE.CylinderGeometry(3, 3, 180, 10), metalMat, cx + dx, 590, cz);
        // Small flat base foot
        add(new THREE.BoxGeometry(80, 6, 18), metalMat, cx + dx, 6, cz);
      });

      addGarments(cx, 680, cz, 5, 0, 96);
    };

    // ── WALL RAIL ─────────────────────────────────────────────────────────────
    const addWallRail = (wx, wz, len) => {
      const rail = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 3.5, len, 14), metalMat);
      rail.rotation.z = Math.PI / 2;
      rail.position.set(wx, 680, wz);
      scene.add(rail);
      // Minimal brackets — just two thin wall mounts
      [-len / 2 + 40, len / 2 - 40].forEach(dz => {
        add(new THREE.BoxGeometry(6, 5, 6), metalMat, wx, 686, wz + dz);
      });
    };

    // ── OAK DISPLAY LEDGE (back wall) ─────────────────────────────────────────
    add(new THREE.BoxGeometry(640, 10, 42), oakMat, 0, 480, -RD / 2 + 24);
    [-290, 290].forEach(dx => add(new THREE.BoxGeometry(7, 80, 44), oakMat, dx, 440, -RD / 2 + 24));

    // Shelf objects — all bottoms start at shelf top (y=485)
    const SHELF_TOP = 485;
    // White vase: H=34 → centre at SHELF_TOP + 17
    add(new THREE.CylinderGeometry(10, 7, 34, 12), whiteMat, 160, SHELF_TOP + 17, -RD / 2 + 24);
    add(new THREE.SphereGeometry(10, 10, 10),       whiteMat, 160, SHELF_TOP + 34 + 10, -RD / 2 + 24);
    // Candle: H=24 → centre at SHELF_TOP + 12
    add(new THREE.CylinderGeometry(8, 7, 24, 10), new THREE.MeshStandardMaterial({ color: 0xf5e8d0, roughness: 0.8 }), -100, SHELF_TOP + 12, -RD / 2 + 24);
    add(new THREE.SphereGeometry(4, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffcc66 }), -160, SHELF_TOP + 24 + 5, -RD / 2 + 24);
    const candleGlow = new THREE.PointLight(0xff9944, 0.5, 300);
    candleGlow.position.set(-160, SHELF_TOP + 40, -RD / 2 + 50);
    scene.add(candleGlow);

    // Succulent: pot H=18 → centre at SHELF_TOP + 9
    const sucPX = 48, sucPZ = -RD / 2 + 24;
    add(new THREE.CylinderGeometry(12, 9, 18, 10), new THREE.MeshStandardMaterial({ color: 0xe4dcd0, roughness: 0.85 }), sucPX, SHELF_TOP + 9, sucPZ);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      add(new THREE.SphereGeometry(7, 8, 8), new THREE.MeshStandardMaterial({ color: 0x7a9a60, roughness: 1 }), sucPX + Math.sin(a) * 9, SHELF_TOP + 18 + 4, sucPZ + Math.cos(a) * 9);
    }
    add(new THREE.SphereGeometry(7, 8, 8), new THREE.MeshStandardMaterial({ color: 0x8aaa70, roughness: 1 }), sucPX, SHELF_TOP + 22, sucPZ);

    // ── FITTING ROOM — flush with right wall, full height ─────────────────────
    const STALL_W = 260;
    const STALL_H = RH - 10;                 // nearly ceiling height (910)
    const STALL_D = 240;                     // depth front-to-back
    const frzX = RW / 2 - STALL_W;          // left divider x (right wall is the room wall)
    const frzZ = -RD / 2 + 10;              // back of stall sits against back wall

    const frWallMat = new THREE.MeshStandardMaterial({ color: 0xe8e2d8, roughness: 0.9 });
    const curtainMat = new THREE.MeshStandardMaterial({ color: 0xd8cfc0, roughness: 1, side: THREE.DoubleSide });

    // Left divider wall (room right wall is the other side — no right panel needed)
    add(new THREE.BoxGeometry(10, STALL_H, STALL_D), frWallMat, frzX, STALL_H / 2, frzZ + STALL_D / 2);

    // Curtain rod — full stall width, lowered
    const rodY = STALL_H - 130;
    add(new THREE.CylinderGeometry(3, 3, STALL_W, 10), metalMat,
      frzX + STALL_W / 2, rodY, frzZ + 14, 0, 0, Math.PI / 2);

    // Curtain — half-open, hangs from new rod height
    add(new THREE.BoxGeometry(STALL_W * 0.55, rodY - 20, 5), curtainMat,
      frzX + STALL_W * 0.28, (rodY - 20) / 2 + 10, frzZ + 16);

    // Curtain rings along rod
    [0.08, 0.18, 0.3, 0.42, 0.54].forEach(t => {
      add(new THREE.TorusGeometry(5, 1.2, 8, 12), metalMat,
        frzX + STALL_W * t, rodY, frzZ + 14, Math.PI / 2, 0, 0);
    });

    // ── FITTING ROOM — back wall text sign ────────────────────────────────────
    const frTextCanvas = document.createElement("canvas");
    frTextCanvas.width = 512; frTextCanvas.height = 96;
    const frCtx = frTextCanvas.getContext("2d");
    frCtx.fillStyle = "#1e1a16";
    frCtx.fillRect(0, 0, 512, 96);
    frCtx.strokeStyle = accentCol.getStyle();
    frCtx.lineWidth = 2;
    frCtx.strokeRect(10, 10, 492, 76);
    frCtx.fillStyle = accentCol.getStyle();
    frCtx.font = "bold 34px serif";
    frCtx.textAlign = "center";
    frCtx.textBaseline = "middle";
    frCtx.letterSpacing = "0.18em";
    frCtx.fillText("FITTING ROOM", 256, 48);
    const frTextTex = new THREE.CanvasTexture(frTextCanvas);
    const frTextMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(230, 44),
      new THREE.MeshBasicMaterial({ map: frTextTex })
    );
    frTextMesh.position.set(frzX + STALL_W / 2, STALL_H - 30, -RD / 2 + 3);
    scene.add(frTextMesh);

    // Wall hook inside stall
    add(new THREE.CylinderGeometry(2, 2, 18, 8), metalMat,
      frzX + 24, STALL_H * 0.55, frzZ + 60, Math.PI / 2, 0, 0);

    // ── FULL-LENGTH MIRROR (Fixed Orientation) ──────────────────────────
    const mirrorX = -RW / 2 + 20;
    const mirrorZ = -RD / 2 + 300;
    // Frame
    add(new THREE.BoxGeometry(5, 450, 150), oakMat, mirrorX, 225, mirrorZ);
    // Reflective Surface (Slightly offset in X to sit on top of the frame)
    add(new THREE.BoxGeometry(2, 430, 130), new THREE.MeshStandardMaterial({ 
        color: 0xdaeef8, 
        metalness: 1.0, 
        roughness: 0.05 
    }), mirrorX + 4, 225, mirrorZ);

    // ── TABLE BUILDER (shared dimensions & style) ─────────────────────────────
    const TABLE_W = 460, TABLE_H = 14, TABLE_D = 100, LEG_H = 184, LEG_R = 6;
    const TABLE_TOP_Y = LEG_H + TABLE_H; // 198

    const addTable = (cx, cz) => {
      add(new THREE.BoxGeometry(TABLE_W, TABLE_H, TABLE_D), oakMat, cx, TABLE_TOP_Y, cz);
      [[-190, -34], [-190, 34], [190, -34], [190, 34]].forEach(([dx, dz]) =>
        add(new THREE.CylinderGeometry(LEG_R, LEG_R, LEG_H, 10), oakMat, cx + dx, LEG_H / 2, cz + dz)
      );
    };

    // ── RIGHT TABLE — folded sweaters ────────────────────────────────────────
    const rightTableX = 380, tableZ = 160;
    addTable(rightTableX, tableZ);

    const LINEN_COLS = [
      [0xe8e2d8, 0xddd6ca, 0xd2cbbf],
      [0xd4cec8, 0xcac4be, 0xc0bab4],
    ];

    const SWEATER_COLS = [
      [0xd8cfc0, 0xccc4b4, 0xc0b8a8],
      [0xa8b8b0, 0x98a8a0, 0xb0beb8],
      [0xd4c0b0, 0xc8b4a4, 0xbcaa9a],
    ];
    [-100, 20, 140].forEach((sx, si) => {
      SWEATER_COLS[si].forEach((col, li) => {
        const sH = 22, py = TABLE_TOP_Y + TABLE_H / 2 + sH / 2 + li * (sH + 1);
        add(new THREE.BoxGeometry(84, sH, 60), new THREE.MeshStandardMaterial({ color: col, roughness: 0.98 }), rightTableX + sx, py, tableZ);
        [-34, 34].forEach(dx =>
          add(new THREE.BoxGeometry(14, sH - 6, 18), new THREE.MeshStandardMaterial({ color: col, roughness: 0.98 }), rightTableX + sx + dx, py - 2, tableZ + 18)
        );
      });
    });

    // Folded linen stack — right end of right table
    let linenTopMeshRight = null;
    LINEN_COLS[1].forEach((col, li) => {
      const lH = 18, py = TABLE_TOP_Y + TABLE_H / 2 + lH / 2 + li * (lH + 1);
      const linenMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.99, emissive: new THREE.Color(0x000000), emissiveIntensity: 0 });
      const linenMesh = new THREE.Mesh(new THREE.BoxGeometry(90, lH, 65), linenMat);
      linenMesh.position.set(rightTableX + 160, py, tableZ);
      linenMesh.castShadow = true; linenMesh.receiveShadow = true;
      scene.add(linenMesh);
      linenTopMeshRight = linenMesh;
      add(new THREE.BoxGeometry(90, 2, 2), new THREE.MeshStandardMaterial({ color: col - 0x0a0a0a, roughness: 1 }), rightTableX + 160, py + lH / 2, tableZ - 30);
    });

    // ── LEFT TABLE — linens, candles, spray bottles ───────────────────────────
    const leftTableX = -380;
    addTable(leftTableX, tableZ);

    const tableTopY = TABLE_TOP_Y + TABLE_H / 2; // surface y

    // Folded linens — one stack on left end
    let linenTopMesh = null;
    LINEN_COLS[0].forEach((col, li) => {
      const lH = 18, py = tableTopY + lH / 2 + li * (lH + 1);
      const linenMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.99, emissive: new THREE.Color(0x000000), emissiveIntensity: 0 });
      const linenMesh = new THREE.Mesh(new THREE.BoxGeometry(90, lH, 65), linenMat);
      linenMesh.position.set(leftTableX - 150, py, tableZ);
      linenMesh.castShadow = true; linenMesh.receiveShadow = true;
      scene.add(linenMesh);
      linenTopMesh = linenMesh;
      add(new THREE.BoxGeometry(90, 2, 2), new THREE.MeshStandardMaterial({ color: col - 0x0a0a0a, roughness: 1 }), leftTableX - 150, py + lH / 2, tableZ - 30);
    });

    // Candles — three in a row, front of table
    const candleZ = tableZ + 40;
    const candleMeshes = [];
    [30, 70, 110].forEach((sx, i) => {
      const cH = 50 + i * 20;
      const cMat = new THREE.MeshStandardMaterial({ color: i === 0 ? 0xf5ede0 : i === 1 ? 0xe8ddd0 : 0xddd0c4, roughness: 0.85, emissive: new THREE.Color(0x000000), emissiveIntensity: 0 });
      const candleBody = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, cH, 12), cMat);
      candleBody.position.set(leftTableX + sx - 90, tableTopY + cH / 2, candleZ);
      candleBody.castShadow = true; candleBody.receiveShadow = true;
      scene.add(candleBody);
      candleMeshes.push(candleBody);
      // Flame glow
      add(new THREE.SphereGeometry(3.5, 7, 7), new THREE.MeshBasicMaterial({ color: 0xffcc55 }),
        leftTableX + sx - 90, tableTopY + cH + 5, candleZ);
      const cgl = new THREE.PointLight(0xff9933, 0.3 + i * 0.08, 220);
      cgl.position.set(leftTableX + sx - 90, tableTopY + cH + 12, candleZ);
      scene.add(cgl);
    });

    // Spray bottles — three in a row, back of table
    const sprayZ = tableZ - 20;
    let sprayBottleMidMesh = null;
    [60, 110, 160].forEach((sx, i) => {
      const bH = 80 + i * 8;
      const bCol = i === 0 ? 0xd8e0d8 : i === 1 ? 0xe0dcd4 : 0xd4d8dc;
      // Bottle body — capture middle one for product linking
      const bodyMesh = add(new THREE.CylinderGeometry(10, 11, bH, 12),
        new THREE.MeshStandardMaterial({ color: bCol, roughness: 0.4, metalness: 0.1 }),
        leftTableX + sx, tableTopY + bH / 2, sprayZ);
      if (i === 1) sprayBottleMidMesh = bodyMesh;
      // Neck
      add(new THREE.CylinderGeometry(5, 10, 14, 10),
        new THREE.MeshStandardMaterial({ color: bCol, roughness: 0.4 }),
        leftTableX + sx, tableTopY + bH + 7, sprayZ);
      // Nozzle head
      add(new THREE.CylinderGeometry(5, 5, 8, 10),
        new THREE.MeshStandardMaterial({ color: 0xc8c4be, metalness: 0.4, roughness: 0.3 }),
        leftTableX + sx, tableTopY + bH + 18, sprayZ);
      // Trigger
      add(new THREE.BoxGeometry(18, 5, 7),
        new THREE.MeshStandardMaterial({ color: 0xc8c4be, metalness: 0.3, roughness: 0.4 }),
        leftTableX + sx + 10, tableTopY + bH + 14, sprayZ);
    });


    // ── PLANTS & GREENERY ─────────────────────────────────────────────────────
    const terracotta = new THREE.MeshStandardMaterial({ color: 0xb87860, roughness: 0.9 });
    const darkGreen  = new THREE.MeshStandardMaterial({ color: 0x3a5530, roughness: 1 });
    const midGreen   = new THREE.MeshStandardMaterial({ color: 0x4a6835, roughness: 1 });
    const lightGreen = new THREE.MeshStandardMaterial({ color: 0x6a8850, roughness: 1 });
    const creamPot   = new THREE.MeshStandardMaterial({ color: 0xe8e2d8, roughness: 0.85 });

    // Helper: trailing vine that hangs DOWN from a given point
    const addVine = (ox, oy, oz, leafCount, col1, col2) => {
      for (let i = 0; i < leafCount; i++) {
        const t = i / (leafCount - 1);
        const vx = ox + Math.sin(i * 1.5) * (10 + t * 22);
        const vy = oy - t * t * 140;
        const vz = oz + Math.cos(i * 1.1) * (8 + t * 16);
        add(
          new THREE.SphereGeometry(Math.max(7.5 - t * 2, 5), 7, 7),
          new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? col1 : col2, roughness: 1 }),
          vx, vy, vz
        );
      }
    };

    // 1. Fiddle-leaf fig — left back corner
    // Pot top sits at y=46, stem grows from pot top to canopy base
    const flfX = -RW / 2 + 170, flfZ = -RD / 2 + 170;
    const flfPotH = 46, flfStemH = 260;
    add(new THREE.CylinderGeometry(28, 22, flfPotH, 14), terracotta.clone(), flfX, flfPotH / 2, flfZ);
    // Stem: starts at pot top, goes up
    add(new THREE.CylinderGeometry(5, 6, flfStemH, 8), darkGreen.clone(), flfX, flfPotH + flfStemH / 2, flfZ);
    // Canopy: centred at stem top
    const flfCanopyY = flfPotH + flfStemH;
    [[0, 0], [-32, -22], [28, 26], [4, -10]].forEach(([dx, dz]) =>
      add(new THREE.SphereGeometry(64, 11, 11), midGreen.clone(), flfX + dx, flfCanopyY, flfZ + dz)
    );

    // 2. Snake plant — right back, near fitting rooms
    const snakePX = frzX - 80, snakePZ = -RD / 2 + 160;
    const snakePotH = 40;
    add(new THREE.CylinderGeometry(24, 18, snakePotH, 14), creamPot.clone(), snakePX, snakePotH / 2, snakePZ);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      const h = 190 + i * 26;
      const lean = 0.16 + (i % 2) * 0.14;
      const lx = Math.sin(a) * 8, lz = Math.cos(a) * 8;
      // Leaf base starts exactly at pot top
      const leafBaseY = snakePotH;
      const leaf = new THREE.Mesh(
        new THREE.BoxGeometry(12, h, 4),
        new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? 0x3a5a30 : 0x4a6840, roughness: 1 })
      );
      leaf.position.set(snakePX + lx, leafBaseY + h / 2, snakePZ + lz);
      leaf.rotation.set(Math.cos(a) * lean, 0, Math.sin(a) * lean * -0.5);
      leaf.castShadow = true;
      scene.add(leaf);
      const stripe = new THREE.Mesh(
        new THREE.BoxGeometry(3, h * 0.85, 5),
        new THREE.MeshStandardMaterial({ color: 0x7a9060, roughness: 1 })
      );
      stripe.position.set(snakePX + lx, leafBaseY + h / 2, snakePZ + lz);
      stripe.rotation.copy(leaf.rotation);
      scene.add(stripe);
    }

    // 3. Monstera — centre-right, visible on entry
    const monsPX = RW / 2 - 260, monsPZ = 320;
    const monsPotH = 40, monsStemH = 200;
    add(new THREE.CylinderGeometry(26, 20, monsPotH, 14), terracotta.clone(), monsPX, monsPotH / 2, monsPZ);
    // Stem from pot top
    add(new THREE.CylinderGeometry(5, 6, monsStemH, 8), darkGreen.clone(), monsPX, monsPotH + monsStemH / 2, monsPZ);
    // Leaves fanning out from stem top
    const monsCanopyY = monsPotH + monsStemH;
    [[0, 0], [-30, -20], [28, 18], [-10, 28], [24, -28]].forEach(([dx, dz], i) => {
      const leafMesh = new THREE.Mesh(
        new THREE.SphereGeometry(42 + i * 4, 9, 9),
        new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? 0x3d6030 : 0x4e7040, roughness: 1 })
      );
      leafMesh.scale.set(1, 0.38, 1);
      leafMesh.position.set(monsPX + dx, monsCanopyY + i * 14, monsPZ + dz);
      leafMesh.castShadow = true;
      scene.add(leafMesh);
    });

    // 4. Small moss ball on oak shelf
    add(new THREE.SphereGeometry(14, 10, 10), new THREE.MeshStandardMaterial({ color: 0x6a8855, roughness: 1 }), -60, 496, -RD / 2 + 28);

    // 5. Hanging planter — left side, ceiling suspended
    const hangPX = -RW / 2 + 380, hangPZ = -300;
    const hangY = RH - 80;
    const hangPotH = 30;
    // Cord from ceiling to pot top
    const hangCordLen = 220;
    add(new THREE.CylinderGeometry(1.5, 1.5, hangCordLen, 6), metalMat, hangPX, hangY - hangCordLen / 2, hangPZ);
    // Pot sits at cord bottom
    const hangPotY = hangY - hangCordLen - hangPotH / 2;
    add(new THREE.CylinderGeometry(28, 20, hangPotH, 14), creamPot.clone(), hangPX, hangPotY, hangPZ);
    // Vine trails from pot top downward
    addVine(hangPX, hangPotY + hangPotH / 2, hangPZ, 10, 0x5a8050, 0x70a068);

    // 6. Hanging planter — right side
    const hang2PX = RW / 2 - 380, hang2PZ = -300;
    add(new THREE.CylinderGeometry(1.5, 1.5, hangCordLen, 6), metalMat, hang2PX, hangY - hangCordLen / 2, hang2PZ);
    const hang2PotY = hangY - hangCordLen - hangPotH / 2;
    add(new THREE.CylinderGeometry(28, 20, hangPotH, 14), creamPot.clone(), hang2PX, hang2PotY, hang2PZ);
    addVine(hang2PX, hang2PotY + hangPotH / 2, hang2PZ, 10, 0x627848, 0x5a8050);

    // 7. Dwarf bamboo clump — right front corner
    const bambPX = RW / 2 - 140, bambPZ = 720;
    const bambPotH = 42;
    add(new THREE.CylinderGeometry(30, 24, bambPotH, 14), terracotta.clone(), bambPX, bambPotH / 2, bambPZ);
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      const h = 260 + i * 30;
      const bx = Math.sin(a) * 12, bz = Math.cos(a) * 12;
      // Stalk starts exactly at pot top
      add(new THREE.CylinderGeometry(4, 4, h, 6),
        new THREE.MeshStandardMaterial({ color: 0x7a9a60, roughness: 0.8 }),
        bambPX + bx, bambPotH + h / 2, bambPZ + bz);
      if (i % 2 === 0) {
        add(new THREE.SphereGeometry(22, 7, 7), lightGreen.clone(), bambPX + bx, bambPotH + h, bambPZ + bz);
      }
    }

    // 8. Small potted herb — beside right table
    const herbX = rightTableX + 260, herbZ = tableZ;
    const herbPotH = 20;
    add(new THREE.CylinderGeometry(14, 10, herbPotH, 10),
      new THREE.MeshStandardMaterial({ color: 0xd0c8b8, roughness: 0.9 }),
      herbX, herbPotH / 2, herbZ);
    // Herb stems from pot top
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const stemH = 22 + (i % 3) * 8;
      add(new THREE.CylinderGeometry(1.5, 1.5, stemH, 6),
        new THREE.MeshStandardMaterial({ color: 0x5a8840, roughness: 1 }),
        herbX + Math.sin(a) * 6, herbPotH + stemH / 2, herbZ + Math.cos(a) * 6);
      add(new THREE.SphereGeometry(9, 7, 7),
        new THREE.MeshStandardMaterial({ color: 0x7aaa60, roughness: 1 }),
        herbX + Math.sin(a) * 7, herbPotH + stemH + 6, herbZ + Math.cos(a) * 7);
    }

    // ── PRODUCT FRAMES ────────────────────────────────────────────────────────
    const loader = new THREE.TextureLoader();
    const productPlanes = [];
    const FW = 162, FH = 204, FD = 9;

    const addFrame = (p, px, py, pz, ry) => {
      const g = new THREE.Group();
      g.position.set(px, py, pz);
      g.rotation.y = ry;
      scene.add(g);

      // Bug fix: create individual material per frame so emissive changes don't bleed
      const frameMat = new THREE.MeshStandardMaterial({
        color: 0xb89c78, roughness: 0.7, metalness: 0.05,
        emissive: new THREE.Color(0x000000), emissiveIntensity: 0
      });
      const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(FW, FH, FD), frameMat);
      frameMesh.castShadow = true;
      g.add(frameMesh);

      const imgMat = new THREE.MeshBasicMaterial({ color: 0xe8e0d4 });
      const imgPlane = new THREE.Mesh(new THREE.PlaneGeometry(FW - 20, FH - 20), imgMat);
      imgPlane.position.z = FD / 2 + 0.5;
      imgPlane.userData.product   = p;
      imgPlane.userData.frameMesh = frameMesh;
      g.add(imgPlane);
      productPlanes.push(imgPlane);

      const line = new THREE.Mesh(
        new THREE.PlaneGeometry(FW - 20, 3),
        new THREE.MeshBasicMaterial({ color: accentCol })
      );
      line.position.set(0, -(FH / 2 - 12), FD / 2 + 0.9);
      g.add(line);

      if (p.img) {
        loader.load(p.img, tex => {
          tex.colorSpace = THREE.SRGBColorSpace;
          imgMat.map = tex;
          imgMat.color.set(0xffffff);
          imgMat.needsUpdate = true;
        }, undefined, () => {});
      }
    };

    // Product frames on back wall only — centred left of the fitting room section
    // Back wall is at z = -RD/2, frames face forward (no ry rotation needed)
    const backFrameZ = -RD / 2 + FD / 2 + 1;
    
    [3, 5].forEach((idx, i) => {
    const p = products[idx];
    if (p) addFrame(p, [-160, 160][i], 660, backFrameZ, 0);
    });

    // ── SCENE OBJECT PRODUCT LINKING ──────────────────────────────────────────
    // Link the middle candle to products[0]
    if (products[0] && candleMeshes[1]) {
      candleMeshes[1].userData.product = products[0];
      candleMeshes[1].userData.mesh    = candleMeshes[1];
      productPlanes.push(candleMeshes[1]);
    }
    // Link left linen stack to products[1]
    if (products[4] && linenTopMesh) {
      linenTopMesh.userData.product = products[4];
      linenTopMesh.userData.mesh    = linenTopMesh;
      productPlanes.push(linenTopMesh);
    }
    // Link right linen stack to wool throw
    if (products[1] && linenTopMeshRight) {
      linenTopMeshRight.userData.product = products[1];
      linenTopMeshRight.userData.mesh    = linenTopMeshRight;
      productPlanes.push(linenTopMeshRight);
    }
    // Link middle spray bottle
    if (products[2] && sprayBottleMidMesh) {
      sprayBottleMidMesh.userData.product = products[2];
      sprayBottleMidMesh.userData.mesh    = sprayBottleMidMesh;
      productPlanes.push(sprayBottleMidMesh);
    }

    // ── HOVER LABEL ───────────────────────────────────────────────────────────
    const labelEl = document.createElement("div");
    labelEl.style.cssText = [
      "position:absolute", "pointer-events:none",
      "background:rgba(250,247,242,0.96)", "backdrop-filter:blur(10px)",
      "-webkit-backdrop-filter:blur(10px)",
      "border:1px solid rgba(0,0,0,0.09)",
      "padding:10px 18px", "border-radius:4px",
      "font-family:'Crimson Pro',Georgia,serif",
      "font-size:14px", "color:#2a2218",
      "line-height:1.4", "transition:opacity 0.14s",
      "opacity:0", "white-space:nowrap", "z-index:20",
      "box-shadow:0 4px 22px rgba(0,0,0,0.07)",
    ].join(";");
    mount.appendChild(labelEl);

    // ── INTERACTION ───────────────────────────────────────────────────────────
    let walkinProgress = 0;
    camera.position.set(0, CAM_Y, WALK_START_Z);
    const camPos = camPosRef.current;
    camPos.x = 0; camPos.z = WALK_END_Z;
    camPos.tx = 0; camPos.tz = WALK_END_Z;

    const drag = { on: false, x: 0, y: 0, phi0: 0, th0: 0 };
    let ptDown = { x: 0, y: 0 };
    let hoveredPlane = null;

    const raycaster = new THREE.Raycaster();
    const mouse2d   = new THREE.Vector2();
    const el = renderer.domElement;

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
        ctrl.theta = Math.max(-0.18, Math.min(0.35, drag.th0 + (e.clientY - drag.y) * 0.002));
        return;
      }
      const rect = el.getBoundingClientRect();
      mouse2d.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      mouse2d.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse2d, camera);
      const hits = raycaster.intersectObjects(productPlanes);
      const prev = hoveredPlane;
      hoveredPlane = hits.length ? hits[0].object : null;
      const frHover = raycaster.intersectObjects([frTextMesh]).length > 0;

      el.style.cursor = (hoveredPlane || frHover) ? "pointer" : "grab";

      if (prev !== hoveredPlane) {
        if (prev) {
          const fm = prev.userData.frameMesh || prev.userData.mesh;
          if (fm) { fm.material.emissive.set(0, 0, 0); fm.material.emissiveIntensity = 0; }
        }
        if (hoveredPlane) {
          const fm = hoveredPlane.userData.frameMesh || hoveredPlane.userData.mesh;
          if (fm) { fm.material.emissive.setRGB(accentCol.r, accentCol.g, accentCol.b); fm.material.emissiveIntensity = 0.22; }
        }
      }
    };

    const onPU = () => {
      drag.on = false;
      el.style.cursor = hoveredPlane ? "pointer" : "grab";
    };

    const onClick = e => {
      if (Math.hypot(e.clientX - ptDown.x, e.clientY - ptDown.y) > 6) return;
      const rect = el.getBoundingClientRect();
      mouse2d.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      mouse2d.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse2d, camera);
      if (raycaster.intersectObjects([frTextMesh]).length) { openFittingRoomRef.current(); return; }
      const hits = raycaster.intersectObjects(productPlanes);
      if (hits.length && hits[0].object.userData.product) onSelectProduct?.(hits[0].object.userData.product);
    };

    const onKey = e => {
      if (e.key === "ArrowLeft")  ctrl.phi   -= 0.07;
      if (e.key === "ArrowRight") ctrl.phi   += 0.07;
      if (e.key === "ArrowUp")    ctrl.theta  = Math.max(-0.18, ctrl.theta - 0.04);
      if (e.key === "ArrowDown")  ctrl.theta  = Math.min(0.35,  ctrl.theta + 0.04);
      if (e.key === "Escape")     onClose();
    };

    const onWheel = e => {
      e.preventDefault();
      const step = e.deltaY * 0.38;
      camPos.tx -= Math.sin(ctrl.phi) * step;
      camPos.tz -= Math.cos(ctrl.phi) * step;
      const margin = 80;
      camPos.tx = Math.max(-RW / 2 + margin, Math.min(RW / 2 - margin, camPos.tx));
      camPos.tz = Math.max(-RD / 2 + margin, Math.min(RD / 2 - margin, camPos.tz));
    };

    el.addEventListener("pointerdown", onPD);
    el.addEventListener("pointermove", onPM);
    el.addEventListener("pointerup",   onPU);
    el.addEventListener("click",       onClick);
    el.addEventListener("wheel",       onWheel, { passive: false });
    window.addEventListener("keydown", onKey);

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── RENDER LOOP ───────────────────────────────────────────────────────────
    const _worldPos = new THREE.Vector3();
    let raf, prevTime = performance.now();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const now = performance.now();
      const dt  = Math.min((now - prevTime) / 1000, 0.05);
      prevTime = now;

      // Walk-in — camera glides from entrance into shop
      if (walkinProgress < 1) {
        walkinProgress = Math.min(1, walkinProgress + dt * 0.55);
        const ease = 1 - Math.pow(1 - walkinProgress, 3);
        camera.position.z = WALK_START_Z + (WALK_END_Z - WALK_START_Z) * ease;
        camera.position.y = CAM_Y;
        camPos.x = 0; camPos.z = camera.position.z;
        camPos.tx = 0; camPos.tz = WALK_END_Z;
      } else {
        // Smooth lerp toward waypoint target
        const lf = 1 - Math.pow(0.04, dt);
        camPos.x += (camPos.tx - camPos.x) * lf;
        camPos.z += (camPos.tz - camPos.z) * lf;
        camera.position.x = camPos.x;
        camera.position.z = camPos.z;
        camera.position.y = CAM_Y;
      }

      const lx =  Math.sin(ctrl.phi) * Math.cos(ctrl.theta);
      const ly = -Math.sin(ctrl.theta);
      const lz = -Math.cos(ctrl.phi) * Math.cos(ctrl.theta);
      camera.lookAt(
        camera.position.x + lx * 200,
        camera.position.y + ly * 200,
        camera.position.z + lz * 200
      );

      // Candle flicker
      candleGlow.intensity = 0.45 + Math.sin(now * 0.007) * 0.07 + Math.sin(now * 0.013) * 0.04;

      // Label projection
      if (hoveredPlane && !drag.on) {
        hoveredPlane.getWorldPosition(_worldPos);
        const proj = _worldPos.clone().project(camera);
        const cx = (proj.x * 0.5 + 0.5) * el.clientWidth;
        const cy = (-proj.y * 0.5 + 0.5) * el.clientHeight;
        const p  = hoveredPlane.userData.product;
        const nm = p?.title ? p.title.split(" ").slice(0, 5).join(" ") : "View piece";
        const pr = p?.price  ? ` · $${p.price}` : "";
        labelEl.innerHTML = `${nm}${pr}<br><span style="font-size:10px;opacity:0.5;font-family:IBM Plex Mono,monospace;letter-spacing:0.1em">TAP TO VIEW</span>`;
        labelEl.style.left = `${cx}px`;
        labelEl.style.top  = `${cy}px`;
        labelEl.style.transform = "translate(-50%, calc(-100% - 18px))";
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
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize",  onResize);
      renderer.dispose();
      if (mount.contains(el)) mount.removeChild(el);
      if (mount.contains(labelEl)) mount.removeChild(labelEl);
    };
  }, []);

  const hudFont   = "IBM Plex Mono, monospace";
  const serifFont = "Crimson Pro, Georgia, serif";

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, background: "#f5f0e8", cursor: "grab" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />

      {/* Waypoint navigation bar */}
      {(() => {
        // RW=1800 RD=2000 — waypoints in world units
        const WAYPOINTS = [
          { label: "Left wall",  x: -680, z:  200, phi:  0.55 },
          { label: "Entrance",   x:    0, z:  920, phi: 0 },
          { label: "Right wall", x:  680, z:  200, phi: -0.55 },
        ];
        return (
          <div style={{ position: "absolute", bottom: 44, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 10, zIndex: 15, pointerEvents: "auto" }}>
            {WAYPOINTS.map((wp, i) => (
              <button key={i} onClick={() => {
                camPosRef.current.tx = wp.x;
                camPosRef.current.tz = wp.z;
                ctrlRef.current.phi  = wp.phi;
                ctrlRef.current.theta = 0.02;
              }} style={{
                background: "rgba(250,247,242,0.92)", border: "1px solid rgba(0,0,0,0.12)",
                color: "#5a5040", fontSize: 8, padding: "7px 14px", cursor: "pointer",
                letterSpacing: "0.18em", textTransform: "uppercase",
                fontFamily: "IBM Plex Mono, monospace", borderRadius: 2,
                backdropFilter: "blur(8px)",
              }}>{wp.label}</button>
            ))}
          </div>
        );
      })()}

      {/* HUD top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "22px 30px", zIndex: 10, pointerEvents: "none", background: "linear-gradient(to bottom, rgba(245,240,232,0.94) 0%, transparent 100%)" }}>
        <div>
          <div style={{ color: accent, fontSize: 9, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 5, fontFamily: hudFont }}>✦ {spaceType}</div>
          <div style={{ color: "#2a2218", fontSize: 21, fontFamily: serifFont, fontWeight: 300, letterSpacing: "0.02em" }}>{title}</div>
        </div>
        <div style={{ display: "flex", gap: 8, pointerEvents: "auto" }}>
          <button onClick={() => setFittingRoomOpen(true)}
            style={{ background: "rgba(255,251,245,0.92)", border: "1px solid rgba(0,0,0,0.13)", color: "#5a5040", fontSize: 9, padding: "9px 18px", cursor: "pointer", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: hudFont, borderRadius: 2, backdropFilter: "blur(6px)" }}>✦ &nbsp; Fitting Room</button>
          <button onClick={onClose}
            style={{ background: "rgba(255,251,245,0.92)", border: "1px solid rgba(0,0,0,0.13)", color: "#5a5040", fontSize: 9, padding: "9px 18px", cursor: "pointer", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: hudFont, borderRadius: 2, backdropFilter: "blur(6px)" }}>✕ &nbsp; Exit</button>
        </div>
      </div>

      {/* HUD bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 30px", zIndex: 10, pointerEvents: "none", background: "linear-gradient(to top, rgba(245,240,232,0.94) 0%, transparent 100%)" }}>
        <span style={{ color: "rgba(72, 47, 6, 0.5)", fontSize: 12, fontFamily: hudFont, letterSpacing: "0.12em" }}>Drag to look · ← → ↑ ↓ keys · ✦FIND PRODUCTS TO VIEW✦</span>
        <span style={{ color: accent, fontSize: 9, fontFamily: hudFont, letterSpacing: "0.1em" }}>{products.length} pieces</span>
      </div>
      {fittingRoomOpen && (
        <FittingRoom products={products} onClose={() => setFittingRoomOpen(false)} />
      )}
    </div>
  );
}
