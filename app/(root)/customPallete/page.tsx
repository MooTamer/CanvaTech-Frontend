"use client";
import Image from "next/image";
// import styles from './global'
import React, { useRef, useState } from "react";

// import Scene from "../components/Scene"
import dynamic from "next/dynamic";

export default function Home() {
  const Scene = dynamic(() => import("../../../components/custom/Scene"), {
    ssr: false,
  });

  return (
    <div className="container">
      <Scene />
    </div>
  );
}
