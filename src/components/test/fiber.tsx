import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import { easing } from "maath";
const Scene = () => {
  const fbx = useLoader(FBXLoader, "Vinayagar.fbx");

  return <primitive object={fbx} scale={0.005} />;
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [1 + state.mouse.x / 8, 1.5 + state.mouse.y / 4, 2.5],
      0.2,
      delta,
    );
  });
}

const Fiber = () => {
  return (
    <div className="absolute">
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize={1024}
        />
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          {/* <planeBufferGeometry args={[10, 10, 1, 1]} /> */}
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
        <Scene />
        {/* <OrbitControls /> */}
        <Rig />
        {/* <Environment preset="sunset" background /> */}
      </Canvas>
    </div>
  );
};

export default Fiber;
