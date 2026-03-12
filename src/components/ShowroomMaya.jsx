import { useEffect, useRef } from "react";
import * as THREE from "three";

// ── COASTAL SHOWROOM — Pastel Minimalist ─────────────────────────────────────
// Soft blush, mist, sage, pale sand · clean geometry · editorial calm

export default function ShowroomMaya({
  products = [],
  tags = [],
  title,
  spaceType,
  color,
  onClose,
  onSelectProduct,
}) {
  const mountRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const onSelectProductRef = useRef(onSelectProduct);
  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);
  useEffect(() => { onSelectProductRef.current = onSelectProduct; }, [onSelectProduct]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── RENDERER ──────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // ── PALETTE ───────────────────────────────────────────────────────────
    const P = {
      sky:      0xd6eaf5,
      horizon:  0xbfe0ef,
      ocean:    0xa8d4e8,
      sand:     0xede4d0,
      sandDark: 0xe0d5bc,
      foam:     0xf2f8fb,
      blush:    0xf2c4c4,
      peach:    0xf5d5b8,
      sage:     0xb8d4c0,
      lilac:    0xd4c8e8,
      mint:     0xc0e8d8,
      drift:    0xcbb89a,
      white:    0xfaf8f5,
      accent:   0x8dc8d8,
    };

    // ── SCENE ─────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(P.sky);
    scene.fog = new THREE.FogExp2(P.sky, 0.00018);

    // ── CAMERA ────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(52, mount.clientWidth / mount.clientHeight, 1, 6000);
    camera.position.set(0, 310, 1080);
    camera.lookAt(0, 230, 0);

    let zoomDist = 1080;
    const ZOOM_MIN = 350, ZOOM_MAX = 2000;

    // ── DIMENSIONS ────────────────────────────────────────────────────────
    const RW = 2600, RH = 960, RD = 2200;

    // ── HELPERS ───────────────────────────────────────────────────────────
    const mat = (color, rough = 0.85, metal = 0, extra = {}) =>
      new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, ...extra });

    const add = (geo, m, px, py, pz, rx = 0, ry = 0, rz = 0) => {
      const mesh = new THREE.Mesh(geo, m);
      mesh.position.set(px, py, pz);
      mesh.rotation.set(rx, ry, rz);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      return mesh;
    };

    // ── FLOOR — pale sand ─────────────────────────────────────────────────
    add(new THREE.PlaneGeometry(RW, RD), mat(P.sand, 0.99), 0, 0, 0, -Math.PI / 2);
    for (let i = -5; i <= 5; i++) {
      add(new THREE.PlaneGeometry(RW, 22), mat(P.sandDark, 1), 0, 0.8, i * 190, -Math.PI / 2);
    }

    // ── BACK WALL — horizon ───────────────────────────────────────────────
    add(new THREE.PlaneGeometry(RW, RH * 0.38), mat(P.ocean, 0.05, 0.08), 0, RH * 0.19, -RD / 2);
    add(new THREE.PlaneGeometry(RW, RH * 0.62), mat(P.sky,   0.04),        0, RH * 0.69, -RD / 2);
    add(new THREE.PlaneGeometry(RW, 6), mat(P.foam, 0.1), 0, RH * 0.38, -RD / 2 + 1);
    [0, 80, 160].forEach((offset, i) => {
      add(new THREE.PlaneGeometry(RW, 14 - i * 2),
        mat(P.foam, 0.1, 0, { transparent: true, opacity: 0.55 - i * 0.12 }),
        0, RH * 0.38 - 60 - offset, -RD / 2 + 2);
    });

    // ── SIDE WALLS ────────────────────────────────────────────────────────
    add(new THREE.PlaneGeometry(RD, RH), mat(P.sky, 0.96), -RW / 2, RH / 2, 0, 0,  Math.PI / 2);
    add(new THREE.PlaneGeometry(RD, RH), mat(P.sky, 0.96),  RW / 2, RH / 2, 0, 0, -Math.PI / 2);

    // ── LIGHTING ──────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xfff8f4, 1.05));

    const sun = new THREE.DirectionalLight(0xfff5e8, 1.7);
    sun.position.set(-400, 900, 500);
    sun.castShadow = true;
    sun.shadow.mapSize.setScalar(1024);
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 4000;
    sun.shadow.camera.left  = -1200; sun.shadow.camera.right = 1200;
    sun.shadow.camera.top   =  1200; sun.shadow.camera.bottom = -400;
    scene.add(sun);

    const bounce = new THREE.DirectionalLight(0xc8eaf8, 0.42);
    bounce.position.set(500, 180, 800);
    scene.add(bounce);

    // ── BEACH TOWEL ───────────────────────────────────────────────────────
    add(new THREE.BoxGeometry(560, 4, 380), mat(P.white, 1), 80, 1.5, 180);
    add(new THREE.BoxGeometry(560, 4.5, 28), mat(P.blush, 1),  80, 1.8,  60);
    add(new THREE.BoxGeometry(560, 4.5, 28), mat(P.mint,  1),  80, 1.8, -60);

    // ── PARASOL — slim, single colour ────────────────────────────────────
    const paraX = -580, paraZ = 60;
    add(new THREE.CylinderGeometry(4, 4, 440, 12), mat(P.drift, 0.85), paraX, 220, paraZ);
    add(new THREE.ConeGeometry(200, 80, 32), mat(P.blush, 0.75, 0, { side: THREE.DoubleSide }), paraX, 430, paraZ);
    add(new THREE.TorusGeometry(200, 3, 6, 40), mat(P.white, 0.6), paraX, 390, paraZ, Math.PI / 2);

    // ── BEACH CHAIR ───────────────────────────────────────────────────────
    const makeChair = (cx, cz, ry) => {
      const g = new THREE.Group();
      g.position.set(cx, 0, cz);
      g.rotation.y = ry;
      scene.add(g);
      const frame = mat(P.drift, 0.88);

      // Four vertical legs: floor (y=0) → seat height (y=68)
      [[-70, -90], [70, -90], [-70, 90], [70, 90]].forEach(([dx, dz]) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 68, 8), frame);
        leg.position.set(dx, 34, dz);
        leg.castShadow = true; g.add(leg);
      });

      // Side rails along Z connecting front & rear leg tops at seat height
      [[-70], [70]].forEach(([dx]) => {
        const rail = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 180, 8), frame);
        rail.position.set(dx, 68, 0);
        rail.rotation.x = Math.PI / 2;
        rail.castShadow = true; g.add(rail);
      });

      // Seat sling resting on frame
      const sling = new THREE.Mesh(new THREE.BoxGeometry(140, 6, 200), mat(P.sage, 0.95));
      sling.position.set(0, 71, 0); sling.castShadow = true; g.add(sling);

      // Back support posts rising from rear leg tops (y=68 → y=228)
      [[-70], [70]].forEach(([dx]) => {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 160, 8), frame);
        post.position.set(dx, 148, -90);
        post.castShadow = true; g.add(post);
      });

      // Back rest sling centred on posts, gently reclined
      const back = new THREE.Mesh(new THREE.BoxGeometry(130, 6, 160), mat(P.sage, 0.95));
      back.position.set(0, 148, -90);
      back.rotation.x = 0.38;
      back.castShadow = true; g.add(back);
    };
    makeChair(-290, 120, -0.2);

    // ── BIKINI DISPLAY STANDS ─────────────────────────────────────────────
    const makeBikiniStand = (sx, sz, ry, topColor, bottomColor) => {
      const g = new THREE.Group();
      g.position.set(sx, 0, sz);
      g.rotation.y = ry;
      scene.add(g);

      // Slim post
      const post = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 520, 10), mat(0xe8e0d4, 0.6, 0.05));
      post.position.set(0, 260, 0);
      post.castShadow = true;
      g.add(post);
      // Base
      const base = new THREE.Mesh(new THREE.CylinderGeometry(44, 44, 8, 20), mat(0xddd5c8, 0.7));
      base.position.set(0, 4, 0); base.castShadow = true; g.add(base);

      // Shoulder bar
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 120, 8), mat(0xe8e0d4, 0.6));
      bar.position.set(0, 480, 0); bar.rotation.z = Math.PI / 2; g.add(bar);

      // Bikini top — two softly scaled hemisphere cups
      [-28, 28].forEach(dx => {
        const cup = new THREE.Mesh(new THREE.SphereGeometry(22, 12, 8, 0, Math.PI), mat(topColor, 0.82));
        cup.position.set(dx, 460, 4);
        cup.rotation.x = -0.3;
        cup.scale.set(1, 0.55, 0.7);
        cup.castShadow = true;
        g.add(cup);
      });
      // Tie strings
      [[-50, 20],[50, 20]].forEach(([dx, dz]) => {
        const str = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 38, 5), mat(topColor, 0.9));
        str.position.set(dx, 452, dz);
        str.rotation.z = dx < 0 ? 0.6 : -0.6;
        g.add(str);
      });
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 50, 5), mat(topColor, 0.9));
      neck.position.set(0, 492, 0); g.add(neck);

      // Bikini bottom panel
      const btm = new THREE.Mesh(new THREE.BoxGeometry(68, 80, 8), mat(bottomColor, 0.84));
      btm.position.set(0, 350, 4);
      btm.scale.set(1, 1, 0.3);
      g.add(btm);
      // Hip ties
      [-34, 34].forEach(dx => {
        const tie = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 44, 5), mat(bottomColor, 0.88));
        tie.position.set(dx, 375, 4);
        tie.rotation.z = dx < 0 ? 0.8 : -0.8;
        g.add(tie);
      });
      // Size tag
      const tag = new THREE.Mesh(new THREE.BoxGeometry(18, 10, 1), mat(P.white, 0.9));
      tag.position.set(36, 330, 8); g.add(tag);
    };

    makeBikiniStand(-560, -300,  0.25, P.blush,  P.blush);
    makeBikiniStand( 560, -300, -0.25, P.lilac,  P.lilac);

    // ── SURFBOARD — leaning, pastel peach ────────────────────────────────
    const surfG = new THREE.Group();
    surfG.position.set(RW / 2 - 160, 0, -160);
    surfG.rotation.set(0, 0.28, 0.16);
    scene.add(surfG);

    const bMat = mat(P.peach, 0.55, 0.04);
    const board = new THREE.Mesh(new THREE.CylinderGeometry(32, 32, 500, 18), bMat);
    board.rotation.z = Math.PI / 2;
    board.scale.set(1, 0.22, 0.58);
    board.position.set(0, 36, 0);
    board.castShadow = true;
    surfG.add(board);
    [240, -240].forEach(dx => {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(32, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), bMat);
      cap.rotation.z = dx > 0 ? Math.PI / 2 : -Math.PI / 2;
      cap.scale.set(1, 0.22, 0.58);
      cap.position.set(dx, 36, 0);
      surfG.add(cap);
    });
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(460, 6, 10), mat(P.white, 0.5));
    stripe.position.set(0, 44, 0); surfG.add(stripe);
    const fin = new THREE.Mesh(new THREE.ConeGeometry(16, 38, 3), mat(P.peach, 0.6));
    fin.position.set(-190, 10, 0); fin.rotation.z = Math.PI; fin.scale.set(0.4, 1, 1);
    surfG.add(fin);

    // ── SHELLS — scattered, muted ─────────────────────────────────────────
    [[150,280],[260,340],[100,420],[-120,310],[300,200],[380,360],[-60,200],[190,470],[440,290],[-200,430]]
      .forEach(([sx,sz], i) => {
        const c = i % 3 === 0 ? 0xecd8b8 : i % 3 === 1 ? 0xe8c8a8 : 0xf0e0c8;
        const s = 0.5 + (i * 0.13) % 0.6;
        const sh = add(new THREE.SphereGeometry(7 * s, 7, 5), mat(c, 0.65), sx, 3, sz, 0.1 * i, i, 0);
        sh.scale.set(1, 0.44, 1.3);
      });

    // ── FLOATING SHELF ────────────────────────────────────────────────────
    const SY = 490;
    add(new THREE.BoxGeometry(720, 10, 34), mat(P.drift, 0.82), 0, SY, -RD / 2 + 20);
    // Vase
    add(new THREE.CylinderGeometry(7, 5, 72, 14), mat(P.white, 0.7), -200, SY + 36, -RD / 2 + 20);
    add(new THREE.SphereGeometry(7, 10, 10),       mat(P.white, 0.7), -200, SY + 79, -RD / 2 + 20);
    // Pebble stack
    [0,1,2].forEach(i =>
      add(new THREE.CylinderGeometry(12 - i*2, 13 - i*2, 9, 14), mat(0xd8cdb8, 0.88), -60, SY + 5 + i*9, -RD / 2 + 20)
    );
    // Small bowl
    add(new THREE.CylinderGeometry(18, 12, 12, 16), mat(P.accent, 0.55, 0.08), 80, SY + 6, -RD / 2 + 20);
    // Driftwood branch
    add(new THREE.CylinderGeometry(4, 3, 110, 8), mat(P.drift, 0.94), 230, SY + 5, -RD / 2 + 20, 0, 0, Math.PI / 2);

    const productPlanes = [];

    // ── HOVER LABEL ───────────────────────────────────────────────────────
    const labelEl = document.createElement("div");
    labelEl.style.cssText = [
      "position:absolute","pointer-events:none",
      "background:rgba(250,248,244,0.96)","backdrop-filter:blur(14px)",
      "border:1px solid rgba(141,200,216,0.35)","padding:10px 18px","border-radius:3px",
      "font-family:Georgia,serif","font-size:13px","color:#3a3028",
      "line-height:1.5","transition:opacity 0.12s","opacity:0",
      "white-space:nowrap","z-index:20","box-shadow:0 4px 20px rgba(100,160,180,0.12)",
      "letter-spacing:0.02em",
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
        ctrl.theta = Math.max(-0.22, Math.min(0.34, drag.th0 + (e.clientY - drag.y) * 0.002));
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
        if (prev?.userData.frameMesh) prev.userData.frameMesh.material.emissiveIntensity = 0;
        if (hoveredPlane?.userData.frameMesh) {
          hoveredPlane.userData.frameMesh.material.emissive.set(0.55, 0.78, 0.84);
          hoveredPlane.userData.frameMesh.material.emissiveIntensity = 0.14;
        }
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
      if (hits.length && hits[0].object.userData.product) onSelectProductRef.current?.(hits[0].object.userData.product);
    };

    const onWheel = e => {
      e.preventDefault();
      zoomDist = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoomDist + e.deltaY * 0.75));
    };
    let pinchStart = null;
    const onTouchStart = e => {
      if (e.touches.length === 2)
        pinchStart = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    };
    const onTouchMove = e => {
      if (e.touches.length === 2 && pinchStart !== null) {
        const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        zoomDist = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoomDist - (d - pinchStart) * 1.4));
        pinchStart = d; e.preventDefault();
      }
    };
    const onKey = e => {
      if (e.key === "ArrowLeft")         ctrl.phi   -= 0.07;
      if (e.key === "ArrowRight")        ctrl.phi   += 0.07;
      if (e.key === "ArrowUp")           ctrl.theta  = Math.max(-0.22, ctrl.theta - 0.04);
      if (e.key === "ArrowDown")         ctrl.theta  = Math.min(0.34,  ctrl.theta + 0.04);
      if (e.key === "+" || e.key === "=") zoomDist   = Math.max(ZOOM_MIN, zoomDist - 80);
      if (e.key === "-")                 zoomDist    = Math.min(ZOOM_MAX, zoomDist + 80);
      if (e.key === "Escape")            onCloseRef.current?.();
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
    const animate = () => {
      raf = requestAnimationFrame(animate);
      camera.position.z += (zoomDist - camera.position.z) * 0.09;
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
        const pr = p?.price ? ` — $${p.price}` : "";
        labelEl.innerHTML = `${nm}${pr}<br><span style="font-size:9px;opacity:0.4;font-family:monospace;letter-spacing:0.14em;text-transform:uppercase">Tap to view</span>`;
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
      el.removeEventListener("touchstart",  onTouchStart);
      el.removeEventListener("touchmove",   onTouchMove);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize",  onResize);
      renderer.dispose();
      if (mount.contains(el)) mount.removeChild(el);
      if (mount.contains(labelEl)) mount.removeChild(labelEl);
    };
  }, []);

  // ── HUD ───────────────────────────────────────────────────────────────────
  const mono  = "ui-monospace, 'SF Mono', monospace";
  const serif = "Georgia, 'Times New Roman', serif";

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, background: "#d6eaf5", cursor: "grab" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />

      {/* Top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        padding: "24px 32px", zIndex: 10, pointerEvents: "none",
        background: "linear-gradient(to bottom, rgba(214,234,245,0.85) 0%, transparent 100%)",
      }}>
        <div>
          <div style={{ color: "#8dc8d8", fontSize: 8, letterSpacing: "0.38em", textTransform: "uppercase", marginBottom: 6, fontFamily: mono }}>
            {spaceType}
          </div>
          <div style={{ color: "#3a3028", fontSize: 22, fontFamily: serif, fontWeight: 400, letterSpacing: "0.01em" }}>
            {title}
          </div>
        </div>
        <button onClick={onClose} style={{
          pointerEvents: "auto",
          background: "rgba(250,248,244,0.9)",
          border: "1px solid rgba(141,200,216,0.4)",
          color: "#5a5048", fontSize: 8, padding: "10px 20px",
          cursor: "pointer", letterSpacing: "0.22em", textTransform: "uppercase",
          fontFamily: mono, borderRadius: 2, backdropFilter: "blur(10px)",
        }}>
          Exit
        </button>
      </div>

      {/* Zoom controls */}
      <div style={{
        position: "absolute", right: 28, top: "50%", transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", gap: 6, zIndex: 10,
      }}>
        {[["+", -75], ["\u2212", 75]].map(([lbl, delta]) => (
          <button key={lbl}
            onClick={() => {
              const canvas = mountRef.current?.querySelector("canvas");
              if (!canvas) return;
              canvas.dispatchEvent(new WheelEvent("wheel", { deltaY: delta * 10, bubbles: true }));
            }}
            style={{
              width: 36, height: 36, borderRadius: 2,
              background: "rgba(250,248,244,0.88)",
              border: "1px solid rgba(141,200,216,0.4)",
              color: "#5a5048", fontSize: 18, cursor: "pointer",
              fontFamily: mono, lineHeight: 1, backdropFilter: "blur(10px)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
            {lbl}
          </button>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 32px", zIndex: 10, pointerEvents: "none",
        background: "linear-gradient(to top, rgba(214,234,245,0.7) 0%, transparent 100%)",
      }}>
        <span style={{ color: "rgba(90,80,72,0.45)", fontSize: 8, fontFamily: mono, letterSpacing: "0.14em" }}>
          Drag to look  ·  Scroll or pinch to zoom  ·  Click to view
        </span>
        <span style={{ color: "#8dc8d8", fontSize: 8, fontFamily: mono, letterSpacing: "0.14em" }}>
          {products.length} pieces
        </span>
      </div>
    </div>
  );
}
