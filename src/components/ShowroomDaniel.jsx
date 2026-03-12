import { useEffect, useRef, useState } from "react"; // useState kept for labelData
import * as THREE from "three";

// ── DANIEL'S SHOWROOM — Urban Refined ─────────────────────────────────────────
// Dark concrete, steel pedestals, dramatic spotlights, floating labels

export default function ShowroomDaniel({
  products = [],
  tags = [],
  title,
  spaceType,
  color,
  onClose,
  onSelectProduct,
}) {
  const mountRef = useRef(null);
  const [labelData, setLabelData] = useState([]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── RENDERER ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // ── SCENE ─────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2c2c35);
    scene.fog = new THREE.FogExp2(0x2c2c35, 0.00022);

    // ── CAMERA ────────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(52, mount.clientWidth / mount.clientHeight, 1, 8000);
    camera.position.set(0, 420, 1900);
    camera.lookAt(0, 240, 0);

    // ── MATERIALS ─────────────────────────────────────────────────────────────
    const concreteMat = new THREE.MeshStandardMaterial({
      color: 0x4a4a54,
      roughness: 0.88,
      metalness: 0.06,
    });

    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x5a5d6a,
      roughness: 0.25,
      metalness: 0.88,
    });

    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x38383f,
      roughness: 0.78,
      metalness: 0.2,
    });

    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a32,
      roughness: 1.0,
      metalness: 0.0,
    });

    // ── ROOM GEOMETRY ─────────────────────────────────────────────────────────
    const ROOM_W = 2800;
    const ROOM_D = 3600;
    const ROOM_H = 900;

    // Floor — polished dark concrete
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(ROOM_W, ROOM_D, 40, 40),
      floorMat
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Butter yellow rug — under pedestals
    const rugMat = new THREE.MeshStandardMaterial({
      color: 0xf5d050,
      roughness: 0.95,
      metalness: 0.0,
    });
    const rug = new THREE.Mesh(new THREE.PlaneGeometry(1400, 900), rugMat);
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(0, 2, -200);
    rug.receiveShadow = true;
    scene.add(rug);

    // Ceiling
    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(ROOM_W, ROOM_D),
      ceilingMat
    );
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = ROOM_H;
    scene.add(ceiling);

    // Back wall
    const backWall = new THREE.Mesh(
      new THREE.PlaneGeometry(ROOM_W, ROOM_H),
      concreteMat
    );
    backWall.position.set(0, ROOM_H / 2, -ROOM_D / 2);
    backWall.receiveShadow = true;
    scene.add(backWall);

    // Side walls
    [-1, 1].forEach((side) => {
      const wall = new THREE.Mesh(
        new THREE.PlaneGeometry(ROOM_D, ROOM_H),
        concreteMat
      );
      wall.rotation.y = side * Math.PI / 2;
      wall.position.set(side * ROOM_W / 2, ROOM_H / 2, 0);
      wall.receiveShadow = true;
      scene.add(wall);
    });

    // Concrete pillars — architectural columns along side walls
    const pillarGeo = new THREE.BoxGeometry(60, ROOM_H, 60);
    const pillarPositions = [-3, -1, 1, 3].map(n => n * 320);
    pillarPositions.forEach((z) => {
      [-1, 1].forEach((side) => {
        const pillar = new THREE.Mesh(pillarGeo, steelMat);
        pillar.position.set(side * (ROOM_W / 2 - 30), ROOM_H / 2, z);
        pillar.castShadow = true;
        pillar.receiveShadow = true;
        scene.add(pillar);

        // Steel cap on top of each pillar
        const cap = new THREE.Mesh(
          new THREE.BoxGeometry(80, 12, 80),
          steelMat
        );
        cap.position.set(side * (ROOM_W / 2 - 30), ROOM_H - 6, z);
        scene.add(cap);
      });
    });

    // Steel floor trim strips
    [-1, 1].forEach((side) => {
      const trim = new THREE.Mesh(
        new THREE.BoxGeometry(8, 6, ROOM_D),
        steelMat
      );
      trim.position.set(side * (ROOM_W / 2 - 35), 3, 0);
      scene.add(trim);
    });

    // Ceiling track rail
    [-380, 0, 380].forEach((x) => {
      const rail = new THREE.Mesh(
        new THREE.BoxGeometry(10, 8, ROOM_D),
        steelMat
      );
      rail.position.set(x, ROOM_H - 4, 0);
      scene.add(rail);
    });

    // ── LIGHTING ──────────────────────────────────────────────────────────────
    // Lifted ambient — reveals room but keeps drama
    scene.add(new THREE.AmbientLight(0xaabbdd, 2.2));

    // Cool overhead fill from ceiling
    const fillLight = new THREE.HemisphereLight(0xccd8ff, 0x444455, 1.4);
    scene.add(fillLight);

    // Main dramatic key spot — warm tungsten, much brighter
    const keySpot = new THREE.SpotLight(0xfff0cc, 9.0, 2400, Math.PI / 9, 0.45, 1.0);
    keySpot.position.set(120, 820, 600);
    keySpot.target.position.set(0, 0, 0);
    keySpot.castShadow = true;
    keySpot.shadow.mapSize.set(2048, 2048);
    keySpot.shadow.camera.near = 50;
    keySpot.shadow.camera.far = 3000;
    scene.add(keySpot);
    scene.add(keySpot.target);

    // Back rim light — cold blue steel, punchy
    const rimSpot = new THREE.SpotLight(0x6688ff, 3.5, 3000, Math.PI / 5, 0.6, 0.8);
    rimSpot.position.set(-600, 700, -1200);
    rimSpot.target.position.set(0, 100, 0);
    scene.add(rimSpot);
    scene.add(rimSpot.target);

    // Second fill from opposite high angle — warm
    const fillSpot = new THREE.SpotLight(0xffddaa, 2.0, 2000, Math.PI / 6, 0.8, 1.2);
    fillSpot.position.set(800, 700, 400);
    fillSpot.target.position.set(0, 100, 0);
    scene.add(fillSpot);
    scene.add(fillSpot.target);

    // ── PRODUCT PEDESTALS ─────────────────────────────────────────────────────
    const displayData = products.length > 0 ? products : [
      { id: 1, name: "OBJECT 001", price: "$280", subtitle: "limited run" },
      { id: 2, name: "OBJECT 002", price: "$440", subtitle: "signature series" },
      { id: 3, name: "OBJECT 003", price: "$195", subtitle: "raw edition" },
    ];

    const pedestalCount = Math.min(displayData.length, 5);
    const spacing = 520;
    const startX = -(pedestalCount - 1) * spacing / 2;
    const pedestalZ = -200;

    const productMeshes = [];
    const spotLights = [];

    displayData.slice(0, pedestalCount).forEach((product, i) => {
      const x = startX + i * spacing;

      // Pedestal base — dark concrete
      const baseGeo = new THREE.BoxGeometry(180, 14, 180);
      const base = new THREE.Mesh(baseGeo, concreteMat);
      base.position.set(x, 7, pedestalZ);
      base.castShadow = true;
      base.receiveShadow = true;
      scene.add(base);

      // Pedestal column — steel
      const columnH = 220 + (i % 2) * 60; // slight height variation
      const colGeo = new THREE.BoxGeometry(80, columnH, 80);
      const column = new THREE.Mesh(colGeo, steelMat);
      column.position.set(x, 14 + columnH / 2, pedestalZ);
      column.castShadow = true;
      column.receiveShadow = true;
      scene.add(column);

      // Pedestal top — polished steel slab
      const topGeo = new THREE.BoxGeometry(200, 18, 200);
      const topMat = new THREE.MeshStandardMaterial({
        color: 0x6a6d7a,
        roughness: 0.1,
        metalness: 0.95,
      });
      const top = new THREE.Mesh(topGeo, topMat);
      const topY = 14 + columnH + 9;
      top.position.set(x, topY, pedestalZ);
      top.castShadow = true;
      top.receiveShadow = true;
      scene.add(top);

      // Product object — abstract geometric form per product
      const productY = topY + 9;
      let productMesh;

      const shapes = [
        new THREE.BoxGeometry(90, 110, 90),
        new THREE.CylinderGeometry(42, 42, 120, 32),
        new THREE.CylinderGeometry(0, 62, 110, 4),
        new THREE.TorusGeometry(42, 14, 16, 48),
        new THREE.OctahedronGeometry(62),
      ];

      const productMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color || 0x888899),
        roughness: 0.22,
        metalness: 0.78,
        envMapIntensity: 1.2,
      });

      productMesh = new THREE.Mesh(shapes[i % shapes.length], productMat);
      productMesh.position.set(x, productY + 62, pedestalZ);
      productMesh.castShadow = true;
      productMesh.userData = { product, index: i };
      scene.add(productMesh);
      productMeshes.push(productMesh);

      // Thin glowing base ring under product
      const ringGeo = new THREE.TorusGeometry(70, 2.5, 8, 64);
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0x4466dd,
        emissive: 0x1133aa,
        emissiveIntensity: 0.6,
        roughness: 0.3,
        metalness: 0.8,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(x, topY + 10, pedestalZ);
      scene.add(ring);

      // Per-product ceiling spot from track
      const prodSpot = new THREE.SpotLight(0xfff0d8, 4.0, 1400, Math.PI / 12, 0.3, 1.2);
      prodSpot.position.set(x, ROOM_H - 10, pedestalZ + 100);
      prodSpot.target.position.set(x, productY + 62, pedestalZ);
      prodSpot.castShadow = false;
      scene.add(prodSpot);
      scene.add(prodSpot.target);
      spotLights.push(prodSpot);

      // Track light fixture cylinder
      const fixtureGeo = new THREE.CylinderGeometry(10, 14, 30, 12);
      const fixtureMat = new THREE.MeshStandardMaterial({
        color: 0x1a1a22,
        roughness: 0.5,
        metalness: 0.9,
      });
      const fixture = new THREE.Mesh(fixtureGeo, fixtureMat);
      fixture.position.set(x, ROOM_H - 22, pedestalZ + 100);
      scene.add(fixture);
    });

    // ── BACKGROUND DETAIL — stacked crates / urban clutter ───────────────────
    const crateGeo = new THREE.BoxGeometry(120, 120, 120);
    const crateMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a20,
      roughness: 0.95,
      metalness: 0.05,
    });
    [[-900, 0, -1300], [-760, 120, -1300], [-780, 0, -1150], [820, 0, -1200], [950, 0, -1280], [870, 120, -1280]].forEach(([cx, cy, cz]) => {
      const crate = new THREE.Mesh(crateGeo, crateMat);
      crate.position.set(cx, cy + 60, cz);
      crate.rotation.y = Math.random() * 0.4 - 0.2;
      crate.castShadow = true;
      scene.add(crate);
    });

    // ── WALL ACCENT LIGHTS — thin LED strips ──────────────────────────────────
    const stripLightGeo = new THREE.BoxGeometry(6, 6, ROOM_D * 0.7);
    const stripLightMat = new THREE.MeshStandardMaterial({
      color: 0x2244aa,
      emissive: 0x0022aa,
      emissiveIntensity: 0.8,
    });
    [-1, 1].forEach((side) => {
      const strip = new THREE.Mesh(stripLightGeo, stripLightMat);
      strip.position.set(side * (ROOM_W / 2 - 8), 12, -100);
      scene.add(strip);
    });

    // ── ORBIT / ZOOM CONTROLS ─────────────────────────────────────────────────
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-9999, -9999);

    const ctrl = { phi: 0, theta: 0.085 };
    const drag = { on: false, x: 0, y: 0, phi0: 0, th0: 0 };
    let zoomDist = 1900;
    const ZOOM_MIN = 400, ZOOM_MAX = 3500;
    let ptDown = { x: 0, y: 0 };
    let pinchStart = null;
    const el = renderer.domElement;

    const onPD = e => {
      drag.on = true;
      drag.x = e.clientX; drag.y = e.clientY;
      drag.phi0 = ctrl.phi; drag.th0 = ctrl.theta;
      ptDown = { x: e.clientX, y: e.clientY };
      el.style.cursor = "grabbing";
      el.setPointerCapture(e.pointerId);
    };

    const onPM = e => {
      if (drag.on) {
        ctrl.phi   = drag.phi0 - (e.clientX - drag.x) * 0.003;
        ctrl.theta = Math.max(-0.1, Math.min(0.45, drag.th0 + (e.clientY - drag.y) * 0.002));
        return;
      }
      const rect = el.getBoundingClientRect();
      mouse.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
    };

    const onPU = () => { drag.on = false; el.style.cursor = "grab"; };

    const onClick = e => {
      if (Math.hypot(e.clientX - ptDown.x, e.clientY - ptDown.y) > 6) return;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(productMeshes);
      if (hits.length > 0 && onSelectProduct) {
        onSelectProduct(hits[0].object.userData.product);
      }
    };

    const onWheel = e => {
      e.preventDefault();
      zoomDist = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoomDist + e.deltaY * 1.2));
    };

    const onTouchStart = e => {
      if (e.touches.length === 2)
        pinchStart = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    };

    const onTouchMove = e => {
      if (e.touches.length === 2 && pinchStart !== null) {
        const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        zoomDist = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoomDist - (d - pinchStart) * 2));
        pinchStart = d;
        e.preventDefault();
      }
    };

    el.style.cursor = "grab";
    el.addEventListener("pointerdown",  onPD);
    el.addEventListener("pointermove",  onPM);
    el.addEventListener("pointerup",    onPU);
    el.addEventListener("click",        onClick);
    el.addEventListener("wheel",        onWheel,       { passive: false });
    el.addEventListener("touchstart",   onTouchStart,  { passive: false });
    el.addEventListener("touchmove",    onTouchMove,   { passive: false });

    // ── ANIMATION ─────────────────────────────────────────────────────────────
    let raf;
    let t = 0;
    const TX = 0, TY = 260, TZ = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      t += 0.005;

      // Orbit camera from spherical coords
      camera.position.set(
        TX + zoomDist * Math.sin(ctrl.phi) * Math.cos(ctrl.theta),
        TY + zoomDist * Math.sin(ctrl.theta),
        TZ + zoomDist * Math.cos(ctrl.phi) * Math.cos(ctrl.theta),
      );
      camera.lookAt(TX, TY, TZ);

      // Rotate + bob product objects
      productMeshes.forEach((mesh, idx) => {
        mesh.rotation.y += 0.004 + idx * 0.0008;
        mesh.position.y += Math.sin(t + idx * 1.3) * 0.12;
      });

      // Hover detection
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(productMeshes);

      productMeshes.forEach((mesh) => {
        const isHovered = hits.length > 0 && hits[0].object === mesh;
        const mat = mesh.material;
        if (isHovered) {
          mat.emissive = new THREE.Color(0x334488);
          mat.emissiveIntensity = 0.5;
          mesh.scale.setScalar(1.08);
        } else {
          mat.emissive = new THREE.Color(0x000000);
          mat.emissiveIntensity = 0;
          mesh.scale.setScalar(1.0);
        }
      });

      // Project 3D label positions to 2D screen
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      const newLabels = productMeshes.map((mesh) => {
        const pos = mesh.position.clone().project(camera);
        return {
          x: (pos.x * 0.5 + 0.5) * w,
          y: (-pos.y * 0.5 + 0.5) * h,
          product: mesh.userData.product,
          hovered: hits.length > 0 && hits[0].object === mesh,
        };
      });
      setLabelData(newLabels);

      renderer.render(scene, camera);
    };
    animate();

    // ── RESIZE ────────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      el.removeEventListener("pointerdown",  onPD);
      el.removeEventListener("pointermove",  onPM);
      el.removeEventListener("pointerup",    onPU);
      el.removeEventListener("click",        onClick);
      el.removeEventListener("wheel",        onWheel);
      el.removeEventListener("touchstart",   onTouchStart);
      el.removeEventListener("touchmove",    onTouchMove);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [products, color]);

  return (
    <div style={styles.overlay}>
      {/* HUD */}
      <div style={styles.hud}>
        <div style={styles.hudLeft}>
          <div style={styles.hudTitle}>{title || "DANIEL'S SPACE"}</div>
          <div style={styles.hudSub}>
            {spaceType || "URBAN REFINED"} &nbsp;·&nbsp; {tags?.join("  ·  ")}
          </div>
        </div>
        <div style={styles.hudRight}>
          <div style={styles.hudDot} />
          <div style={styles.hudStatus}>LIVE</div>
        </div>
        <button style={styles.closeBtn} onClick={onClose}>✕</button>
      </div>

      {/* Corner marks */}
      <div style={{...styles.corner, top: 12, left: 12, borderTop: "1px solid rgba(80,120,255,0.4)", borderLeft: "1px solid rgba(80,120,255,0.4)"}} />
      <div style={{...styles.corner, top: 12, right: 12, borderTop: "1px solid rgba(80,120,255,0.4)", borderRight: "1px solid rgba(80,120,255,0.4)"}} />
      <div style={{...styles.corner, bottom: 12, left: 12, borderBottom: "1px solid rgba(80,120,255,0.4)", borderLeft: "1px solid rgba(80,120,255,0.4)"}} />
      <div style={{...styles.corner, bottom: 12, right: 12, borderBottom: "1px solid rgba(80,120,255,0.4)", borderRight: "1px solid rgba(80,120,255,0.4)"}} />

      {/* Canvas */}
      <div ref={mountRef} style={styles.canvas} />

      {/* Product labels */}
      {labelData.map((label, i) => (
        <div
          key={i}
          onClick={() => onSelectProduct && onSelectProduct(label.product)}
          style={{
            ...styles.productLabel,
            left: label.x,
            top: label.y + 90,
            opacity: label.hovered ? 1 : 0.55,
            transform: `translateX(-50%) translateY(${label.hovered ? "-4px" : "0"})`,
            borderColor: label.hovered ? "rgba(80,120,255,0.8)" : "rgba(80,120,255,0.2)",
            cursor: onSelectProduct ? "pointer" : "default",
          }}
        >
          <div style={styles.labelName}>{label.product?.name || `OBJECT ${String(i + 1).padStart(3, "0")}`}</div>
          {label.product?.price && (
            <div style={styles.labelPrice}>{label.product.price}</div>
          )}
          {label.product?.subtitle && (
            <div style={styles.labelSub}>{label.product.subtitle}</div>
          )}
        </div>
      ))}

      {/* Bottom scan line */}
      <div style={styles.scanLine} />
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 500,
    background: "#2c2c35",
    fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
    overflow: "hidden",
  },
  canvas: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
  },
  hud: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    padding: "18px 28px",
    background: "linear-gradient(to bottom, rgba(44,44,53,0.97) 60%, transparent)",
    borderBottom: "1px solid rgba(80,120,255,0.12)",
  },
  hudLeft: {
    flex: 1,
  },
  hudTitle: {
    fontSize: "11px",
    letterSpacing: "0.3em",
    color: "rgba(200,210,255,0.9)",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  hudSub: {
    fontSize: "9px",
    letterSpacing: "0.2em",
    color: "rgba(120,140,200,0.5)",
    marginTop: "4px",
    textTransform: "uppercase",
  },
  hudRight: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    marginRight: "24px",
  },
  hudDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#4488ff",
    boxShadow: "0 0 8px #4488ff",
    animation: "pulse 2s ease-in-out infinite",
  },
  hudStatus: {
    fontSize: "9px",
    letterSpacing: "0.25em",
    color: "rgba(80,120,255,0.7)",
  },
  closeBtn: {
    background: "none",
    border: "1px solid rgba(80,120,255,0.25)",
    color: "rgba(180,190,255,0.6)",
    width: "32px",
    height: "32px",
    cursor: "pointer",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s",
    letterSpacing: 0,
  },
  corner: {
    position: "absolute",
    width: "20px",
    height: "20px",
    zIndex: 10,
    opacity: 0.6,
  },
  productLabel: {
    position: "absolute",
    zIndex: 10,
    padding: "8px 14px",
    background: "rgba(38, 38, 48, 0.88)",
    border: "1px solid rgba(80,120,255,0.2)",
    backdropFilter: "blur(8px)",
    transition: "all 0.25s ease",
    pointerEvents: "auto",
    minWidth: "120px",
    textAlign: "center",
  },
  labelName: {
    fontSize: "9px",
    letterSpacing: "0.22em",
    color: "rgba(200,210,255,0.85)",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  labelPrice: {
    fontSize: "11px",
    letterSpacing: "0.12em",
    color: "rgba(140,170,255,0.7)",
    marginTop: "3px",
    fontWeight: 400,
  },
  labelSub: {
    fontSize: "8px",
    letterSpacing: "0.18em",
    color: "rgba(90,110,180,0.55)",
    marginTop: "2px",
    textTransform: "uppercase",
  },
  scanLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(to right, transparent, rgba(80,120,255,0.4), transparent)",
    zIndex: 10,
  },
};
