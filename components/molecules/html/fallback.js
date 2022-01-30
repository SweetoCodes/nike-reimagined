import { Html } from "@react-three/drei";

export const Fallback = ({}) => {
  return (
    <Html fullscreen={true}>
      <div className="flex flex-col justify-center h-screen w-full text-center space-y-2">
        <h1 className="text-[200px] leading-[200px] font-extrabold italic">Nike</h1>
        <h2 className=" text-[70px] leading-snug font-extrabold">Reimagined</h2>
        <p className="text-[30px] leading-snug">Loading...</p>
        </div>
    </Html>
  );
};
