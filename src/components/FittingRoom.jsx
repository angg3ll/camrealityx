import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'

// ─── Pure helpers (no React deps) ────────────────────────────────

const FIT_EASE_CM = { slim: 2, regular: 5, relaxed: 9, baggy: 16, flared: 6 }

function cmToR(circumferenceCm) {
  return circumferenceCm / (2 * Math.PI) * (0.150 / (95 / (2 * Math.PI)))
}

function makeWrinkleNormalMap(seed = 0, intensity = 0.55) {
  const sz = 512
  const cv = document.createElement('canvas')
  cv.width = cv.height = sz
  const ctx = cv.getContext('2d')
  ctx.fillStyle = 'rgb(128,128,255)'
  ctx.fillRect(0, 0, sz, sz)
  const img = ctx.getImageData(0, 0, sz, sz)
  const d = img.data
  function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10) }
  function lerp(a, b, t) { return a + t * (b - a) }
  function rand(ix, iy) {
    const n = ix * 127.1 + iy * 311.7 + seed * 419.2
    return (Math.sin(n) * 43758.5453) % 1
  }
  function valueNoise(x, y, freq) {
    const fx = x * freq, fy = y * freq
    const ix = Math.floor(fx), iy = Math.floor(fy)
    const ux = fade(fx - ix), uy = fade(fy - iy)
    const a = rand(ix, iy), b = rand(ix + 1, iy)
    const c = rand(ix, iy + 1), dd = rand(ix + 1, iy + 1)
    return lerp(lerp(a, b, ux), lerp(c, dd, ux), uy)
  }
  function fbm(x, y, octaves, baseFreq) {
    let v = 0, amp = 0.5, freq = baseFreq, max = 0
    for (let i = 0; i < octaves; i++) {
      v += valueNoise(x, y, freq) * amp
      max += amp; amp *= 0.52; freq *= 2.1
    }
    return v / max
  }
  const H = new Float32Array(sz * sz)
  for (let y = 0; y < sz; y++) {
    for (let x = 0; x < sz; x++) {
      const nx = x / sz, ny = y / sz
      let h = fbm(nx, ny, 4, 1.8) * 0.60
      h += fbm(nx, ny * 2.5, 3, 2.5) * 0.25
      h += fbm(nx, ny, 2, 8.0) * 0.10
      h += fbm(nx, ny, 1, 18.0) * 0.05
      H[y * sz + x] = h
    }
  }
  const strength = intensity * 6.0
  for (let y = 1; y < sz - 1; y++) {
    for (let x = 1; x < sz - 1; x++) {
      const dX = (H[y * sz + (x + 1)] - H[y * sz + (x - 1)]) * strength
      const dY = (H[(y + 1) * sz + x] - H[(y - 1) * sz + x]) * strength
      const nz = 1.0
      const len = Math.sqrt(dX * dX + dY * dY + nz * nz)
      const i = (y * sz + x) * 4
      d[i]     = Math.round((-dX / len * 0.5 + 0.5) * 255)
      d[i + 1] = Math.round((-dY / len * 0.5 + 0.5) * 255)
      d[i + 2] = Math.round((nz / len * 0.5 + 0.5) * 255)
      d[i + 3] = 255
    }
  }
  ctx.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(cv)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  return tex
}

const SKIN_TONES = [
  '#FDDBB4', '#F1C27D', '#E0AC69', '#C68642',
  '#A0522D', '#8D5524', '#6B3A2A', '#3B1F0F',
  '#F5CBA7', '#D4A574', '#BC8A5F', '#9B6A3E',
]

function latheTorso(rTop, rMid, rBot, h, segs = 40) {
  const pts = []
  const neckR = rTop * 0.62
  const steps = 40
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    let r
    if (t < 0.12) {
      const u = t / 0.12
      const ease = u * u * (3 - 2 * u)
      r = neckR + (rTop - neckR) * ease
    } else if (t < 0.5) {
      const u = (t - 0.12) / 0.38
      r = rTop * (1 - 3 * u * u + 2 * u * u * u) + rMid * (3 * u * u - 2 * u * u * u)
    } else {
      const u = (t - 0.5) * 2
      r = rMid * (1 - 3 * u * u + 2 * u * u * u) + rBot * (3 * u * u - 2 * u * u * u)
    }
    pts.push(new THREE.Vector2(Math.max(r, 0.001), h / 2 - t * h))
  }
  return new THREE.LatheGeometry(pts, segs)
}

const CLOTHING_KEYWORDS = ['shirt', 'top', 'dress', 'jacket', 'pants', 'jeans', 'skirt',
  'shorts', 'coat', 'hoodie', 'blouse', 'sweater', 'cardigan', 'tee', 'vest', 'blazer',
  'trouser', 'legging', 'jumpsuit', 'romper', 'tunic', 'bodysuit']
const LOWER_KEYWORDS = ['pants', 'jeans', 'shorts', 'skirt', 'trouser', 'legging', 'bottom', 'trousers']

async function extractDominantColour(imageUrl) {
  try {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = imageUrl })
    const cv = document.createElement('canvas')
    cv.width = cv.height = 64
    const ctx = cv.getContext('2d')
    ctx.drawImage(img, 0, 0, 64, 64)
    const data = ctx.getImageData(16, 16, 32, 32).data
    let r = 0, g = 0, b = 0, n = 0
    for (let i = 0; i < data.length; i += 4) { r += data[i]; g += data[i + 1]; b += data[i + 2]; n++ }
    return `#${[r, g, b].map(v => Math.round(v / n).toString(16).padStart(2, '0')).join('')}`
  } catch { return '#888888' }
}

function detectGarmentType(product) {
  const text = (product.title + ' ' + (product.tags || []).join(' ')).toLowerCase()
  return LOWER_KEYWORDS.some(w => text.includes(w)) ? 'lower' : 'upper'
}

function getGarmentSize(product, measurements) {
  const text = (product.tags || []).join(' ').toUpperCase()
  // Check longer sizes first to avoid 'S' matching 'XS', 'L' matching 'XL'
  const sizes = [['XS', 82], ['XL', 114], ['S', 88], ['L', 104], ['M', 95]]
  for (const [sz, cm] of sizes) {
    if (new RegExp(`\\b${sz}\\b`).test(text)) return cm
  }
  return measurements.chest_cm
}

// ─── Component ───────────────────────────────────────────────────

export default function FittingRoom({ products, onClose }) {
  const [measurements, setMeasurements] = useState({
    height_cm: 175, chest_cm: 95, waist_cm: 80, hips_cm: 98,
    shoulders_cm: 44, arm_length_cm: 65, leg_length_cm: 90, torso_length_cm: 50,
  })
  const [wearing, setWearing] = useState({ upper: null, lower: null })
  const [skinColor, setSkinColor] = useState('#c68642')
  const [showSizing, setShowSizing] = useState(false)
  const [showSkinPicker, setShowSkinPicker] = useState(false)

  const mountRef = useRef()
  const animFrameRef = useRef()
  const measurementsRef = useRef(measurements)
  const wearingRef = useRef(wearing)
  const skinColorRef = useRef(skinColor)
  const partsRef = useRef({})
  const rebuildMannequinRef = useRef(null)
  const rebuildClothingRef = useRef(null)

  // Keep refs in sync with state (must be defined before init effect)
  useEffect(() => { measurementsRef.current = measurements }, [measurements])
  useEffect(() => { wearingRef.current = wearing }, [wearing])
  useEffect(() => { skinColorRef.current = skinColor }, [skinColor])

  // Three.js scene — runs once on mount
  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const W = mount.clientWidth || 800
    const H = mount.clientHeight || 600

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.shadowMap.enabled = true
    renderer.setClearColor(0x0a0a0b, 1)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.01, 100)

    scene.add(new THREE.AmbientLight(0xffffff, 0.55))
    const key = new THREE.DirectionalLight(0xffffff, 1.3)
    key.position.set(3, 5, 4); key.castShadow = true; scene.add(key)
    const fill = new THREE.DirectionalLight(0x8899ff, 0.4)
    fill.position.set(-3, 2, -2); scene.add(fill)
    const rim = new THREE.DirectionalLight(0xffeedd, 0.3)
    rim.position.set(0, 4, -5); scene.add(rim)

    const floorMesh = new THREE.Mesh(
      new THREE.CircleGeometry(2, 64),
      new THREE.MeshStandardMaterial({ color: 0x111114, roughness: 0.9 })
    )
    floorMesh.rotation.x = -Math.PI / 2
    floorMesh.position.y = -1.6
    floorMesh.receiveShadow = true

    const root = new THREE.Group()
    const clothGrp = new THREE.Group()
    scene.add(root)

    const bodyMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#c68642'), roughness: 0.65, metalness: 0.0 })
    const darkMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#c68642').multiplyScalar(0.75), roughness: 0.75, metalness: 0.0 })

    // ── Rebuild mannequin (body + clothing) ────────────────────────
    rebuildMannequinRef.current = () => {
      const M = measurementsRef.current
      const col = new THREE.Color(skinColorRef.current)
      bodyMat.color.set(col)
      darkMat.color.set(col.clone().multiplyScalar(0.75))
      bodyMat.needsUpdate = true; darkMat.needsUpdate = true

      while (root.children.length) root.remove(root.children[0])
      root.add(clothGrp); root.add(floorMesh)
      partsRef.current = {}

      const hs  = M.height_cm / 175
      const cs  = M.chest_cm / 95
      const ws  = M.waist_cm / 80
      const hpS = M.hips_cm / 98
      const ss  = M.shoulders_cm / 44
      const arS = M.arm_length_cm / 65
      const lgS = M.leg_length_cm / 90
      const tsS = M.torso_length_cm / 50

      const Y0     = -1.6
      const legH   = 0.75 * lgS
      const torH   = 0.50 * tsS
      const neckH  = 0.085
      const headR  = 0.112 * hs
      const chestR = 0.150 * cs
      const waistR = 0.110 * ws
      const hipR   = 0.160 * hpS
      const sW     = 0.200 * ss
      const torsoY = Y0 + legH + torH / 2
      const hipY   = Y0 + legH
      const neckY  = Y0 + legH + torH + neckH / 2
      const headY  = Y0 + legH + torH + neckH + headR + 0.01

      partsRef.current = { torsoY, torH, chestR, waistR, hipR, hipY, legH, sW }

      function add(geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) {
        const m = new THREE.Mesh(geo, mat)
        m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true
        root.add(m); return m
      }

      add(new THREE.SphereGeometry(headR, 32, 32), bodyMat, 0, headY, 0)
      add(new THREE.CylinderGeometry(0.048, 0.052, neckH, 20), darkMat, 0, neckY, 0)
      add(latheTorso(chestR, waistR, hipR, torH), bodyMat, 0, torsoY, 0)
      ;[-1, 1].forEach(s =>
        add(new THREE.SphereGeometry(0.058 * ss, 20, 20), bodyMat, s * sW, torsoY + torH / 2 - 0.035, 0)
      )

      const armLen = 0.56 * arS
      ;[-1, 1].forEach(s => {
        const uLen = armLen * 0.52, lLen = armLen * 0.48
        const ang = s * Math.PI / 7
        const sx = s * sW, sy = torsoY + torH / 2 - 0.04
        const ux = sx + s * uLen * Math.sin(Math.abs(ang)) * 0.5, uy = sy - uLen * 0.5
        add(new THREE.CylinderGeometry(0.036, 0.031, uLen, 14), bodyMat, ux, uy, 0, 0, 0, ang)
        const ex = sx + s * uLen * Math.sin(Math.abs(ang)), ey = sy - uLen * Math.cos(Math.abs(ang))
        add(new THREE.SphereGeometry(0.032, 14, 14), darkMat, ex, ey, 0)
        const lx = ex + s * 0.01, ly = ey - lLen / 2
        add(new THREE.CylinderGeometry(0.030, 0.024, lLen, 14), darkMat, lx, ly, 0)
        const handY = ey - lLen
        const palmW = 0.032, palmH = 0.038, palmD = 0.018
        const palm = new THREE.Mesh(new THREE.BoxGeometry(palmW, palmH, palmD), darkMat)
        palm.position.set(lx, handY - palmH / 2, 0); palm.castShadow = true; root.add(palm)
        add(new THREE.SphereGeometry(0.024, 10, 10), darkMat, lx, handY, 0)
        const fW = 0.009, fH = 0.028
        ;[-0.011, -0.004, 0.004, 0.011].forEach(fx => {
          add(new THREE.CylinderGeometry(fW * 0.9, fW, fH, 8), darkMat, lx + fx * s, handY - palmH - fH / 2 + 0.004, 0)
          add(new THREE.SphereGeometry(fW * 0.9, 8, 8), darkMat, lx + fx * s, handY - palmH - fH + 0.006, 0)
        })
        add(new THREE.CylinderGeometry(0.009, 0.010, 0.022, 8), darkMat, lx + s * 0.020, handY - palmH * 0.3, 0, 0, 0, s * 0.55)
      })

      add(new THREE.CylinderGeometry(hipR + 0.004, hipR + 0.004, 0.035, 32), darkMat, 0, hipY + 0.015, 0)
      ;[-1, 1].forEach(s => {
        const lx = s * 0.085 * hpS
        const uLH = legH * 0.52, lLH = legH * 0.48
        add(new THREE.CylinderGeometry(0.055, 0.046, uLH, 18), bodyMat, lx, hipY - uLH / 2, 0)
        add(new THREE.SphereGeometry(0.044, 14, 14), darkMat, lx, hipY - uLH, 0)
        add(new THREE.CylinderGeometry(0.043, 0.032, lLH, 16), bodyMat, lx, hipY - uLH - lLH / 2, 0)
        const foot = new THREE.Mesh(new THREE.BoxGeometry(0.062, 0.038, 0.13), darkMat)
        foot.position.set(lx, Y0 + 0.019, 0.036); foot.castShadow = true; root.add(foot)
      })

      rebuildClothingRef.current?.()
    }

    // ── Rebuild clothing only ──────────────────────────────────────
    rebuildClothingRef.current = () => {
      while (clothGrp.children.length) clothGrp.remove(clothGrp.children[0])
      const parts = partsRef.current
      if (!parts.torsoY) return
      const wearing = wearingRef.current
      const M = measurementsRef.current
      const { torsoY, torH, chestR, waistR, hipR, hipY, legH, sW } = parts

      function ca(geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) {
        const m = new THREE.Mesh(geo, mat)
        m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true
        clothGrp.add(m)
      }

      if (wearing.upper) {
        const item = wearing.upper
        const ease = FIT_EASE_CM[item.fitStyle || 'regular']
        const garmentChest = item.garmentSize || M.chest_cm
        const garmentWaist = item.garmentSize ? item.garmentSize * (M.waist_cm / M.chest_cm) : M.waist_cm
        const garmentHip   = item.garmentSize ? item.garmentSize * (M.hips_cm / M.chest_cm) : M.hips_cm
        const chestCirc = garmentChest + ease
        const waistCirc = garmentWaist + ease * 0.8
        const hipCirc   = garmentHip + ease * 1.1
        const shirtTop = Math.max(cmToR(chestCirc), chestR + 0.008)
        const shirtMid = Math.max(cmToR(waistCirc), waistR + 0.006)
        const shirtBot = Math.max(cmToR(hipCirc),   hipR + 0.010)
        const shirtH = torH * 0.90
        const shirtY = torsoY + torH * 0.05
        const wrinkleIntU = { slim: 0.18, regular: 0.32, relaxed: 0.50, baggy: 0.80, flared: 0.55 }[item.fitStyle || 'regular']
        const shirtWrinkle = makeWrinkleNormalMap((item.garmentSize || 95) * 1.3, wrinkleIntU)
        shirtWrinkle.repeat.set(2, 2.5)
        const roughU = { slim: 0.70, regular: 0.80, relaxed: 0.88, baggy: 0.94, flared: 0.88 }[item.fitStyle || 'regular']
        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(item.color || '#888888'),
          roughness: roughU, metalness: 0.0,
          normalMap: shirtWrinkle,
          normalScale: new THREE.Vector2(wrinkleIntU * 1.4, wrinkleIntU * 1.4),
          side: THREE.DoubleSide, depthWrite: true,
        })
        const shirtCollarR = shirtTop * 0.62
        const sPts = []
        sPts.push(new THREE.Vector2(0, shirtH / 2))
        sPts.push(new THREE.Vector2(shirtCollarR, shirtH / 2))
        for (let i = 0; i <= 40; i++) {
          const t = i / 40
          let r
          if (t < 0.12) {
            const u = t / 0.12
            r = shirtCollarR + (shirtTop - shirtCollarR) * u * u * (3 - 2 * u)
          } else if (t < 0.5) {
            const u = (t - 0.12) / 0.38
            r = shirtTop * (1 - 3 * u * u + 2 * u * u * u) + shirtMid * (3 * u * u - 2 * u * u * u)
          } else {
            const u = (t - 0.5) * 2
            r = shirtMid * (1 - u) + shirtBot * u
          }
          sPts.push(new THREE.Vector2(Math.max(r, 0.001), shirtH / 2 - t * shirtH))
        }
        sPts.push(new THREE.Vector2(shirtBot, -shirtH / 2))
        sPts.push(new THREE.Vector2(0, -shirtH / 2))
        ca(new THREE.LatheGeometry(sPts, 40), mat, 0, shirtY, 0)

        const armLen2 = 0.56 * (M.arm_length_cm / 65)
        const armAng  = Math.PI / 7
        const uLen2 = armLen2 * 0.52, lLen2 = armLen2 * 0.48
        const sR = Math.max(cmToR(chestCirc) * 0.30, 0.040)
        const shoulderY = torsoY + torH / 2 - 0.035
        const elbowX = sW + uLen2 * Math.sin(armAng)
        const elbowY = shoulderY - uLen2 * Math.cos(armAng)
        ;[-1, 1].forEach(s => {
          ca(new THREE.SphereGeometry(sR * 1.55, 24, 24), mat, s * sW, shoulderY + 0.01, 0)
          ca(new THREE.CylinderGeometry(sR + 0.002, sR, uLen2 + 0.01, 18, 1, false), mat,
            s * (sW + uLen2 * Math.sin(armAng) * 0.5), shoulderY - uLen2 * 0.5, 0, 0, 0, s * armAng)
          ca(new THREE.SphereGeometry(sR + 0.001, 16, 16), mat, s * elbowX, elbowY, 0)
          ca(new THREE.CylinderGeometry(sR, sR * 0.82, lLen2, 18, 1, false), mat,
            s * elbowX + s * 0.01, elbowY - lLen2 / 2, 0)
          ca(new THREE.CircleGeometry(sR * 0.82, 18), mat,
            s * elbowX + s * 0.01, elbowY - lLen2, 0, Math.PI / 2, 0, 0)
        })
        ca(new THREE.TorusGeometry(0.056, 0.012, 10, 32), mat,
          0, torsoY + torH / 2 + 0.012, 0, Math.PI / 2, 0, 0)
      }

      if (wearing.lower) {
        const item = wearing.lower
        const ease = FIT_EASE_CM[item.fitStyle || 'regular']
        const hpS = M.hips_cm / 98
        const lLen = legH * 0.96
        const garmentWaist = item.garmentSize || M.waist_cm
        const garmentHip   = item.garmentSize ? item.garmentSize * (M.hips_cm / M.waist_cm) : M.hips_cm
        const garmentThigh = garmentHip * 0.60
        const wbR  = Math.max(cmToR(garmentHip + ease * 1.1), hipR + 0.010)
        const topR = Math.max(cmToR(garmentThigh + ease * 0.9), 0.058)
        const kneR = topR * 0.88
        const botR = (item.fitStyle === 'baggy' || item.fitStyle === 'relaxed') ? topR * 0.82 : topR * 0.68
        const uLH = lLen * 0.52, lLH = lLen * 0.48
        const totalH = uLH + lLH
        const wrinkleIntL = { slim: 0.22, regular: 0.40, relaxed: 0.62, baggy: 0.95, flared: 0.75 }[item.fitStyle || 'regular']
        const wrinkleMap = makeWrinkleNormalMap(item.garmentSize || 82, wrinkleIntL)
        wrinkleMap.repeat.set(2, 3.5)
        const roughL = { slim: 0.72, regular: 0.82, relaxed: 0.90, baggy: 0.96, flared: 0.92 }[item.fitStyle || 'regular']
        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(item.color || '#888888'),
          roughness: roughL, metalness: 0.0,
          normalMap: wrinkleMap,
          normalScale: new THREE.Vector2(wrinkleIntL * 1.5, wrinkleIntL * 1.5),
          side: THREE.DoubleSide, depthWrite: true,
        })
        ca(new THREE.CylinderGeometry(wbR, wbR * 0.97, 0.08, 32, 1, false), mat, 0, hipY + 0.02, 0)
        ;[-1, 1].forEach(s => {
          const lx = s * 0.085 * hpS
          const pts = []
          const isFlared = item.fitStyle === 'flared'
          const isBaggy  = item.fitStyle === 'baggy' || item.fitStyle === 'relaxed'
          const sagAmt   = isBaggy ? topR * 0.12 : 0
          for (let i = 0; i <= 48; i++) {
            const t = i / 48
            const y = totalH / 2 - t * totalH
            let r
            if (isFlared) {
              r = t < 0.5 ? topR * (1 - t * 2) + kneR * (t * 2)
                : kneR * (1 - (t - 0.5) * 2 * (t - 0.5) * 2) + topR * 1.55 * ((t - 0.5) * 2 * (t - 0.5) * 2)
            } else {
              r = t < 0.5 ? topR * (1 - t * 2) + kneR * (t * 2)
                : kneR * (1 - (t - 0.5) * 2) + botR * ((t - 0.5) * 2)
            }
            const sagT = t < 0.5 ? t * 2 : 0
            const sag  = sagAmt * Math.sin(sagT * Math.PI)
            const ripple = isBaggy ? Math.sin(t * Math.PI * 5 + (item.garmentSize || 82) * 0.1) * topR * 0.018 : 0
            pts.push(new THREE.Vector2(Math.max(r + sag + ripple, 0.01), y))
          }
          pts.push(new THREE.Vector2(0, -totalH / 2))
          ca(new THREE.LatheGeometry(pts, 28), mat, lx, hipY - totalH / 2, 0)
          ca(new THREE.CircleGeometry(topR, 24), mat, lx, hipY, 0, -Math.PI / 2, 0, 0)
        })
      }
    }

    // Initial build
    rebuildMannequinRef.current()

    // Orbit controls
    let rotY = 0, rotX = 0.05, zoom = 3.5
    const ZOOM_MIN = 1.5, ZOOM_MAX = 6
    let isDragging = false, lastX = 0, lastY = 0
    const onPD = (e) => { isDragging = true; lastX = e.clientX; lastY = e.clientY; mount.setPointerCapture(e.pointerId) }
    const onPM = (e) => {
      if (!isDragging) return
      rotY += (e.clientX - lastX) * 0.012; lastX = e.clientX
      rotX += (e.clientY - lastY) * 0.006; lastY = e.clientY
      rotX = Math.max(-0.4, Math.min(0.6, rotX))
    }
    const onPU = () => { isDragging = false }
    const onWH = (e) => { zoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoom + e.deltaY * 0.005)) }
    mount.addEventListener('pointerdown', onPD)
    mount.addEventListener('pointermove', onPM)
    mount.addEventListener('pointerup', onPU)
    mount.addEventListener('wheel', onWH, { passive: true })

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate)
      camera.position.x = Math.sin(rotY) * zoom
      camera.position.y = 0.3 + rotX * zoom * 0.4
      camera.position.z = Math.cos(rotY) * zoom
      camera.lookAt(0, 0.1, 0)
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const W2 = mount.clientWidth, H2 = mount.clientHeight
      if (!W2 || !H2) return
      camera.aspect = W2 / H2; camera.updateProjectionMatrix()
      renderer.setSize(W2, H2)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      mount.removeEventListener('pointerdown', onPD)
      mount.removeEventListener('pointermove', onPM)
      mount.removeEventListener('pointerup', onPU)
      mount.removeEventListener('wheel', onWH)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  // Rebuild mannequin when measurements or skinColor change
  useEffect(() => {
    if (rebuildMannequinRef.current) rebuildMannequinRef.current()
  }, [measurements, skinColor])

  // Rebuild clothing when wearing changes
  useEffect(() => {
    if (rebuildClothingRef.current) rebuildClothingRef.current()
  }, [wearing])

  const clothingProducts = products.filter(p => {
    const text = (p.title + ' ' + (p.tags || []).join(' ')).toLowerCase()
    return CLOTHING_KEYWORDS.some(k => text.includes(k))
  })
  const panelProducts = clothingProducts.length > 0 ? clothingProducts : products

  const tryOn = async (product) => {
    const color = await extractDominantColour(product.image)
    const type = detectGarmentType(product)
    const garmentSize = getGarmentSize(product, measurementsRef.current)
    setWearing(prev => ({ ...prev, [type]: { ...product, fitStyle: 'regular', garmentSize, color } }))
  }

  const getFitStatus = (type) => {
    const item = wearing[type]
    if (!item?.garmentSize) return null
    const userSize = type === 'upper' ? measurements.chest_cm : measurements.waist_cm
    const diff = item.garmentSize - userSize
    if (diff < -5) return { text: 'too small', color: '#f87171' }
    if (diff > 15) return { text: 'too big', color: '#fbbf24' }
    return { text: 'good fit', color: '#4ade80' }
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#0a0a0b', zIndex: 600, display: 'flex', flexDirection: 'column' }}>
      {/* Top HUD */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', background: 'rgba(10,10,12,0.9)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #222226', zIndex: 10, flexShrink: 0 }}>
        <button onClick={onClose} style={{ background: 'none', border: '1px solid #333', color: '#888', padding: '6px 14px', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>
          ← Back
        </button>
        <span style={{ color: '#ece9e3', fontFamily: 'serif', fontSize: 15, letterSpacing: '0.12em' }}>FITTING ROOM</span>
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowSkinPicker(v => !v)}
            style={{ width: 28, height: 28, borderRadius: '50%', background: skinColor, border: '2px solid #555', cursor: 'pointer', display: 'block' }}
            title="Skin tone"
          />
          {showSkinPicker && (
            <div style={{ position: 'absolute', right: 0, top: 36, background: '#1a1a1e', border: '1px solid #333', borderRadius: 10, padding: 10, display: 'grid', gridTemplateColumns: 'repeat(4, 28px)', gap: 6, zIndex: 20 }}>
              {SKIN_TONES.map(tone => (
                <button
                  key={tone}
                  onClick={() => { setSkinColor(tone); setShowSkinPicker(false) }}
                  style={{ width: 28, height: 28, borderRadius: '50%', background: tone, border: skinColor === tone ? '2px solid #c8f542' : '2px solid transparent', cursor: 'pointer' }}
                />
              ))}
              <input
                type="color"
                value={skinColor}
                onChange={e => setSkinColor(e.target.value)}
                style={{ gridColumn: 'span 4', height: 28, cursor: 'pointer', borderRadius: 4, width: '100%' }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Left panel — clothing items */}
        <div style={{ width: 190, background: '#111113', borderRight: '1px solid #1e1e22', overflowY: 'auto', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
          <div style={{ color: '#555', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: 4 }}>
            Try On ({panelProducts.length})
          </div>
          {panelProducts.map(p => (
            <button
              key={p.id}
              onClick={() => tryOn(p)}
              style={{ background: '#1a1a1e', border: '1px solid #2a2a2e', borderRadius: 8, padding: 8, cursor: 'pointer', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 4, transition: 'border-color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#c8f542'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a2e'}
            >
              {p.image && (
                <img src={p.image} alt="" style={{ width: '100%', height: 110, objectFit: 'cover', borderRadius: 6 }} />
              )}
              <span style={{ color: '#ccc', fontSize: 11, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {p.title}
              </span>
              {p.price != null && (
                <span style={{ color: '#c8f542', fontSize: 11 }}>${p.price}</span>
              )}
            </button>
          ))}
        </div>

        {/* Canvas */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

          {/* Wearing panel */}
          {(wearing.upper || wearing.lower) && (
            <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(10,10,14,0.88)', border: '1px solid #2a2a2e', borderRadius: 10, padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 8, minWidth: 160, maxWidth: 200 }}>
              <div style={{ color: '#555', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Wearing</div>
              {(['upper', 'lower']).filter(t => wearing[t]).map(type => {
                const item = wearing[type]
                const fit = getFitStatus(type)
                return (
                  <div key={type} style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: '#ccc', fontSize: 11, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</div>
                      {fit && <div style={{ color: fit.color, fontSize: 10, marginTop: 1 }}>{fit.text}</div>}
                    </div>
                    <button
                      onClick={() => setWearing(prev => ({ ...prev, [type]: null }))}
                      style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: 14, lineHeight: 1, flexShrink: 0, padding: 0 }}
                    >✕</button>
                  </div>
                )
              })}
            </div>
          )}

          <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', color: '#3a3a3e', fontSize: 11, pointerEvents: 'none', whiteSpace: 'nowrap' }}>
            Drag to rotate · Scroll to zoom · Click item to try on
          </div>
        </div>
      </div>

      {/* Bottom sizing toolbar */}
      <div style={{ background: '#111113', borderTop: '1px solid #1e1e22', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 16px' }}>
          <button
            onClick={() => setShowSizing(v => !v)}
            style={{ background: 'none', border: '1px solid #333', color: '#888', padding: '4px 10px', borderRadius: 6, cursor: 'pointer', fontSize: 12, flexShrink: 0 }}
          >
            {showSizing ? '⊖ Sizing' : '⊕ Sizing'}
          </button>
          {!showSizing && (
            <span style={{ color: '#444', fontSize: 11 }}>
              H:{measurements.height_cm} · C:{measurements.chest_cm} · W:{measurements.waist_cm} · Hip:{measurements.hips_cm}
            </span>
          )}
        </div>
        {showSizing && (
          <div style={{ padding: '4px 16px 14px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
            {[
              { key: 'height_cm', label: 'Height', min: 140, max: 200 },
              { key: 'chest_cm', label: 'Chest', min: 70, max: 130 },
              { key: 'waist_cm', label: 'Waist', min: 60, max: 120 },
              { key: 'hips_cm', label: 'Hips', min: 75, max: 135 },
              { key: 'arm_length_cm', label: 'Arms', min: 50, max: 80 },
            ].map(({ key, label, min, max }) => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ color: '#666', fontSize: 10 }}>{label}</span>
                  <span style={{ color: '#c8f542', fontSize: 11 }}>{measurements[key]}</span>
                </div>
                <input
                  type="range" min={min} max={max} value={measurements[key]}
                  onChange={e => setMeasurements(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                  style={{ width: '100%', accentColor: '#c8f542', cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
