import { Html } from "@react-three/drei";

export const Fallback = ({}) => {
  return (
    <Html fullscreen={true}>
      <div className="flex flex-col sm:justify-center sm:mt-0 mt-20 h-screen w-full text-center space-y-2">
        <div className="max-w-[320px] mx-auto">
          <h1 className="text-[150px] leading-[150px] font-extrabold italic">
            Nike
          </h1>
          <h2 className=" text-[60px] leading-snug font-extrabold">
            Reimagined
          </h2>
          <p className="text-[30px] leading-snug">Loading...</p>
        </div>
      </div>
    </Html>
  );
};
