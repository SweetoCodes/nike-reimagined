import { Canvas } from "@react-three/fiber";
import Scene from "../components/organisms/scene";
import { softShadows, ScrollControls } from "@react-three/drei";

export default function Home() {
  softShadows()
  return (
    <div className="h-screen max-w-[400px] mx-auto ">
      <Canvas shadows colorManagement shadowMap dpr={[1, 2]} camera={{ position: [0, 0, 40], fov: 12 }}>
        <ScrollControls pages={5}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
