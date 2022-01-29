import { Canvas } from "@react-three/fiber";
import Scene from "../components/organisms/scene";

export default function Home() {

  return (
    <div className="h-screen w-screen bg-blue-100">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 20, 40], fov: 12 }}>
        <Scene/>
      </Canvas>
    </div>
  );
}
