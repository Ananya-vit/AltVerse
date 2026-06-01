"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Imagine",
    description:
      "Start with any 'What If?' scenario and let your imagination run wild.",
    icon: "✨",
  },
  {
    title: "Generate",
    description:
      "AI creates a complete alternate reality with timelines, cultures and leaders.",
    icon: "📖",
  },
  {
    title: "Explore",
    description:
      "Dive into events, stories and futures from a world that never existed.",
    icon: "🌙",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-5xl font-bold text-white">
          How AltVerse Works
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          Create entirely new worlds from a single idea.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />
              </div>

              <div className="text-5xl">
                {step.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}