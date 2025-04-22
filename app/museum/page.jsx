"use client";
import { useEffect, useCallback, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { Model } from "./Explore";
import WelcomeScreen from "./components/WelcomeScreen";
import Item from "./components/Item";
import { data } from "./data";

function CameraDebugger() {
  const { camera } = useThree();
  const dir = new THREE.Vector3();

  useFrame(() => {
    const pos = camera.position;
    camera.getWorldDirection(dir);
    const lookAt = pos.clone().add(dir);

    console.log({
      position: [pos.x, pos.y, pos.z].map((n) => +n.toFixed(2)),
      lookAt: [lookAt.x, lookAt.y, lookAt.z].map((n) => +n.toFixed(2)),
    });
  });

  return null;
}

function SceneBridge({ cameraRef }) {
  const { camera } = useThree();
  cameraRef.current = camera;
  return null;
}

function CameraController({ cameraRef, targetPosition, targetLookAt, shouldLerp }) {
  useFrame(() => {
    const cam = cameraRef.current;
    if (cam && shouldLerp.current) {
      cam.position.lerp(targetPosition.current, 0.1);
      cam.lookAt(targetLookAt.current);

      // Stop lerping when close enough
      if (cam.position.distanceTo(targetPosition.current) < 0.01) {
        shouldLerp.current = false;
      }
    }
  });
  return null;
}

export default function Mtest() {
  const [spinning, setSpinning] = useState(true);
  const [sessionStart, setSessionStart] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);
  const [cameraOpts] = useState({
    position: [3.73, 1.67, -4.46],
    fov: 50,
  });

  const cameraRef = useRef();
  const targetPosition = useRef(new THREE.Vector3(...cameraOpts.position));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const shouldLerp = useRef(false);

  const handleKeyDown = useCallback((event) => {
    if (cameraRef.current) {
      const moveAmount = 0.1;
      if (event.key === "ArrowUp") {
        targetPosition.current.y += moveAmount;
      } else if (event.key === "ArrowDown") {
        targetPosition.current.y -= moveAmount;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const stopAndReposition = (useSmooth = false) => {
    setSpinning(false);
    const newPos = data[workIndex].pos;
    const newLookAt = data[workIndex].lookAt;

    targetPosition.current.set(...newPos);
    targetLookAt.current.set(...newLookAt);

    if (cameraRef.current && !useSmooth) {
      cameraRef.current.position.set(...newPos);
      cameraRef.current.lookAt(...newLookAt);
    }

    shouldLerp.current = useSmooth;
  };

  const enterMuseum = () => {
    setSessionStart(true);
    stopAndReposition(false); // no lerp on first enter
  };

  const nextWork = () => {
    setWorkIndex((prev) => {
      const val = prev + 1;
      return val < data.length ? val : 0;
    });
  };

  useEffect(() => {
    stopAndReposition(true); // only animate when index changes
  }, [workIndex]);

  return (
    <main className="h-screen flex justify-center items-center relative">
      {sessionStart ? (
        <Item nextWork={nextWork} workIndex={workIndex} />
      ) : (
        <WelcomeScreen start={enterMuseum} />
      )}

      <div className="h-full w-full">
        <Canvas camera={cameraOpts}>
          <SceneBridge cameraRef={cameraRef} />
          <CameraController
            cameraRef={cameraRef}
            targetPosition={targetPosition}
            targetLookAt={targetLookAt}
            shouldLerp={shouldLerp}
          />
          {/* <CameraDebugger /> */}
          {/* <Stats /> */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 10]} intensity={1} />
          <Model />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </main>
  );
}
