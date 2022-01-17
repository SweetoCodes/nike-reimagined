import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Shoe from "../components/atoms/assets/shoe";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-blue-100">
      <Canvas>
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <OrbitControls />
        <Suspense fallback={null} >
          <Shoe/>
        </Suspense>
      </Canvas>
    </div>
  );
}
