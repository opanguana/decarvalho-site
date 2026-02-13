import Link from "next/link";
import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import { getPages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const pages = getPages();

export const metadata = buildMetadata({
  title: pages.home.title,
  description: pages.home.description,
  path: "/"
});

export default function HomePage() {
  const { hero, sections } = pages.home;

  return (
    <PageShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{hero.eyebrow}</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">{hero.headline}</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-700">{hero.subheadline}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="mt-12">
        {sections.map((s) => (
          <Section key={s.title} title={s.title}>
            <Prose>{s.body}</Prose>
          </Section>
        ))}
      </div>
    </PageShell>
  );
}
