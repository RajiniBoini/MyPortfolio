import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

/**
 * VisionARBackground - 3D animated background for Computer Vision / AI / AR portfolio
 * 
 * Tells the story: Camera → Vision Detection → Embeddings / VLM → System Intelligence
 */

// Floating bounding boxes - represents object detection
function BoundingBox({ position, size, delay }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    // Gentle floating motion
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + delay) * 0.3;
    meshRef.current.rotation.x = Math.sin(time * 0.3 + delay) * 0.1;
    meshRef.current.rotation.y = Math.cos(time * 0.4 + delay) * 0.1;
    
    // Pulse opacity
    const opacity = 0.15 + Math.sin(time * 0.8 + delay) * 0.1;
    meshRef.current.material.opacity = opacity;
  });

  return (
    <Box ref={meshRef} args={size} position={position}>
      <meshBasicMaterial 
        color="#00a8a8" 
        transparent 
        opacity={0.2} 
        wireframe 
      />
    </Box>
  );
}

// Neural network nodes - represents embeddings / VLM vectors
function NeuralNode({ position, delay }) {
  const sphereRef = useRef();
  
  useFrame((state) => {
    if (!sphereRef.current) return;
    
    const time = state.clock.getElapsedTime();
    // Subtle pulsing
    const scale = 1 + Math.sin(time * 1.2 + delay) * 0.2;
    sphereRef.current.scale.setScalar(scale);
    
    // Gentle drift
    sphereRef.current.position.x = position[0] + Math.sin(time * 0.4 + delay) * 0.2;
    sphereRef.current.position.z = position[2] + Math.cos(time * 0.5 + delay) * 0.2;
  });

  return (
    <Sphere ref={sphereRef} args={[0.05, 8, 8]} position={position}>
      <meshBasicMaterial color="#00a8a8" transparent opacity={0.5} />
    </Sphere>
  );
}

// Connection lines between nodes - neural pathways
function ConnectionLines({ nodes }) {
  const linesData = useMemo(() => {
    const connections = [];
    // Connect nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.hypot(
          nodes[i].position[0] - nodes[j].position[0],
          nodes[i].position[1] - nodes[j].position[1],
          nodes[i].position[2] - nodes[j].position[2]
        );
        
        // Only connect if close enough
        if (dist < 3) {
          connections.push({
            start: nodes[i].position,
            end: nodes[j].position,
            opacity: Math.max(0, 0.3 - dist * 0.1),
          });
        }
      }
    }
    return connections;
  }, [nodes]);

  return (
    <>
      {linesData.map((line, i) => (
        <Line
          key={i}
          points={[line.start, line.end]}
          color="#00a8a8"
          lineWidth={0.5}
          transparent
          opacity={line.opacity}
        />
      ))}
    </>
  );
}

// Scanning plane - represents vision inference pass
function ScanningPlane({ scanSpeed }) {
  const planeRef = useRef();
  
  useFrame((state) => {
    if (!planeRef.current) return;
    
    const time = state.clock.getElapsedTime();
    // Move scanning plane up and down
    planeRef.current.position.y = Math.sin(time * scanSpeed) * 3;
    
    // Pulse opacity
    const opacity = 0.1 + Math.abs(Math.sin(time * scanSpeed * 0.5)) * 0.05;
    planeRef.current.material.opacity = opacity;
  });

  return (
    <mesh ref={planeRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[20, 20, 1, 1]} />
      <meshBasicMaterial 
        color="#00a8a8" 
        transparent 
        opacity={0.1} 
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// AR Grid - spatial environment
function ARGrid({ gridOpacity }) {
  const gridRef = useRef();
  
  useFrame((state) => {
    if (!gridRef.current) return;
    
    const time = state.clock.getElapsedTime();
    // Subtle rotation
    gridRef.current.rotation.y = time * 0.05;
  });

  return (
    <group ref={gridRef}>
      <gridHelper 
        args={[20, 20, `rgba(0, 168, 168, ${gridOpacity})`, `rgba(0, 168, 168, ${gridOpacity * 0.3})`]} 
        position={[0, -2, 0]}
      />
    </group>
  );
}

// AR HUD Elements - crosshair and corner brackets
function ARHUDElements() {
  return (
    <group>
      {/* Corner brackets */}
      {[
        [-8, 4, -5],
        [8, 4, -5],
        [-8, -4, -5],
        [8, -4, -5],
      ].map((pos, i) => (
        <Line
          key={`bracket-${i}`}
          points={[
            [pos[0], pos[1], pos[2]],
            [pos[0] + (i % 2 === 0 ? 0.5 : -0.5), pos[1], pos[2]],
          ]}
          color="#ffc300"
          lineWidth={2}
          transparent
          opacity={0.4}
        />
      ))}
      
      {/* Center crosshair */}
      <Line
        points={[[-0.2, 0, -5], [0.2, 0, -5]]}
        color="#00a8a8"
        lineWidth={1}
        transparent
        opacity={0.3}
      />
      <Line
        points={[[0, -0.2, -5], [0, 0.2, -5]]}
        color="#00a8a8"
        lineWidth={1}
        transparent
        opacity={0.3}
      />
    </group>
  );
}

// Main scene
function Scene({ 
  intensity, 
  particleCount, 
  gridOpacity, 
  scanSpeed,
  parallaxStrength,
  prefersReducedMotion 
}) {
  const groupRef = useRef();

  // Generate bounding boxes
  const boundingBoxes = useMemo(() => {
    return Array.from({ length: Math.min(5, particleCount / 4) }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 6 - 3,
      ],
      size: [
        0.5 + Math.random() * 0.5,
        0.5 + Math.random() * 0.5,
        0.5 + Math.random() * 0.5,
      ],
      delay: i * 0.5,
    }));
  }, [particleCount]);

  // Generate neural nodes
  const neuralNodes = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 8 - 2,
      ],
      delay: i * 0.3,
    }));
  }, [particleCount]);

  // Parallax camera movement on mouse
  useFrame((state) => {
    if (!groupRef.current || prefersReducedMotion) return;
    
    const { mouse } = state;
    groupRef.current.rotation.y = mouse.x * parallaxStrength * 0.05;
    groupRef.current.rotation.x = -mouse.y * parallaxStrength * 0.05;
  });

  const effectiveIntensity = prefersReducedMotion ? intensity * 0.3 : intensity;

  return (
    <group ref={groupRef}>
      {/* AR Grid */}
      <ARGrid gridOpacity={gridOpacity * effectiveIntensity} />
      
      {/* Scanning plane */}
      <ScanningPlane scanSpeed={prefersReducedMotion ? scanSpeed * 0.3 : scanSpeed} />
      
      {/* Bounding boxes - object detection */}
      {boundingBoxes.map((box, i) => (
        <BoundingBox 
          key={`box-${i}`}
          position={box.position}
          size={box.size}
          delay={box.delay}
        />
      ))}
      
      {/* Neural nodes - embeddings */}
      {neuralNodes.map((node, i) => (
        <NeuralNode 
          key={`node-${i}`}
          position={node.position}
          delay={node.delay}
        />
      ))}
      
      {/* Connection lines */}
      <ConnectionLines nodes={neuralNodes} />
      
      {/* AR HUD elements */}
      <ARHUDElements />
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.3 * effectiveIntensity} />
      <pointLight position={[10, 10, 10]} intensity={0.2 * effectiveIntensity} />
    </group>
  );
}

/**
 * VisionARBackground Component
 * 
 * @param {number} intensity - Overall effect intensity (0-1, default: 0.7)
 * @param {number} particleCount - Number of neural nodes (default: 20)
 * @param {number} gridOpacity - Grid visibility (0-1, default: 0.3)
 * @param {number} scanSpeed - Scanning animation speed (default: 0.3)
 * @param {number} parallaxStrength - Mouse parallax intensity (default: 1)
 */
export default function VisionARBackground({
  intensity = 0.7,
  particleCount = 20,
  gridOpacity = 0.3,
  scanSpeed = 0.3,
  parallaxStrength = 1,
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'linear-gradient(135deg, #fafaf8 0%, #f5f5f3 50%, #f0ebe7 100%)',
      }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <Scene
          intensity={intensity}
          particleCount={particleCount}
          gridOpacity={gridOpacity}
          scanSpeed={scanSpeed}
          parallaxStrength={parallaxStrength}
          prefersReducedMotion={prefersReducedMotion}
        />
      </Canvas>
    </div>
  );
}
