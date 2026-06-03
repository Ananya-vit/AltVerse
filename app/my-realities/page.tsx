"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Reality = {
  title: string;
  url: string;
  savedAt: number;
};

export default function MyRealitiesPage() {
  const [realities, setRealities] = useState<Reality[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("savedRealities") || "[]"
    );

    setRealities(saved.reverse());
  }, []);

  const removeReality = (url: string) => {
    const updated = realities.filter(
      (reality) => reality.url !== url
    );

    setRealities(updated);

    localStorage.setItem(
      "savedRealities",
      JSON.stringify(updated)
    );
  };

  return (
    <main className="min-h-screen bg-[#050515] text-white px-6 py-32">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl md:text-7xl font-black text-center mb-4">
          My Realities
        </h1>

        <p className="text-center text-white/50 mb-16">
          {realities.length} Saved Realities
        </p>

        {realities.length === 0 ? (
          <div className="text-center text-white/40">
            <p>No saved realities yet.</p>
            <p className="mt-2">
              Generate a reality and click ⭐ Save.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {realities.map((reality) => (
              <div
                key={reality.url}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  hover:border-cyan-400/30
                  hover:-translate-y-1
                  transition-all
                "
              >
                <div className="flex justify-between items-start mb-4">

                  <div className="text-2xl">
                    🌍
                  </div>

                  <button
                    onClick={() => removeReality(reality.url)}
                    className="
                      text-red-400
                      hover:text-red-300
                      transition
                    "
                    title="Delete Reality"
                  >
                    🗑
                  </button>

                </div>

                <Link
                  href={reality.url.replace(
                    "https://alt-verse.vercel.app",
                    ""
                  )}
                >
                  <h2 className="text-2xl font-bold">
                    {reality.title}
                  </h2>

                  <p className="mt-4 text-sm text-white/40">
                    Saved{" "}
                    {new Date(
                      reality.savedAt
                    ).toLocaleDateString()}
                  </p>
                </Link>

              </div>
            ))}

          </div>
        )}

      </div>

    </main>
  );
}