import Image from "next/image";
import Reveal from "@/components/Reveal";
const realityData = {
  "india-colonized-britain": {
    overview:
      "In this alternate timeline...",

    timeline: [
      {
        year: "1757",
        event: "Battle of Plassey changes history forever",
      },
    ],

    headlines: [
      {
        source: "Delhi Times",
        headline: "British Provinces Demand Autonomy",
      },
    ],
  },

  "rome-never-fell": {
    overview:
      "The Roman Empire survives and expands...",

    timeline: [
      {
        year: "476",
        event: "Rome avoids collapse",
      },
    ],
  },
};
export default async function RealityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
    const reality =
  realityData[slug as keyof typeof realityData];
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const timeline = [
    {
      year: "1757",
      event: "Battle of Plassey changes history forever",
    },
    {
      year: "1804",
      event: "Indian fleets dominate European waters",
    },
    {
      year: "1842",
      event: "London becomes a major colonial trade hub",
    },
    {
      year: "1901",
      event: "Hindi becomes Britain's second official language",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050515] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center">

        <Image
          src="/hero-world.png"
          alt="Reality Background"
          fill
          priority
          className="object-cover blur-[8px] opacity-30 scale-110"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">

          <div className="mb-6 inline-flex rounded-full border border-yellow-300/20 bg-yellow-300/10 px-5 py-2 text-xs tracking-[0.3em] uppercase text-yellow-200">
            Alternate History
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-[0.15em]">
            {title}
            <div className="mt-8 flex justify-center gap-3 flex-wrap">

  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-200 text-sm">
    Timeline Divergence 88%
  </span>

  <span className="rounded-full border border-yellow-300/20 bg-yellow-300/10 px-4 py-2 text-yellow-200 text-sm">
    Historical Plausibility
  </span>

  <span className="rounded-full border border-purple-300/20 bg-purple-300/10 px-4 py-2 text-purple-200 text-sm">
    AltVerse Dossier #001
  </span>

</div>
          </h1>

          <p className="mt-6 text-xl text-white/60">
            Reality #001
          </p>

          <p className="mt-4 max-w-2xl mx-auto text-white/50">
            A world where history took a completely different path.
          </p>

        </div>
      </section>
    <Reveal>
      {/* OVERVIEW */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Reality Overview
          </h2>

         <p>
  {reality?.overview}
</p>

        </div>

      </section>
        </Reveal>
        <Reveal>
      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-16">
          Timeline
        </h2>

        <div className="relative">

          <div className="absolute left-6 top-0 h-full w-px bg-white/10" />

          <div className="space-y-12">

           {reality?.timeline.map((item) => (
              <div
                key={item.year}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">

                  <span className="text-cyan-300 text-sm tracking-widest">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold">
                    {item.event}
                  </h3>

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>
            </Reveal>
            <Reveal>
      {/* HEADLINES */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-16">
    Alternate Headlines
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-white/20 transition-all">
      <p className="text-xs tracking-[0.3em] text-yellow-300 uppercase mb-4">
        The Delhi Times
      </p>

      <h3 className="text-2xl font-bold leading-tight">
        British Provinces Demand Greater Autonomy
      </h3>

      <p className="mt-4 text-white/50">
        March 12, 1898
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-white/20 transition-all">
      <p className="text-xs tracking-[0.3em] text-cyan-300 uppercase mb-4">
        London Herald
      </p>

      <h3 className="text-2xl font-bold leading-tight">
        New Governor Arrives From Calcutta
      </h3>

      <p className="mt-4 text-white/50">
        July 8, 1902
      </p>
    </div>

  </div>

</section>
</Reveal>
<Reveal>
<div className="max-w-5xl mx-auto py-4">
  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
</div>{/* WORLD IMPACT */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-16">
    World Impact
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-xl font-bold mb-3">🏛 Politics</h3>
      <p className="text-white/60">
        Global power shifts toward Asia.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-xl font-bold mb-3">🌍 Culture</h3>
      <p className="text-white/60">
        Indian traditions spread across Europe.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-xl font-bold mb-3">⚙ Technology</h3>
      <p className="text-white/60">
        Innovation hubs emerge in Delhi and London.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-xl font-bold mb-3">⚔ Military</h3>
      <p className="text-white/60">
        Colonial armies are reorganized globally.
      </p>
    </div>

  </div>

</section>
</Reveal>
<div className="max-w-5xl mx-auto py-4">
  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
</div>
<Reveal>
{/* REALITY ANALYSIS */}
<section className="max-w-4xl mx-auto px-6 py-20">

  <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10">

    <h2 className="text-3xl font-bold mb-8 text-center">
      Reality Analysis
    </h2>

    <div className="space-y-6">

      <div>
        <div className="flex justify-between mb-2">
          <span>Historical Plausibility</span>
          <span>68%</span>
        </div>

        <div className="h-3 rounded-full bg-white/10">
          <div className="h-3 w-[68%] rounded-full bg-cyan-400" />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span>Global Impact</span>
          <span>95%</span>
        </div>

        <div className="h-3 rounded-full bg-white/10">
          <div className="h-3 w-[95%] rounded-full bg-yellow-400" />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <span>Timeline Divergence</span>
          <span>88%</span>
        </div>

        <div className="h-3 rounded-full bg-white/10">
          <div className="h-3 w-[88%] rounded-full bg-purple-400" />
        </div>
      </div>

    </div>

  </div>

</section>
</Reveal>
<div className="max-w-5xl mx-auto py-4">
  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
</div>
<Reveal>
{/* KEY FIGURES */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold text-center mb-16">
    Key Figures
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center hover:border-yellow-300/20 transition-all">

      <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border border-white/10" />

      <h3 className="text-2xl font-bold">
        Emperor Arjun I
      </h3>

      <p className="mt-2 text-yellow-300 text-sm uppercase tracking-widest">
        Supreme Ruler
      </p>

      <p className="mt-4 text-white/60">
        Expanded Indian influence across Europe and established new trade routes.
      </p>

    </div>

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center hover:border-cyan-300/20 transition-all">

      <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-white/10" />

      <h3 className="text-2xl font-bold">
        William Hastings
      </h3>

      <p className="mt-2 text-cyan-300 text-sm uppercase tracking-widest">
        Governor of Britain
      </p>

      <p className="mt-4 text-white/60">
        Led administrative reforms that integrated Britain into the Empire.
      </p>

    </div>

    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 text-center hover:border-purple-300/20 transition-all">

      <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-500/20 border border-white/10" />

      <h3 className="text-2xl font-bold">
        Raj Malhotra
      </h3>

      <p className="mt-2 text-purple-300 text-sm uppercase tracking-widest">
        Grand Admiral
      </p>

      <p className="mt-4 text-white/60">
        Commanded the fleet that secured dominance over European waters.
      </p>

    </div>

  </div>

</section>
</Reveal>

    </main>
  );
}