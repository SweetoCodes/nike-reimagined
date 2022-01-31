import { Suspense } from "react";
import { useThree } from "@react-three/fiber";
import { ContactShadows, } from "@react-three/drei";
import { Shoe } from "../atoms/assets/shoe";
import { Fallback } from "../molecules/html/fallback";
import { Overlay } from "../molecules/html/overlay";

export default function Scene() {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <>
      <Suspense fallback={<Fallback />}>
        <ambientLight />
        <ambientLight intensity={0.5} />
        <spotLight position={[1, 6, 1.5]} angle={0.2} penumbra={1} intensity={2.5} castShadow shadow-mapSize={[2048, 2048]} />
        <spotLight position={[-5, 5, -1.5]} angle={0.03} penumbra={1} intensity={4} castShadow shadow-mapSize={[1024, 1024]} />
        <spotLight position={[5, 5, -5]} angle={0.3} penumbra={1} intensity={4} castShadow={true} shadow-mapSize={[256, 256]} color="#ffffc0" />
        <ContactShadows position={[0, -3.8, 0]} scale={5} height={5} blur={4} resolution={256}  />
        <Shoe
          scale={height / 35}
          rotation={[0, 0, 0]}
          position={[0, -1.5, 0]}
        />
        <Overlay/>
      </Suspense>
    </>
  );
}