import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMouseMove = (e) => {
      if (prefersReducedMotion) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div
        ref={containerRef}
        className="bg-effects"
        style={{
          background: 'linear-gradient(135deg, #fafaf8 0%, #f5f5f3 50%, #f0ebe7 100%)',
        }}
      />
    );
  }

  // Generate neural network nodes
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 30,
    delay: i * 0.3,
  }));

  return (
    <div ref={containerRef} className="bg-effects" style={{ overflow: 'hidden' }}>
      {/* Base gradient background */}
      <motion.div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'linear-gradient(135deg, #fafaf8 0%, #f5f5f3 50%, #f0ebe7 100%)',
          zIndex: -2,
        }}
      />

      {/* Vision-inspired primary orb (like a scanning eye) */}
      <motion.div
        style={{
          position: 'fixed',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, rgba(0, 168, 168, 0.25), rgba(0, 168, 168, 0.02))',
          filter: 'blur(100px)',
          top: '-100px',
          left: '-150px',
          zIndex: -1,
          pointerEvents: 'none',
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [0.95, 1.15, 0.95],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* AI neural network secondary orb */}
      <motion.div
        style={{
          position: 'fixed',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 60% 60%, rgba(0, 75, 135, 0.2), rgba(0, 75, 135, 0.01))',
          filter: 'blur(95px)',
          bottom: '-120px',
          right: '-100px',
          zIndex: -1,
          pointerEvents: 'none',
        }}
        animate={{
          x: [-100, 60, -100],
          y: [0, -80, 0],
          scale: [1.05, 0.85, 1.05],
          rotate: [-180, 0, -360],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* AR accent orb */}
      <motion.div
        style={{
          position: 'fixed',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 45% 45%, rgba(255, 195, 0, 0.12), rgba(255, 195, 0, 0.01))',
          filter: 'blur(85px)',
          top: '40%',
          right: '5%',
          zIndex: -1,
          pointerEvents: 'none',
        }}
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [0.9, 1.2, 0.9],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Neural Network Nodes - represents AI learning */}
      {nodes.map((node) => (
        <motion.div
          key={`node-${node.id}`}
          style={{
            position: 'fixed',
            width: `${node.size}px`,
            height: `${node.size}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(0, 168, 168, 0.15), rgba(0, 168, 168, 0.02))`,
            border: `1.5px solid rgba(0, 168, 168, ${0.15 - node.id * 0.01})`,
            boxShadow: `0 0 ${node.size / 2}px rgba(0, 168, 168, 0.1)`,
            zIndex: -1,
            pointerEvents: 'none',
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0.3, 0.7, 0.3],
            x: [0, Math.sin(node.id) * 60, 0],
            y: [0, Math.cos(node.id) * 60, 0],
          }}
          transition={{
            duration: 12 + node.id * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: node.delay,
          }}
        />
      ))}

      {/* SVG visualization layer - Vision + AI elements */}
      <svg
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
        }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="visionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 168, 168, 0.2)" />
            <stop offset="50%" stopColor="rgba(0, 75, 135, 0.15)" />
            <stop offset="100%" stopColor="rgba(255, 195, 0, 0.1)" />
          </linearGradient>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Scanning lines - Vision inspired */}
        <motion.g opacity="0.4">
          <motion.line
            x1="0"
            y1="0"
            x2="1200"
            y2="800"
            stroke="url(#visionGradient)"
            strokeWidth="1.5"
            animate={{
              y1: [-100, 900],
              y2: [700, 1600],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.g>

        {/* AR Corner scanning box */}
        <motion.g opacity="0.3">
          <motion.rect
            x="100"
            y="100"
            width="300"
            height="300"
            fill="none"
            stroke="url(#visionGradient)"
            strokeWidth="2"
            animate={{
              x: [50, 150, 50],
              y: [50, 150, 50],
              width: [300, 400, 300],
              height: [300, 400, 300],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.g>

        {/* Horizontal scan lines - like video scanning */}
        <motion.g strokeWidth="0.5" stroke="rgba(0, 168, 168, 0.1)">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.line
              key={`scan-${i}`}
              x1="0"
              y1={`${100 + i * 120}`}
              x2="1200"
              y2={`${100 + i * 120}`}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                x2: [1200, 0, 1200],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.g>

        {/* Neural network connecting lines */}
        <motion.g stroke="rgba(0, 168, 168, 0.08)" strokeWidth="1">
          {[0, 1, 2].map((i) => (
            <motion.path
              key={`network-${i}`}
              d={`M 100,${200 + i * 200} Q 300,${100 + i * 150} 600,${200 + i * 200} T 1100,${200 + i * 200}`}
              fill="none"
              animate={{
                strokeDashoffset: [0, 100],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + i * 1,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
              }}
              strokeDasharray="10,5"
            />
          ))}
        </motion.g>

        {/* Holographic circles - AR effect */}
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`holo-${i}`}
            cx="300"
            cy="400"
            r={`${80 + i * 40}`}
            fill="none"
            stroke={`rgba(0, 168, 168, ${0.15 - i * 0.03})`}
            strokeWidth="1"
            animate={{
              r: [80 + i * 40, 140 + i * 40, 80 + i * 40],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>

      {/* Mouse-reactive AR targeting reticle */}
      <motion.div
        style={{
          position: 'fixed',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '2px solid rgba(0, 168, 168, 0.15)',
          boxShadow: 'inset 0 0 20px rgba(0, 168, 168, 0.1)',
          pointerEvents: 'none',
          zIndex: -1,
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Corner AR markers */}
      {[
        { x: 30, y: 30 },
        { x: 1170, y: 30 },
        { x: 30, y: 770 },
        { x: 1170, y: 770 },
      ].map((pos, i) => (
        <motion.div
          key={`marker-${i}`}
          style={{
            position: 'fixed',
            width: '40px',
            height: '40px',
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            zIndex: -1,
            pointerEvents: 'none',
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M 0 0 L 15 0 L 15 15 L 0 15 Z"
              stroke="rgba(0, 168, 168, 0.3)"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
