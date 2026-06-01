export default function FeaturedRealities() {
  const realities = [
    {
      title: "India Colonized Britain",
      desc: "A world where London answers to Delhi."
    },
    {
      title: "Rome Never Fell",
      desc: "The Roman Empire survives into the modern age."
    },
    {
      title: "AI Ruled Earth",
      desc: "Artificial intelligence became humanity's government."
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Featured Realities
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {realities.map((reality) => (
          <div
            key={reality.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-white">
              {reality.title}
            </h3>

            <p className="mt-3 text-gray-400">
              {reality.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}