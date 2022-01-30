import { Suspense, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useScroll, Scroll } from "@react-three/drei";
import { Shoe } from "../atoms/assets/shoe";

export default function Scene() {
  const { width, height } = useThree((state) => state.viewport);
  const scroll = useScroll();

  return (
    <>
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight castShadow position={[5, 5, 5]} />
        {/* <OrbitControls /> */}
        <Shoe
          scale={width / 20}
          rotation={[0, 0, 0]}
          position={[0, 0, 0]}
          targetRotation={[-Math.PI / 2, 0, 0]}
        />
      </Suspense>
    </>
  );
}
