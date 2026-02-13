import Link from "next/link";
import { getNavigation, getSite } from "@/lib/content";

export default function Footer() {
  const nav = getNavigation();
  const site = getSite();

  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white">
      <div className="container mx-auto py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-zinc-900">{site.orgName}</div>
            <p className="mt-2 text-sm text-zinc-700">{site.tagline}</p>
            <p className="mt-4 text-xs text-zinc-500">{site.contact.address} · {site.contact.email}</p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Pages</div>
            <ul className="mt-3 space-y-2">
              {nav.primary.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-zinc-700 hover:text-zinc-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Companies</div>
            <ul className="mt-3 space-y-2">
              {nav.companies.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-zinc-700 hover:text-zinc-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} {site.orgName}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
