import Link from "next/link";
import { getPages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const pages = getPages();

export const metadata = buildMetadata({
  title: pages.about.title,
  description: pages.about.description,
  path: "/about"
});

export default function AboutPage() {
  const { hero, sections } = pages.about;

  return (
    <main className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(78%_110%_at_88%_50%,rgba(92,58,30,0.24)_0%,rgba(58,37,20,0.12)_40%,rgba(26,18,12,0)_72%),linear-gradient(104deg,#062C26_0%,#0C3F34_48%,#062C26_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-8 md:py-20">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wide text-white/75">{hero.eyebrow}</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">{hero.headline}</h1>
          <p className="mt-4 text-base leading-relaxed text-white/85">{hero.subheadline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062C26]"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/45 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062C26]"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="mt-14 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-2xl font-semibold tracking-tight text-white">{s.title}</h2>
              <div className="mt-3 max-w-3xl text-base leading-relaxed text-white/85">{s.body}</div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
