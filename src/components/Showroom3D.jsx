import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import FittingRoom from './FittingRoom'

export default function Showroom3D({ products, onClose }) {
  const [fittingRoomOpen, setFittingRoomOpen] = useState(false)
  const mountRef = useRef()
  const animFrameRef = useRef()

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const W = mount.clientWidth || 900
    const H = mount.clientHeight || 600

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.shadowMap.enabled = true
    renderer.setClearColor(0x0c0c10, 1)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x0c0c10, 10, 22)

    const camera = new THREE.PerspectiveCamera(52, W / H, 0.01, 100)

    // Ambient + main spot
    scene.add(new THREE.AmbientLight(0xffffff, 0.25))
    const mainSpot = new THREE.SpotLight(0xfff5e0, 1.8)
    mainSpot.position.set(0, 9, 2)
    mainSpot.angle = Math.PI / 4
    mainSpot.penumbra = 0.35
    mainSpot.castShadow = true
    scene.add(mainSpot)
    const fill = new THREE.DirectionalLight(0x3355aa, 0.18)
    fill.position.set(-5, 3, -2); scene.add(fill)

    // Floor
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 24),
      new THREE.MeshStandardMaterial({ color: 0x0e0e12, roughness: 0.95 })
    )
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    scene.add(floor)

    // Walls
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x101014, roughness: 0.98 })
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(24, 12), wallMat)
    backWall.position.set(0, 6, -7); scene.add(backWall)
    const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(14, 12), wallMat)
    leftWall.position.set(-12, 6, 0); leftWall.rotation.y = Math.PI / 2; scene.add(leftWall)
    const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(14, 12), wallMat)
    rightWall.position.set(12, 6, 0); rightWall.rotation.y = -Math.PI / 2; scene.add(rightWall)

    // Products on pedestals
    const displayItems = products.slice(0, 6)
    const count = displayItems.length
    const loader = new THREE.TextureLoader()

    displayItems.forEach((product, idx) => {
      const spread = count <= 3 ? 2.8 : 3.6
      const angle = count === 1 ? 0
        : ((idx / (count - 1)) - 0.5) * Math.PI * 0.9
      const x = Math.sin(angle) * spread
      const z = Math.cos(angle) * spread * 0.5 - 2.5

      // Pedestal — marble-ish white cylinder
      const pedMat = new THREE.MeshStandardMaterial({ color: 0xddd8d0, roughness: 0.35, metalness: 0.08 })
      const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.48, 1.1, 24), pedMat)
      ped.position.set(x, 0.55, z); ped.castShadow = true; ped.receiveShadow = true
      scene.add(ped)

      // Pedestal top cap
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.06, 24),
        new THREE.MeshStandardMaterial({ color: 0xf0ece4, roughness: 0.3, metalness: 0.1 }))
      cap.position.set(x, 1.13, z); scene.add(cap)

      // Product image plane
      const planeMat = new THREE.MeshStandardMaterial({
        color: 0xffffff, roughness: 0.6, metalness: 0.0,
      })
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.85), planeMat)
      plane.position.set(x, 2.05, z)
      plane.castShadow = false; scene.add(plane)

      if (product.image) {
        loader.load(product.image, tex => {
          planeMat.map = tex; planeMat.needsUpdate = true
        }, undefined, () => {
          // CORS fallback — show a solid colour swatch
          planeMat.color.set(0x4a4a5a); planeMat.needsUpdate = true
        })
      }

      // Per-pedestal spotlight
      const spot = new THREE.SpotLight(0xffffff, 1.2)
      spot.position.set(x, 5.5, z + 0.3)
      spot.target.position.set(x, 1.1, z)
      spot.angle = Math.PI / 9; spot.penumbra = 0.45
      scene.add(spot); scene.add(spot.target)
    })

    // Orbit controls
    let rotY = 0, rotX = 0.06, zoom = 5.8
    const ZOOM_MIN = 2.5, ZOOM_MAX = 11
    let isDragging = false, lastX = 0, lastY = 0

    const onPD = (e) => { isDragging = true; lastX = e.clientX; lastY = e.clientY; mount.setPointerCapture(e.pointerId) }
    const onPM = (e) => {
      if (!isDragging) return
      rotY -= (e.clientX - lastX) * 0.007; lastX = e.clientX
      rotX += (e.clientY - lastY) * 0.004; lastY = e.clientY
      rotX = Math.max(-0.25, Math.min(0.35, rotX))
    }
    const onPU = () => { isDragging = false }
    const onWH = (e) => { zoom = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, zoom + e.deltaY * 0.009)) }

    mount.addEventListener('pointerdown', onPD)
    mount.addEventListener('pointermove', onPM)
    mount.addEventListener('pointerup', onPU)
    mount.addEventListener('wheel', onWH, { passive: true })

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate)
      camera.position.x = Math.sin(rotY) * zoom
      camera.position.y = 1.8 + rotX * zoom * 0.5
      camera.position.z = Math.cos(rotY) * zoom
      camera.lookAt(0, 1.5, 0)
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
  }, [products])

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#0c0c10', zIndex: 500, display: 'flex', flexDirection: 'column' }}>
      {/* Top HUD */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px', background: 'rgba(10,10,14,0.88)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #1e1e24', zIndex: 10, flexShrink: 0 }}>
        <button
          onClick={onClose}
          style={{ background: 'none', border: '1px solid #333', color: '#777', padding: '6px 14px', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}
        >
          ✕ Exit
        </button>
        <span style={{ color: '#ece9e3', fontFamily: 'serif', fontSize: 15, letterSpacing: '0.14em' }}>YOUR SHOWROOM</span>
        <button
          onClick={() => setFittingRoomOpen(true)}
          style={{ background: '#c8f542', border: 'none', color: '#000', padding: '8px 18px', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}
        >
          Fitting Room →
        </button>
      </div>

      {/* Canvas */}
      <div ref={mountRef} style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', color: '#333', fontSize: 12, pointerEvents: 'none', whiteSpace: 'nowrap' }}>
          Drag to rotate · Scroll to zoom
        </div>
      </div>

      {/* Fitting Room overlay */}
      {fittingRoomOpen && (
        <FittingRoom
          products={products}
          onClose={() => setFittingRoomOpen(false)}
        />
      )}
    </div>
  )
}
