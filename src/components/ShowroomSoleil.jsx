import { useEffect, useRef } from "react";
import * as THREE from "three";

// ── SOLEIL'S SHOWROOM — Soft Botanical ────────────────────────────────────────

export default function ShowroomSoleil({ products, tags, title, spaceType, color, onClose, onSelectProduct }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── RENDERER ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // ── SCENE ─────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xc8d4be);
    scene.fog = new THREE.Fog(0xc8d4be, 2800, 5000);

    // ── CAMERA ────────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 1, 7000);

    // ── MATERIAL HELPERS ──────────────────────────────────────────────────────
    // solid: standard opaque material
    const mat = (col, rough = 0.85, metal = 0) =>
      new THREE.MeshStandardMaterial({ color: col, roughness: rough, metalness: metal });
    // leaf: always DoubleSide so faces never vanish when viewed from behind
    const leafMat  = (col = 0x6b9955) =>
      new THREE.MeshStandardMaterial({ color: col, roughness: 0.85, side: THREE.DoubleSide });

    // ── LIGHTING ─────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xfff5e8, 0.65));

    const sun = new THREE.DirectionalLight(0xffedcc, 2.2);
    sun.position.set(300, 1200, 700);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left   = -2000; sun.shadow.camera.right = 2000;
    sun.shadow.camera.top    =  2000; sun.shadow.camera.bottom = -2000;
    sun.shadow.camera.near   = 1;     sun.shadow.camera.far   = 4000;
    sun.shadow.bias = -0.0003;
    scene.add(sun);

    const skyBounce = new THREE.DirectionalLight(0xd4e8c2, 0.55);
    skyBounce.position.set(-600, 500, 200);
    scene.add(skyBounce);

    const pendantPositions = [
      [-480,600,-400],[0,600,-400],[480,600,-400],
      [-480,600, 200],[0,600, 200],[480,600, 200],
    ];
    pendantPositions.forEach(([x,y,z]) => {
      const p = new THREE.PointLight(0xffe8b0, 0.9, 900, 1.6);
      p.position.set(x, y, z);
      scene.add(p);
    });

    // ── FLOOR ─────────────────────────────────────────────────────────────────
    const floorGeo = new THREE.PlaneGeometry(3600, 5000, 36, 60);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xc4a97a, roughness: 0.82, metalness: 0.04 });
    const posArr = floorGeo.attributes.position;
    const vcols = [];
    for (let i = 0; i < posArr.count; i++) {
      const stripe = Math.floor((posArr.getX(i) + 1800) / 120) % 2;
      const v = 0.88 + stripe * 0.07 + Math.random() * 0.05;
      vcols.push(v, v * 0.92, v * 0.78);
    }
    floorGeo.setAttribute("color", new THREE.Float32BufferAttribute(vcols, 3));
    floorMat.vertexColors = true;
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // ── WALLS & CEILING ───────────────────────────────────────────────────────
    const wallCol = mat(0xe8e0d4, 0.95);
    const bw = new THREE.Mesh(new THREE.PlaneGeometry(3600,1400), wallCol);
    bw.position.set(0,700,-2200); bw.receiveShadow=true; scene.add(bw);

    const lw = new THREE.Mesh(new THREE.PlaneGeometry(5000,1400), mat(0xe8e0d4,0.95));
    lw.rotation.y = Math.PI/2; lw.position.set(-1800,700,-200); lw.receiveShadow=true; scene.add(lw);

    const rw = new THREE.Mesh(new THREE.PlaneGeometry(5000,1400), mat(0xe8e0d4,0.95));
    rw.rotation.y = -Math.PI/2; rw.position.set(1800,700,-200); rw.receiveShadow=true; scene.add(rw);

    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(3600,5000), mat(0xf0ece4,0.97));
    ceil.rotation.x = Math.PI/2; ceil.position.set(0,1400,-200); scene.add(ceil);

    // ── SKYLIGHTS ─────────────────────────────────────────────────────────────
    [[-300,1398,-600],[300,1398,-600],[0,1398,0]].forEach(([x,y,z]) => {
      const f = new THREE.Mesh(new THREE.PlaneGeometry(260,260),
        new THREE.MeshStandardMaterial({color:0xfff9e8,roughness:0.1,metalness:0.05}));
      f.rotation.x = Math.PI/2; f.position.set(x,y,z); scene.add(f);
      const b = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.PlaneGeometry(260,260)),
        new THREE.LineBasicMaterial({color:0xd4c8b0}));
      b.rotation.x = Math.PI/2; b.position.set(x,y+1,z); scene.add(b);
    });

    // ── CEILING BEAMS ─────────────────────────────────────────────────────────
    const beamMat = mat(0x8b6840,0.9,0.02);
    for (let z=-1800;z<=800;z+=500) {
      const b=new THREE.Mesh(new THREE.BoxGeometry(3600,28,40),beamMat);
      b.position.set(0,1385,z); b.castShadow=true; scene.add(b);
    }
    for (let x=-1500;x<=1500;x+=750) {
      const b=new THREE.Mesh(new THREE.BoxGeometry(40,28,5000),beamMat);
      b.position.set(x,1385,-200); b.castShadow=true; scene.add(b);
    }

    // ── PENDANT LAMPS ─────────────────────────────────────────────────────────
    const cordMat = new THREE.LineBasicMaterial({color:0x5a4a36});
    pendantPositions.forEach(([x,y,z]) => {
      scene.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x,1380,z),new THREE.Vector3(x,y+28,z)]),
        cordMat));
      const shade = new THREE.Mesh(new THREE.ConeGeometry(28,22,16,1,true),mat(0xc07a55,0.75));
      shade.rotation.x=Math.PI; shade.position.set(x,y+28,z); shade.castShadow=true; scene.add(shade);
      const glow = new THREE.Mesh(new THREE.CircleGeometry(14,16),
        new THREE.MeshStandardMaterial({color:0xffedaa,emissive:0xffe070,emissiveIntensity:1.2,roughness:0.2}));
      glow.rotation.x=Math.PI/2; glow.position.set(x,y+18,z); scene.add(glow);
    });

    // ── DISPLAY PODS ──────────────────────────────────────────────────────────
    const plinthMat    = mat(0xa07850,0.8,0.03);
    const plinthTopMat = mat(0xb08860,0.6,0.04);
    const podPositions = [[-480,0,-400],[0,0,-400],[480,0,-400],[-480,0,200],[0,0,200],[480,0,200]];
    const prodShapes   = [
      ()=>new THREE.BoxGeometry(60,80,60),
      ()=>new THREE.CylinderGeometry(28,28,90,20),
      ()=>new THREE.SphereGeometry(38,20,20),
      ()=>new THREE.ConeGeometry(32,85,18),
      ()=>new THREE.TorusGeometry(28,10,12,30),
      ()=>new THREE.DodecahedronGeometry(36),
    ];
    const prodCols = [0xc4956a,0x8aaa88,0xe8d5b0,0xb07060,0x9aac90,0xd4b896];
    podPositions.forEach(([x,,z],i) => {
      const pl=new THREE.Mesh(new THREE.CylinderGeometry(75,80,260,24),plinthMat);
      pl.position.set(x,130,z); pl.castShadow=true; pl.receiveShadow=true; scene.add(pl);
      const tp=new THREE.Mesh(new THREE.CylinderGeometry(80,80,8,24),plinthTopMat);
      tp.position.set(x,264,z); tp.castShadow=true; scene.add(tp);
      const pr=new THREE.Mesh(prodShapes[i%prodShapes.length](),mat(prodCols[i%prodCols.length],0.7,0.08));
      pr.position.set(x,315,z); pr.castShadow=true; scene.add(pr);
    });

    // ── SHELVING ──────────────────────────────────────────────────────────────
    const shelfMat      = mat(0x9a7450,0.85,0.03);
    const shelfFrameMat = mat(0x7a5c3a,0.90,0.02);
    [-700,0,700].forEach(x => {
      [-55,55].forEach(dx=>{
        const u=new THREE.Mesh(new THREE.BoxGeometry(18,860,28),shelfFrameMat);
        u.position.set(x+dx,430,-2188); u.castShadow=true; scene.add(u);
      });
      [180,400,620,840].forEach(y=>{
        const s=new THREE.Mesh(new THREE.BoxGeometry(140,14,30),shelfMat);
        s.position.set(x,y,-2188); s.castShadow=true; scene.add(s);
        for(let k=0;k<3;k++){
          const h=20+Math.random()*30;
          const o=new THREE.Mesh(
            new THREE.CylinderGeometry(5+Math.random()*7,5+Math.random()*7,h,10),
            mat([0xc8a47a,0x9aac80,0xe0cdb0,0xb89070][Math.floor(Math.random()*4)],0.8));
          o.position.set(x-44+k*44,y+7+h/2,-2184); scene.add(o);
        }
      });
    });

    // ── BENCHES ───────────────────────────────────────────────────────────────
    const benchMat=mat(0xb08c60,0.85), benchLeg=mat(0x7a5c36,0.9);
    [[-700,0,900],[700,0,900]].forEach(([x,,z])=>{
      for(let s=0;s<5;s++){
        const sl=new THREE.Mesh(new THREE.BoxGeometry(240,14,24),benchMat);
        sl.position.set(x,170,z-48+s*24); sl.castShadow=true; scene.add(sl);
      }
      [[-100,z-45],[100,z-45],[-100,z+45],[100,z+45]].forEach(([lx,lz])=>{
        const lg=new THREE.Mesh(new THREE.BoxGeometry(16,170,16),benchLeg);
        lg.position.set(x+lx,85,lz); lg.castShadow=true; scene.add(lg);
      });
    });

    // ── PLANTS ────────────────────────────────────────────────────────────────
    // Key fix: all leaf geometry uses DoubleSide material and fixed world-space
    // orientations (rotation.y = spread angle) so they never flip as camera moves.
    function makePlant(x, y, z, scale=1, type=0) {
      const g = new THREE.Group();
      g.position.set(x, y, z);

      // Pot
      const pot = new THREE.Mesh(
        new THREE.CylinderGeometry(18*scale,14*scale,28*scale,14),
        mat(0xc07850,0.85));
      pot.position.y=14*scale; pot.castShadow=true; g.add(pot);

      // Soil — offset +1 unit above pot lip to avoid z-fighting with pot cap
      const soil = new THREE.Mesh(
        new THREE.CircleGeometry(17*scale,14),
        mat(0x5a3e28,0.95));
      soil.rotation.x=-Math.PI/2; soil.position.y=28.5*scale; g.add(soil);

      const LC = [0x6b9955,0x4e7c3a,0x8ab870,0x5a9044,0x7aae60];

      if (type === 0) {
        // Monstera — stems + round leaves
        for(let i=0;i<6;i++){
          const angle=(i/6)*Math.PI*2+Math.random()*0.3;
          const sH=(40+Math.random()*40)*scale;
          const stem=new THREE.Mesh(
            new THREE.CylinderGeometry(1.5*scale,2*scale,sH,6),
            mat(0x5a7a40,0.9));
          stem.position.set(Math.cos(angle)*8*scale, 28*scale+sH/2, Math.sin(angle)*8*scale);
          stem.rotation.z=(Math.random()-0.5)*0.6;
          stem.rotation.x=(Math.random()-0.5)*0.4;
          g.add(stem);

          const ls=(22+Math.random()*16)*scale;
          const leaf=new THREE.Mesh(new THREE.CircleGeometry(ls,10),leafMat(LC[i%LC.length]));
          leaf.position.set(
            Math.cos(angle)*(12+sH*0.6)*scale,
            28*scale+sH+ls*0.3,
            Math.sin(angle)*(12+sH*0.6)*scale);
          // Fixed orientation: face outward from stem direction
          leaf.rotation.y = angle;
          leaf.rotation.x = -Math.PI/3 + (Math.random()-0.5)*0.7;
          g.add(leaf);
        }
      } else if (type === 1) {
        // Fiddle-leaf / columnar
        const trunk=new THREE.Mesh(
          new THREE.CylinderGeometry(8*scale,10*scale,140*scale,10),
          mat(0x5a8040,0.85));
        trunk.position.y=28*scale+70*scale; trunk.castShadow=true; g.add(trunk);
        for(let i=0;i<9;i++){
          const angle=(i/9)*Math.PI*2;
          const leaf=new THREE.Mesh(new THREE.CircleGeometry(16*scale,8),leafMat(LC[i%LC.length]));
          leaf.position.set(
            Math.cos(angle)*14*scale,
            28*scale+30*scale+(i/9)*90*scale,
            Math.sin(angle)*14*scale);
          leaf.rotation.y=angle;
          leaf.rotation.x=-0.5;
          g.add(leaf);
        }
      } else {
        // Bushy / trailing
        for(let i=0;i<20;i++){
          const angle=(i/20)*Math.PI*2;
          const r=(10+Math.random()*22)*scale;
          const h=(Math.random()*40-20)*scale;
          const leaf=new THREE.Mesh(
            new THREE.CircleGeometry((8+Math.random()*10)*scale,6),
            leafMat(LC[i%LC.length]));
          leaf.position.set(Math.cos(angle)*r, 28*scale+20*scale+h, Math.sin(angle)*r);
          leaf.rotation.y=angle;
          leaf.rotation.x=-Math.PI/2+0.3+(Math.random()-0.5)*0.8;
          g.add(leaf);
        }
      }
      scene.add(g);
      return g;
    }

    makePlant(-1600,0,-1800,3.5,1); makePlant(1600,0,-1800,3.5,1);
    makePlant(-1600,0,  800,2.8,0); makePlant(1600,0,  800,2.8,0);
    makePlant(-360, 0, 1800,2.2,2); makePlant( 360,0, 1800,2.2,2);
    makePlant(-900, 0, -800,1.8,0); makePlant( 900,0, -800,1.8,2);
    makePlant(-900, 0,  400,1.6,1); makePlant( 900,0,  400,1.6,0);
    podPositions.forEach(([x,,z],i)=>makePlant(x+100,268,z,0.7,i%3));

    // ── HANGING PLANTERS ──────────────────────────────────────────────────────
    [[-900,1300,-600],[900,1300,-600],[0,1300,-1200],[-900,1300,200],[900,1300,200]].forEach(([x,y,z])=>{
      scene.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x,1380,z),new THREE.Vector3(x,y,z)]),
        new THREE.LineBasicMaterial({color:0x8b6a44})));
      const hp=new THREE.Mesh(new THREE.CylinderGeometry(20,15,24,12),mat(0xc07850,0.85));
      hp.position.set(x,y-12,z); scene.add(hp);
      for(let i=0;i<12;i++){
        const a=(i/12)*Math.PI*2;
        const drop=Math.random()*80;
        const leaf=new THREE.Mesh(
          new THREE.CircleGeometry(8+Math.random()*8,6),
          leafMat(0x6aaa55));
        leaf.position.set(x+Math.cos(a)*(18+drop*0.3), y-24-drop, z+Math.sin(a)*(18+drop*0.3));
        leaf.rotation.y=a;
        leaf.rotation.x=-Math.PI/2+0.5+Math.random()*0.5;
        scene.add(leaf);
      }
    });

    // ── MOSS WALL PANELS ──────────────────────────────────────────────────────
    const mossC=[0x6b8c55,0x7a9e62,0x5a7846,0x8aaa70];
    [-900,-200,200,900].forEach(x=>{
      const panel=new THREE.Mesh(new THREE.PlaneGeometry(300,500),mat(mossC[Math.floor(Math.random()*4)],0.95));
      panel.position.set(x,600,-2190); scene.add(panel);
      for(let m=0;m<40;m++){
        const b=new THREE.Mesh(new THREE.SphereGeometry(4+Math.random()*6,6,6),mat(mossC[Math.floor(Math.random()*4)],0.9));
        b.position.set(x+(Math.random()-0.5)*260,300+Math.random()*400,-2185); scene.add(b);
      }
    });

    // ── PEBBLE TRAYS ──────────────────────────────────────────────────────────
    [[-1400,0,0],[1400,0,0]].forEach(([x,,z])=>{
      const t=new THREE.Mesh(new THREE.CylinderGeometry(100,100,8,24),mat(0x7a6852,0.9));
      t.position.set(x,4,z); scene.add(t);
      for(let p=0;p<30;p++){
        const r=Math.random()*85, a=Math.random()*Math.PI*2;
        const pb=new THREE.Mesh(new THREE.SphereGeometry(4+Math.random()*5,6,6),
          mat([0xc8b89a,0xa09080,0xd4c4a8,0xb8a888][Math.floor(Math.random()*4)],0.9));
        pb.position.set(x+Math.cos(a)*r,10,z+Math.sin(a)*r); pb.scale.y=0.5; scene.add(pb);
      }
    });

    // ── RUGS ──────────────────────────────────────────────────────────────────
    [[-480,0,-100],[480,0,-100]].forEach(([x,,z],ri)=>{
      const rug=new THREE.Mesh(new THREE.PlaneGeometry(320,500),mat([0xc4a070,0xd4b880][ri],0.95));
      rug.rotation.x=-Math.PI/2; rug.position.set(x,2,z); scene.add(rug);
      for(let f=-160;f<=160;f+=12){
        [[z-250,z-270],[z+250,z+270]].forEach(([z1,z2])=>{
          const g=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x+f,2,z1),new THREE.Vector3(x+f,2,z2)]);
          scene.add(new THREE.Line(g,new THREE.LineBasicMaterial({color:0x8a7050})));
        });
      }
    });

    // ── SIGN ──────────────────────────────────────────────────────────────────
    const sp=new THREE.Mesh(new THREE.BoxGeometry(340,100,12),mat(0x8b6840,0.75));
    sp.position.set(0,950,-2186); scene.add(sp);
    const sb=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(340,100,14)),new THREE.LineBasicMaterial({color:0x5a3e22}));
    sb.position.set(0,950,-2184); scene.add(sb);

    // ── ORBIT CONTROLS ────────────────────────────────────────────────────────
    // Spherical coords orbiting around a fixed focal point
    const target = new THREE.Vector3(0, 280, 0);
    const sph = { radius: 2100, phi: Math.PI/2 - 0.08, theta: 0 };
    const MIN_PHI = 0.12, MAX_PHI = Math.PI * 0.58;
    const MIN_R   = 300,  MAX_R   = 3400;

    function applySph() {
      camera.position.set(
        target.x + sph.radius * Math.sin(sph.phi) * Math.sin(sph.theta),
        target.y + sph.radius * Math.cos(sph.phi),
        target.z + sph.radius * Math.sin(sph.phi) * Math.cos(sph.theta)
      );
      camera.lookAt(target);
    }
    applySph();

    let drag = false, px = 0, py = 0;
    let lastPinch = null;

    const onDown = e => { drag=true; px=e.clientX; py=e.clientY; el.style.cursor="grabbing"; };
    const onMove = e => {
      if (!drag) return;
      sph.theta -= (e.clientX-px)*0.004;
      sph.phi    = Math.max(MIN_PHI,Math.min(MAX_PHI, sph.phi+(e.clientY-py)*0.004));
      px=e.clientX; py=e.clientY;
      applySph();
    };
    const onUp = () => { drag=false; el.style.cursor="grab"; };
    const onWheel = e => {
      e.preventDefault();
      sph.radius = Math.max(MIN_R,Math.min(MAX_R, sph.radius+e.deltaY*1.4));
      applySph();
    };
    const onTouchStart = e => {
      if (e.touches.length===1){ drag=true; px=e.touches[0].clientX; py=e.touches[0].clientY; }
      else if (e.touches.length===2) lastPinch=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
    };
    const onTouchMove = e => {
      e.preventDefault();
      if(e.touches.length===1&&drag){
        sph.theta-=(e.touches[0].clientX-px)*0.005;
        sph.phi=Math.max(MIN_PHI,Math.min(MAX_PHI,sph.phi+(e.touches[0].clientY-py)*0.005));
        px=e.touches[0].clientX; py=e.touches[0].clientY; applySph();
      } else if(e.touches.length===2&&lastPinch!==null){
        const d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
        sph.radius=Math.max(MIN_R,Math.min(MAX_R,sph.radius-(d-lastPinch)*2));
        lastPinch=d; applySph();
      }
    };
    const onTouchEnd = () => { drag=false; lastPinch=null; };

    const el = renderer.domElement;
    el.style.cursor = "grab";
    el.addEventListener("mousedown",  onDown);
    el.addEventListener("mousemove",  onMove);
    el.addEventListener("mouseup",    onUp);
    el.addEventListener("mouseleave", onUp);
    el.addEventListener("wheel",      onWheel,      { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove",  onTouchMove,  { passive: false });
    el.addEventListener("touchend",   onTouchEnd);

    // ── RENDER LOOP ───────────────────────────────────────────────────────────
    let raf;
    const animate = () => { raf=requestAnimationFrame(animate); renderer.render(scene,camera); };
    animate();

    const onResize = () => {
      camera.aspect = mount.clientWidth/mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      el.removeEventListener("mousedown",  onDown);
      el.removeEventListener("mousemove",  onMove);
      el.removeEventListener("mouseup",    onUp);
      el.removeEventListener("mouseleave", onUp);
      el.removeEventListener("wheel",      onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove",  onTouchMove);
      el.removeEventListener("touchend",   onTouchEnd);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="sr-overlay" style={{ overflow:"hidden" }}>
      {/* HUD */}
      <div style={{
        position:"absolute", top:0, left:0, right:0, zIndex:10,
        display:"flex", justifyContent:"space-between", alignItems:"flex-start",
        padding:"20px 24px", pointerEvents:"none",
      }}>
        <div>
          <div style={{
            fontFamily:"'Playfair Display',Georgia,serif",
            fontSize:22, fontWeight:500, letterSpacing:"0.04em",
            color:"rgba(60,44,28,0.88)", textShadow:"0 1px 8px rgba(255,248,230,0.7)",
          }}>{title||"Soleil's Showroom"}</div>
          <div style={{
            fontFamily:"'IBM Plex Mono',monospace", fontSize:10,
            letterSpacing:"0.18em", color:"rgba(80,60,40,0.6)",
            marginTop:4, textTransform:"uppercase",
          }}>{spaceType||"Soft Botanical"}{tags?.length?" · "+tags.join(", "):""}</div>
        </div>
        <button onClick={onClose} style={{
          pointerEvents:"all", background:"rgba(255,248,236,0.75)",
          border:"1px solid rgba(140,100,60,0.3)", borderRadius:"50%",
          width:36, height:36, cursor:"pointer", fontSize:14,
          color:"rgba(80,55,30,0.8)", display:"flex", alignItems:"center",
          justifyContent:"center", backdropFilter:"blur(6px)",
        }}>✕</button>
      </div>

      <div ref={mountRef} style={{ width:"100%", height:"100%" }} />

      <div style={{
        position:"absolute", bottom:18, left:"50%", transform:"translateX(-50%)",
        fontFamily:"'IBM Plex Mono',monospace", fontSize:9,
        letterSpacing:"0.22em", color:"rgba(80,60,40,0.45)",
        pointerEvents:"none", textTransform:"uppercase", whiteSpace:"nowrap",
      }}>
        drag to look around · scroll to zoom
      </div>
    </div>
  );
}
