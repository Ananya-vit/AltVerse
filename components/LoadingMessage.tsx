"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
  "Analyzing divergence point...",
  "Rewriting history...",
  "Calculating butterfly effects...",
  "Generating alternate leaders...",
  "Simulating geopolitical impact...",
  "Constructing timeline...",
  "Finalizing reality...",
];

export default function LoadingMessage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 h-8 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -10,
            filter: "blur(6px)",
          }}
          transition={{
            duration: 0.4,
          }}
          className="text-white/60 text-sm tracking-wide"
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}