import { Html } from "@react-three/drei";
import Link from "next/link";

export const Overlay = ({}) => {
  return (
    <Html fullscreen style={{ "pointer-events": "none" }}>
      <div className="flex flex-col overflow-hidden max-w-[320px] mx-auto justify-between w-full h-screen text-center ">
        <div>
          <h1 className="">Nike</h1>
          <h2 className="">Air Max 90</h2>
          <p className="">Premium</p>
        </div>
        <div>
        <a href="https://www.charliesweeting.com/">
          <button className="pointer-events-auto font-oswald my-2 bg-black text-2xl text-white w-[300px] h-14 rounded-full">
            Add To Cart
          </button>
          </a>
        </div>
      </div>
    </Html>
  );
};
