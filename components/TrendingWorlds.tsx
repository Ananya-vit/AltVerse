export default function TrendingWorlds() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-4xl font-bold">
          Explore Trending Realities
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            "Rome Never Fell",
            "AI Ruled Earth",
            "Martian Colony",
            "India Colonized Britain",
          ].map((world) => (
            <div
              key={world}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

              <div className="p-4">
                <h3 className="font-semibold">{world}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}