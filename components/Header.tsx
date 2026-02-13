"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavigation, getSite } from "@/lib/content";

export default function Header() {
  const nav = getNavigation();
  const site = getSite();
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <header className="pointer-events-none absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 pt-4 sm:px-8 sm:pt-6">
          <Link
            href="/"
            className="pointer-events-auto rounded-sm border border-white/10 bg-[#17392f]/80 px-3 py-3 text-[15px] font-semibold leading-[1.1] tracking-tight text-white backdrop-blur-sm"
            aria-label={`${site.orgName} home`}
          >
            <span className="block">De</span>
            <span className="block">Carvalho</span>
          </Link>

          <nav
            aria-label="Primary"
            className="pointer-events-auto hidden items-center rounded-2xl border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md md:flex"
          >
            <Link href="/about" className="px-3 py-1.5 text-sm text-white/95 hover:text-white">
              About <span aria-hidden="true">⌄</span>
            </Link>
            <Link href="/track-record" className="px-3 py-1.5 text-sm text-white/95 hover:text-white">
              Events <span aria-hidden="true">⌄</span>
            </Link>
            <Link href="/contact" className="px-3 py-1.5 text-sm text-white/95 hover:text-white">
              Donate <span aria-hidden="true">⌄</span>
            </Link>
          </nav>

          <div className="pointer-events-auto hidden items-center gap-6 md:flex">
            <Link href="/contact" className="text-sm text-white/95 hover:text-white">
              Ask for Help
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
            >
              Contact us
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="pointer-events-auto inline-flex h-11 items-center rounded-full border border-white/25 bg-black/30 px-4 text-sm font-medium text-white backdrop-blur-md md:hidden"
          >
            Menu
          </button>
        </div>
      </header>
    );
  }

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
