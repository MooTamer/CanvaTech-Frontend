import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { OrbitControls, Environment } from '@react-three/drei';
import { HexColorPicker } from "react-colorful";

export default function Scene() {
    const [modelColor, setModelColor] = useState('#f00');
    const [materialProps, setMaterialProps] = useState({});
    const [scale, setScale] = useState([0.02, 0.02, 0.02]);

    const handleChangeColor = (e) => {
        setModelColor(e);
    };

    const changeMaterial = (property, value) => {
        setMaterialProps(prev => ({
            ...prev,
            [property]: value
        }));
    };

    const changeScale = (value) => {
        setScale(value);
    };

    return (
        <div className="relative h-screen w-full">
            <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                <Model color={modelColor} materialProps={materialProps} scale={scale} />
                <directionalLight intensity={0.2} position={[0, 2, 3]} />
                <Environment preset="city" />
                <OrbitControls />
            </Canvas>

            <HexColorPicker className="absolute bottom-10 left-10 z-50" color={modelColor} onChange={handleChangeColor} />
            <div className="absolute bottom-10 left-0 right-0 flex flex-wrap justify-center gap-2">
                <button onClick={() => changeMaterial('roughness', 0)} className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg">Smooth</button>
                <button onClick={() => changeMaterial('roughness', 1)} className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg">Rough</button>
                <button onClick={() => changeMaterial('metalness', 0)} className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg">Non-Metallic</button>
                <button onClick={() => changeMaterial('metalness', 1)} className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg">Metallic</button>
                <button onClick={() => changeMaterial('clearcoat', 0)} className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg">No Clearcoat</button>
                <button onClick={() => changeMaterial('clearcoat', 1)} className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg">Clearcoat</button>
                <button onClick={() => changeMaterial('transparency', 0)} className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg">Opaque</button>
                <button onClick={() => changeMaterial('transparency', 1)} className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg">Transparent</button>
              
            </div>
        </div>
    );
}
