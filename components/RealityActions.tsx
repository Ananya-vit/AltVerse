"use client";

import { useEffect, useState } from "react";

export default function RealityActions() {
const [saved, setSaved] = useState(false);

useEffect(() => {
const existing = JSON.parse(
localStorage.getItem("savedRealities") || "[]"
);


const alreadyExists = existing.some(
  (item: any) => item.url === window.location.href
);

setSaved(alreadyExists);


}, []);

const handleShare = async () => {
try {
await navigator.clipboard.writeText(window.location.href);
} catch (error) {
console.error(error);
}
};

const handleSave = () => {
const existing = JSON.parse(
localStorage.getItem("savedRealities") || "[]"
);


const current = {
  title: document.title,
  url: window.location.href,
  savedAt: Date.now(),
};

const alreadyExists = existing.some(
  (item: any) => item.url === current.url
);

if (!alreadyExists) {
  existing.push(current);

  localStorage.setItem(
    "savedRealities",
    JSON.stringify(existing)
  );

  setSaved(true);
}


};

return ( <div className="flex gap-2"> <button
     onClick={handleShare}
     title="Share Reality"
     className="h-9 w-9 flex items-center justify-center rounded-full border border-cyan-400/20 bg-black/30 backdrop-blur-md text-cyan-300 hover:bg-cyan-400/20 transition-all duration-300"
   >
🔗 </button>


  <button
    onClick={handleSave}
    disabled={saved}
    title={saved ? "Saved" : "Save Reality"}
    className={`h-9 w-9 flex items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
      saved
        ? "border-green-400/20 bg-green-400/10 text-green-300"
        : "border-yellow-400/20 bg-black/30 text-yellow-300 hover:bg-yellow-400/20"
    }`}
  >
    {saved ? "✓" : "⭐"}
  </button>
</div>


);
}
