import React, { useRef } from 'react';
import { useGLTF } from "@react-three/drei";
import { useThree } from '@react-three/fiber';

export default function Model({ color, materialProps }) {
    const { nodes } = useGLTF("/PP.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
    // const [scale, setScale] = useState(1);

    return (
        <group scale={[0.02, 0.02, 0.02]}>
            <mesh ref={torus} geometry={nodes.defaultMaterial.geometry}>
                <meshStandardMaterial color={color} {...materialProps} />
            </mesh>
        </group>
    );
}
