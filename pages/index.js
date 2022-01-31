import { Canvas } from "@react-three/fiber";
import Scene from "../components/organisms/scene";
import { softShadows, ScrollControls } from "@react-three/drei";
import { sections } from "../data/sections";

export default function Home() {
  softShadows()
  return (
    <div className="h-screen w-screen mx-auto bg-gray-200 ">
      <Canvas shadows colorManagement shadowMap dpr={[1, 2]} camera={{ position: [0, 0, 40], fov: 12 }}>
        <ScrollControls pages={sections.length}>
          <Scene />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
