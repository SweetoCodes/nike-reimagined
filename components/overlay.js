import { Html, useScroll } from "@react-three/drei";
import { useState } from "react"
import { sections } from "../data/sections";
import { useFrame } from "@react-three/fiber";
export const Overlay = () => {
  const [component, setComponent] = useState(null)
  const scroll = useScroll();
  
  useFrame(() => {
    const x = sections[Math.floor(scroll.range(0, 1) * (sections.length))]
    setComponent(x.component)
  });

  return (
    <Html fullscreen style={{ "pointer-events": "none" }}>
      <div className="flex flex-col overflow-hidden max-w-[320px] mx-auto justify-between w-full h-screen text-center ">
        <div>
        {component}
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
