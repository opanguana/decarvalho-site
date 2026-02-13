import PageShell from "@/components/PageShell";
import HubSpotForm from "@/components/HubSpotForm";
import { getPages, getSite } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const pages = getPages();
const site = getSite();

export const metadata = buildMetadata({
  title: pages.contact.title,
  description: pages.contact.description,
  path: "/contact"
});

export default function ContactPage() {
  const { hero } = pages.contact;

  return (
    <PageShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{hero.eyebrow}</div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">{hero.headline}</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-700">{hero.subheadline}</p>

        <div className="mt-6 text-sm text-zinc-700">
          <div><span className="font-medium text-zinc-900">Email:</span> {site.contact.email}</div>
          <div className="mt-1"><span className="font-medium text-zinc-900">Phone:</span> {site.contact.phone}</div>
        </div>

        <HubSpotForm />
      </div>
    </PageShell>
  );
}
