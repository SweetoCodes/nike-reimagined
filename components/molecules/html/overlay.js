import { Html } from "@react-three/drei";
import { Scroll } from "@react-three/drei";

export const Overlay = ({}) => {
  return (
    <Html fullscreen style={{"pointer-events": "none"}}>
      <div className="flex flex-col overflow-hidden max-w-[320px] mx-auto justify-center w-full text-center">
        <h1 className="">
          Nike
        </h1>
        <h2 className="">Air Max 90</h2>
        <p className="">Premium</p>
      </div>
     </Html>
  );
};