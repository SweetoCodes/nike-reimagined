import { Header } from "../components/header";

export const sections = [
  {
    modelPosition: [0, -0.5, 8],
    modelRotation: [Math.PI / 3, 0, 0],
    component: <Header/>
  },
  {
    modelPosition: [-0.2, -2, 0],
    modelRotation: [0, Math.PI / 2, 0],
    component: <Header/>
  },
  {
    modelPosition: [0, -0.5, 6],
    modelRotation: [Math.PI/4, -Math.PI, 0],
    component: <Header/>
  },
  {
    modelPosition: [-1, 1, -1],
    modelRotation: [Math.PI, 0, 0],
    component: <Header/>
  },
];
