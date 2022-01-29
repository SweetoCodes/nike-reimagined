import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Shoe from "../atoms/assets/shoe";

export default function Scene() {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Shoe scale={width / 30} />
      </Suspense>
    </>
  );
}
