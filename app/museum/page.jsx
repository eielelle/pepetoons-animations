"use client";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  CameraControls,
  FirstPersonControls,
  KeyboardControls,
  OrbitControls,
  PerspectiveCamera,
  Stats,
  Text,
} from "@react-three/drei";
import { Model } from "./Main";
import { useMemo, useState } from "react";
import Title from "./sections/Title";

function CameraDebugger() {
  const { camera } = useThree();
  const [position, setPosition] = useState(camera.position.toArray());

  useFrame(() => {
    console.log(camera.position.toArray().map((n) => n.toFixed(2)));
  });

  return <></>;
}

export default function Museum() {
  const [pos, setPos] = useState([3.73, 1.67, -4.46])
  const [opts, setOpts] = useState({
    position: [3.73, 1.67, -4.46],
    fov: 50
  })

  return (
    <main className="h-screen flex justify-center items-center">
      {/* <Title setPos={setOpts} /> */}
      <div className="h-full w-full">
        <Canvas camera={opts}>
          <CameraDebugger />
          <Stats />
          <ambientLight intensity={0.5} />

          <directionalLight position={[5, 5, 10]} intensity={1} />
          <Model />
          <OrbitControls />
        </Canvas>
      </div>
    </main>
  );
}
