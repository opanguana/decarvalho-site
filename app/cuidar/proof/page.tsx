import PageShell from "@/components/PageShell";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import { getPages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const pages = getPages();

export const metadata = buildMetadata({
  title: pages.cuidarProof.title,
  description: pages.cuidarProof.description,
  path: "/cuidar/proof"
});

export default function CuidarProofPage() {
  return (
    <PageShell>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">{pages.cuidarProof.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-700">{pages.cuidarProof.description}</p>
      </div>

      <div className="mt-12">
        {pages.cuidarProof.sections.map((s) => (
          <Section key={s.title} title={s.title}>
            <Prose>{s.body}</Prose>
          </Section>
        ))}
      </div>
    </PageShell>
  );
}
