import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import { getPages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const pages = getPages();

export const metadata = buildMetadata({
  title: pages.cuidarWho.title,
  description: pages.cuidarWho.description,
  path: "/cuidar/who-its-for"
});

export default function CuidarWhoItsForPage() {
  return (
    <PageShell>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">{pages.cuidarWho.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-700">{pages.cuidarWho.description}</p>
      </div>

      <div className="mt-12">
        {pages.cuidarWho.sections.map((s) => (
          <Section key={s.title} title={s.title}>
            <Prose>{s.body}</Prose>
          </Section>
        ))}
      </div>
    </PageShell>
  );
}
