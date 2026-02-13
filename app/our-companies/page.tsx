import PageShell from "@/components/PageShell";
import DecisionCard from "@/components/DecisionCard";
import { getCompanies, getPages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const pages = getPages();
const companies = getCompanies();

export const metadata = buildMetadata({
  title: pages.ourCompanies.title,
  description: pages.ourCompanies.description,
  path: "/our-companies"
});

export default function OurCompaniesPage() {
  const { hero } = pages.ourCompanies;

  return (
    <PageShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{hero.eyebrow}</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">{hero.headline}</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-700">{hero.subheadline}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <DecisionCard
          title={companies.amparo.name}
          description={companies.amparo.shortDescription}
          audience={companies.amparo.audience}
          whenToChoose={companies.amparo.whenToChoose}
          href="/amparo"
        />
        <DecisionCard
          title={companies.cuidar.name}
          description={companies.cuidar.shortDescription}
          audience={companies.cuidar.audience}
          whenToChoose={companies.cuidar.whenToChoose}
          href="/cuidar"
        />
      </div>
    </PageShell>
  );
}
