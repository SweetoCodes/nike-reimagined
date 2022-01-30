import { Suspense, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useScroll, Scroll, ContactShadows, } from "@react-three/drei";
import { Shoe } from "../atoms/assets/shoe";
import { Fallback } from "../molecules/html/fallback";

export default function Scene() {
  const { width, height } = useThree((state) => state.viewport);
  const scroll = useScroll();

  return (
    <>
      <Suspense fallback={<Fallback />}>
        <ambientLight />
        {/* <pointLight castShadow shadow-mapSize={[2048, 2048]} position={[5, 5, 5]} /> */}
        {/* <OrbitControls /> */}
        <ambientLight intensity={0} />
      <spotLight position={[1, 6, 1.5]} angle={0.2} penumbra={1} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} />
      <spotLight position={[-5, 5, -1.5]} angle={0.03} penumbra={1} intensity={4} castShadow shadow-mapSize={[1024, 1024]} />
      <spotLight position={[5, 5, -5]} angle={0.3} penumbra={1} intensity={4} castShadow={true} shadow-mapSize={[256, 256]} color="#ffffc0" />
        <ContactShadows position={[0, -2.5, 0]} scale={5} height={5} blur={6} resolution={256}  />
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

// frames={1} rotation-x={[Math.PI / 2]} position={[0, -2, 0]} far={0.4} height={2} blur={4}
// opacity={1} scale={10} blur={1} far={10} resolution={256} />