import { ScrollInstruction, TitleAndPrice, Heel, Ankle, Midsole, SelectSize, BuiltBy, Quote } from "../components/header";

export const sections = [
  {
    modelPosition: [0, -0.2, 6],
    modelRotation: [Math.PI / 3, 0, 0],
    component: <ScrollInstruction/>
  },
  {
    modelPosition: [-0.2, -1.5, 0],
    modelRotation: [0, Math.PI / 2, 0],
    component: <Quote/>
  },
  {
    modelPosition: [0, -0.5, 6],
    modelRotation: [Math.PI/4, Math.PI, 0],
    component: <Heel/>
  },
  {
    modelPosition: [-0.2, -1.5, 0],
    modelRotation: [0, 7 *Math.PI/5, 0],
    component: <Ankle/>
  },
  {
    modelPosition: [-0.2, -1.5, 0],
    modelRotation: [-Math.PI/6, 7 *Math.PI/5, 0],
    component: <Midsole/>
  },
  {
    modelPosition: [-0.2, -1.5, 0],
    modelRotation: [0, Math.PI / 2, 0],
    component: <TitleAndPrice/>
  },
  {
    modelPosition: [0, -0.7, 3],
    modelRotation: [Math.PI / 3, -Math.PI/2, 0],
    component: <SelectSize/>
  },
  // {
  //   modelPosition: [0, -0.2, 2],
  //   modelRotation: [Math.PI / 3, 0, 0],
  //   component: <BuiltBy/>
  // },
  {
    modelPosition: [0, -0.2, 6],
    modelRotation: [Math.PI / 3, 0, 0],
    component: <ScrollInstruction/>
  },
];
