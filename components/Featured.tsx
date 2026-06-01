const realities = [
  {
    title: "India Colonized Britain",
    volume: "Volume XVII",
  },
  {
    title: "Rome Never Fell",
    volume: "Volume IX",
  },
  {
    title: "Dinosaurs Rule Earth",
    volume: "Volume XXII",
  },
];

export default function Featured() {
  return (
    <section className="px-6 py-24">
      <h2 className="mb-12 font-[family:var(--font-cinzel)] text-5xl">
        Forbidden Histories
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {realities.map((book) => (
          <div
            key={book.title}
            className="
              rounded-2xl
              border
              border-amber-800/30
              bg-[#1A1625]
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(200,169,107,0.2)]
            "
          >
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
              Forbidden History
            </p>

            <h3 className="mt-4 text-2xl font-bold text-[#E6D3A3]">
              {book.title}
            </h3>

            <p className="mt-4 text-[#8B7355]">
              {book.volume}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}