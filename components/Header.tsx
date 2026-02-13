import Link from "next/link";
import { getNavigation, getSite } from "@/lib/content";

export default function Header() {
  const nav = getNavigation();
  const site = getSite();

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight text-zinc-900">
          {site.orgName}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.primary.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-700 hover:text-zinc-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden text-xs text-zinc-500">Menu via footer links</div>
      </div>
    </header>
  );
}
