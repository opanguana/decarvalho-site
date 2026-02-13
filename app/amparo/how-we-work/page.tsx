import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import { getPages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const pages = getPages();

export const metadata = buildMetadata({
  title: pages.amparoHow.title,
  description: pages.amparoHow.description,
  path: "/amparo/how-we-work"
});

export default function AmparoHowWeWorkPage() {
  return (
    <PageShell>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">{pages.amparoHow.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-700">{pages.amparoHow.description}</p>
      </div>

      <div className="mt-12">
        {pages.amparoHow.sections.map((s) => (
          <Section key={s.title} title={s.title}>
            <Prose>{s.body}</Prose>
          </Section>
        ))}
      </div>
    </PageShell>
  );
}
