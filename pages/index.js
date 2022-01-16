import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shoe from "../components/atoms/assets/shoe";

export default function Home() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={null} >
          <Shoe position={[0, 0, 0]}  />
        </Suspense>
      </Canvas>
    </div>
  );
}
