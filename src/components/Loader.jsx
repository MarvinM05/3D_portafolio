import { Html, useProgress } from "@react-three/drei"

const Loader = () => {

  const { progress } = useProgress()
  
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#915eff",
          fontWeight: 700,
          marginTop: 40
        }}
      >{progress.toFixed()}%</p>
    </Html>
  );
}

export default Loader