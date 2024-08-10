import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { OrbitControls, Environment } from '@react-three/drei';
import { HexColorPicker } from 'react-colorful';

export default function Scene() {
    const [modelColor, setModelColor] = useState('#f00');
    const [materialProps, setMaterialProps] = useState({});
    const [scale, setScale] = useState([0.02, 0.02, 0.02]);
    const [price, setPrice] = useState(100); // Initial price

    // Define a function to calculate the price based on the current state
    const calculatePrice = () => {
        let newPrice = 100;

        // Example logic to adjust price based on color, material, and scale
        newPrice += (modelColor === '#f00' ? 10 : 20); // Price change based on color
        newPrice += (materialProps.roughness === 1 ? 5 : 0); // Price change based on material
        newPrice += (scale[0] > 0.05 ? 20 : 0); // Price change based on scale

        return newPrice;
    };

    useEffect(() => {
        // Update price whenever color, materialProps, or scale changes
        setPrice(calculatePrice());
    }, [modelColor, materialProps, scale]);

    const handleChangeColor = (color) => {
        setModelColor(color);
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
        <div className="relative flex container h-screen w-auto">
            <div className="absolute bottom-[10px] right-0 gap-8 flex flex-col">
                <div className="flex flex-row justify-center items-center gap-2">
                    <button onClick={() => changeMaterial('roughness', 0)} className="z-[90] px-4 py-2 bg-blue-600 text-neutral-200 rounded-xl">Smooth</button>
                    <button onClick={() => changeMaterial('roughness', 1)} className="z-[90] px-4 py-2 bg-blue-600 text-neutral-200 rounded-xl">Rough</button>
                </div>

                <div className="flex flex-row justify-center items-center gap-2">
                    <button onClick={() => changeScale([0.02, 0.02, 0.02])} className="z-[90] px-4 py-2 bg-blue-600 text-neutral-200 rounded-xl">Small</button>
                    <button onClick={() => changeScale([0.04, 0.04, 0.04])} className="z-[90] px-4 py-3 bg-blue-600 text-neutral-200 rounded-xl">Medium</button>
                    <button onClick={() => changeScale([0.06, 0.06, 0.06])} className="z-[90] px-6 py-4 bg-blue-600 text-neutral-200 rounded-xl">Large</button>
                </div>

                <div className="flex justify-center py-2 gap-2 rounded-lg bg-neutral-100">
                    <p className='text-2xl'>Price: ${price}</p>
                </div>
            </div>

            <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
                <Model color={modelColor} materialProps={materialProps} scale={scale} />
                <directionalLight intensity={0.2} position={[0, 2, 3]} />
                <Environment preset="city" />
                <OrbitControls />
            </Canvas>

            <HexColorPicker className="absolute bottom-10 left-10 z-50" color={modelColor} onChange={handleChangeColor} />
        </div>
    );
}
