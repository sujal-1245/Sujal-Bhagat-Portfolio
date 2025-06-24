import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

const ModelWrapper = ({ scene }) => {
  const { size } = useThree();

  const { scaledScene, center } = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const sizeVec = new THREE.Vector3();
    box.getSize(sizeVec);

    const maxDimension = Math.max(sizeVec.x, sizeVec.y, sizeVec.z);
    const scale = 1.2 / maxDimension; // 👈 scale model to fit ~1.2 units
    const center = box.getCenter(new THREE.Vector3());

    const scaledScene = scene.clone();
    scaledScene.position.sub(center); // center the model
    scaledScene.scale.setScalar(scale); // scale uniformly

    return { scaledScene, center };
  }, [scene]);

  return <primitive object={scaledScene} />;
};

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [scene]);

  return (
    <div className="w-full h-full">
      <Canvas
        className="!w-full !h-full"
        camera={{ position: [0, 0, 2.8], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Environment preset="city" />
        <Float speed={4.5} rotationIntensity={0.6} floatIntensity={1.1}>
          <ModelWrapper scene={scene.scene} />
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
};

export default TechIconCardExperience;
