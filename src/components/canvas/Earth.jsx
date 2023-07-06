import { Suspense } from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Earth = () => {

  const earth = useGLTF('./tie_in_fighter/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.2}/>
      <pointLight intensity={3} />
      <spotLight
        position={[20, 50, 10]}
        angle={0.12}
        penumbra={0.5}
        intensity={0.3}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={earth.scene}
        scale={0.004}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demad"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,

        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          autoRotateSpeed={-0.5}
          maxPolarAzngle={Math.PI / 2}
          minPolarAzngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas