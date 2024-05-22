// Model.js
import React, { useRef } from 'react';
import { useGLTF } from "@react-three/drei";

export default function Model({ color, materialProps, scale }) {
    const { nodes } = useGLTF("/PP.glb");
    const torus = useRef(null);

    return (
        <group scale={scale}>
            <mesh ref={torus} geometry={nodes.defaultMaterial.geometry}>
                <meshStandardMaterial color={color} {...materialProps} />
            </mesh>
        </group>
    );
}
