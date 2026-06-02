"use client";

export default function RealityActions() {
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
    }
  };

  return (
  <div className="flex gap-2">
    <button
      onClick={handleShare}
      title="Share Reality"
      className="h-9 w-9 flex items-center justify-center rounded-full border border-cyan-400/20 bg-black/30 backdrop-blur-md text-cyan-300 hover:bg-cyan-400/20 transition-all duration-300"
    >
      🔗
    </button>

    <button
      onClick={handleSave}
      title="Save Reality"
      className="h-9 w-9 flex items-center justify-center rounded-full border border-yellow-400/20 bg-black/30 backdrop-blur-md text-yellow-300 hover:bg-yellow-400/20 transition-all duration-300"
    >
      ⭐
    </button>
  </div>
);
}