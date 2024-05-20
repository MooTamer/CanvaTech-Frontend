import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { OrbitControls, Environment, Sky } from '@react-three/drei';
import { HexColorPicker } from "react-colorful";

export default function Scene() {
    const [modelColor, setModelColor] = useState('#f00');

    const handleChangeColor = (e) => {
        setModelColor(e);
    };

    return (
        <div className="relative h-screen w-full"> {/* Wrapper div with Tailwind CSS class for relative positioning */}
            <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}> {/* Absolute positioning for Canvas */}
                <Model color={modelColor} />
                <directionalLight intensity={0.2} position={[0, 2, 3]} />
                <Environment preset="city" />
                <OrbitControls />
                {/* <Sky /> */}
            </Canvas>
            
            <HexColorPicker className="absolute top-0 right-100 z-50" color={modelColor} onChange={handleChangeColor} /> {/* Absolute positioning for HexColorPicker */}
        </div>
    );
}
