export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050515] overflow-hidden flex items-center justify-center relative">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]" />

      {/* Floating Stars */}
      <div className="absolute left-[20%] top-[25%] text-cyan-300/40 animate-pulse">
        ✦
      </div>

      <div className="absolute right-[18%] top-[30%] text-yellow-300/40 animate-pulse">
        ✦
      </div>

      <div className="absolute left-[70%] bottom-[25%] text-purple-300/40 animate-pulse">
        ✦
      </div>

      <div className="text-center z-10 px-6">

        {/* Orb */}
        <div className="relative mx-auto mb-10 h-28 w-28">

          <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-spin" />

          <div
            className="absolute inset-3 rounded-full border border-purple-400/20 animate-spin"
            style={{
              animationDirection: "reverse",
              animationDuration: "8s",
            }}
          />

          <div className="absolute inset-6 rounded-full bg-cyan-400/20 blur-xl reality-pulse" />

        </div>

        <p className="text-cyan-300 tracking-[0.35em] uppercase text-xs mb-4">
          AltVerse Engine
        </p>

        <h1 className="text-5xl md:text-7xl font-black text-white">
          Constructing Reality
        </h1>

        <p className="mt-6 text-white/50 max-w-xl mx-auto">
          Calculating divergence points, rewriting history,
          and generating a new timeline...
        </p>

        {/* Progress Bar */}
        <div className="mt-10 w-80 max-w-full mx-auto h-2 rounded-full bg-white/10 overflow-hidden">

          <div className="h-full w-1/2 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse" />

        </div>

      </div>
    </div>
  );
}