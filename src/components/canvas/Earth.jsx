import { Suspense } from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Earth = () => {

  const earth = useGLTF('./planet/scene.gltf')
  return (
    
    <primitive object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demad"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false}
          enableZoom={false}
          maxPolarAzngle={Math.PI / 2}
          minPolarAzngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas