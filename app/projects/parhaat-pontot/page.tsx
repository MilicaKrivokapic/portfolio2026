import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parhaat Pöntöt - Best Seats",
  description: "A playful web project celebrating the best toilet seats in Finland.",
};

export default function ParhaatPontot() {
  return (
    <div className="px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-white to-neutral-100 dark:from-[#161617] dark:to-[#0F0F10] shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/5 dark:ring-white/5 p-10 md:p-20">
        <section className="py-6 md:py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Parhaat Pöntöt - Best Seats</h1>
          
          {/* Content coming soon */}
          
        </section>
      </div>
    </div>
  );
}
