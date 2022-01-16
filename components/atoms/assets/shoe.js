import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export default function Shoe({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF('/assets/model.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
          <group scale={0.15} rotation={[0, 3*Math.PI / 2, 0]}>
            <mesh
              geometry={nodes.RT_AirMax90_aiStandardSurface1_0.geometry}
              material={nodes.RT_AirMax90_aiStandardSurface1_0.material}
            />
            <mesh
              geometry={nodes.RT_AirMax90_aiStandardSurface1_0_1.geometry}
              material={nodes.RT_AirMax90_aiStandardSurface1_0_1.material}
            />
          </group>
    </group>
  )
}

useGLTF.preload('/assets/model.gltf')
