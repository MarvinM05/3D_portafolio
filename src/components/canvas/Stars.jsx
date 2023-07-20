import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";


const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1000), { radius: 1.2 })
  );


  const rotationSpeed = 0.4; // Adjust this value for desired speed

  useFrame((state, delta) => {
    const { rotation } = ref.current;
    rotation.x += rotationSpeed * delta * 0.02;
    rotation.y += rotationSpeed * delta * 0.03;
    ref.current.rotation.set(rotation.x, rotation.y, rotation.z);
  });

  return (
    // eslint-disable-next-line react/no-unknown-property
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8" // Set a bright color
          size={0.003} // Increase the size for brightness
          sizeAttenuation={true} // Enable size attenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }} gl={{preserveDrawingBuffer: true}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
