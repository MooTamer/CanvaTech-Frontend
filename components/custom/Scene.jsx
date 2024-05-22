import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { OrbitControls, Environment } from '@react-three/drei';
import { HexColorPicker } from "react-colorful";

export default function Scene() {
    const [modelColor, setModelColor] = useState('#f00');
    const [materialProps, setMaterialProps] = useState({});
    const [scale, setScale] = useState([0.02, 0.02, 0.02]);
    const [price, setPrice] = useState(100); // Initial price

    const handleChangeColor = (e) => {
        setModelColor(e);
        // Update price based on color selection
        setPrice(price + 10); // Example price adjustment
    };

    const changeMaterial = (property, value) => {
        setMaterialProps(prev => ({
            ...prev,
            [property]: value
        }));
        // Update price based on material property changes
        setPrice(price + 5); // Example price adjustment
    };

    const changeScale = (value) => {
        setScale(value);
        // Update price based on scale changes
        setPrice(price + 20); // Example price adjustment
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
                {/* Add more buttons for other material properties */}
            </div>

            <div className="absolute bottom-10 left-0 right-0 flex flex-wrap justify-center gap-2">
                <button onClick={() => changeScale([0.02, 0.02, 0.02])} className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg">Small</button>
                <button onClick={() => changeScale([0.04, 0.04, 0.04])} className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg">Medium</button>
                <button onClick={() => changeScale([0.06, 0.06, 0.06])} className="px-4 py-2 bg-white text-black border-2 border-black rounded-lg">Large</button>
            </div>

            <div className="absolute bottom-10 left-0 right-0 flex flex-wrap justify-center gap-2">
                <p>Price: ${price}</p>
            </div>
        </div>
    );
}
