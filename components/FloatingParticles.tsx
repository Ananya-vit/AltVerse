"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  size: (i % 4) + 2,
  top: (i * 13) % 100,
  left: (i * 17) % 100,
}));

export default function FloatingParticles() {
  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="pointer-events-none absolute rounded-full bg-amber-200/20"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5 + (particle.id % 5),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}