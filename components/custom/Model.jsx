import React, { useRef } from 'react'
import { OrbitControls,MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'

export default function Model({ color }) {
    const { nodes } = useGLTF("/PP.glb");
    const { viewport } = useThree()
    const torus = useRef(null);

   

    return (
        <group scale={[0.02, 0.02, 0.02]} >
            {/* <Text  position={[0, 0, -1]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
                hello world!
            </Text> */}
            <mesh ref={torus} {...nodes.defaultMaterial}>
            <meshStandardMaterial color={color} />
            </mesh>
        </group>
    )
}