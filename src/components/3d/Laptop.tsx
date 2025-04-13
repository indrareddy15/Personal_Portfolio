import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const Laptop = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 1.2, 0.1]} />
      <meshStandardMaterial color="#2563eb" />
    </mesh>
  );
};