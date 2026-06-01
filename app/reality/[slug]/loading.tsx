export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050515] flex flex-col items-center justify-center text-white">
      <p className="text-cyan-300 tracking-[0.4em] uppercase text-sm mb-4">
        AltVerse Engine
      </p>

      <h1 className="text-5xl font-black mb-6">
        Constructing Reality...
      </h1>

      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-cyan-400 animate-pulse w-2/3" />
      </div>

      <p className="mt-6 text-white/50">
        Analyzing divergence points...
      </p>
    </div>
  );
}