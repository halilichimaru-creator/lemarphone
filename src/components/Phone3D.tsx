import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, PresentationControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '../hooks/useIsMobile';

const PhoneModel = () => {
    const group = useRef<THREE.Group>(null);

    // Simple geometric representation of a phone since we don't have a GLTF model readily available
    // In a real scenario, we would use useGLTF('/phone.gltf')
    return (
        <group ref={group} dispose={null}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Phone Body */}
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[3.2, 6.5, 0.4]} />
                    <meshStandardMaterial color="#1c1c1e" roughness={0.1} metalness={0.8} />
                </mesh>

                {/* Screen */}
                <mesh position={[0, 0, 0.21]}>
                    <planeGeometry args={[3, 6.3]} />
                    <meshStandardMaterial color="#000000" emissive="#ffffff" emissiveIntensity={0.05} roughness={0} />
                </mesh>

                {/* Camera Module */}
                <mesh position={[0.8, 2.5, -0.21]}>
                    <boxGeometry args={[1.2, 1.2, 0.1]} />
                    <meshStandardMaterial color="#2c2c2e" roughness={0.2} metalness={0.9} />
                </mesh>

                {/* Lenses */}
                <mesh position={[0.5, 2.8, -0.26]}>
                    <circleGeometry args={[0.25, 32]} />
                    <meshStandardMaterial color="#050505" roughness={0} metalness={1} />
                </mesh>
                <mesh position={[1.1, 2.8, -0.26]}>
                    <circleGeometry args={[0.25, 32]} />
                    <meshStandardMaterial color="#050505" roughness={0} metalness={1} />
                </mesh>
                <mesh position={[0.8, 2.2, -0.26]}>
                    <circleGeometry args={[0.25, 32]} />
                    <meshStandardMaterial color="#050505" roughness={0} metalness={1} />
                </mesh>
            </Float>
        </group>
    );
};

const Phone3D = () => {
    const isMobile = useIsMobile();
    
    // Sur mobile, afficher une image statique au lieu du modèle 3D
    if (isMobile) {
        return (
            <div className="w-full h-[600px] relative z-10 flex items-center justify-center">
                <img
                    src="/iphone-hero.png"
                    alt="iPhone"
                    className="w-full h-full object-contain"
                />
            </div>
        );
    }
    
    return (
        <div className="w-full h-[600px] relative z-10 cursor-grab active:cursor-grabbing">
            <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 1.5]}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={1024} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={1} />

                <Suspense fallback={null}>
                    <PresentationControls
                        global
                        snap
                        rotation={[0, 0.3, 0]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                    >
                        <PhoneModel />
                    </PresentationControls>
                    <Environment preset="city" />
                    <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.5} far={4.5} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Phone3D;
