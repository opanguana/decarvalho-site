"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavigation, getSite } from "@/lib/content";

export default function Header() {
  const nav = getNavigation();
  const site = getSite();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const primaryByLabel = new Map(nav.primary.map((item) => [item.label, item.href]));
  const aboutHref = primaryByLabel.get("About") ?? "/about";
  const governanceHref = primaryByLabel.get("Governance") ?? "/governance";
  const trackRecordHref = primaryByLabel.get("Track Record") ?? "/track-record";
  const eventsHref = trackRecordHref;
  const donateHref = primaryByLabel.get("Contact") ?? "/contact";
  const askHelpHref = donateHref;

  const desktopNavLinkClass = "px-3 py-1.5 text-sm text-white/95 hover:text-white";
  const mobileNavLinkClass = "block rounded-lg px-3 py-2 text-sm text-white/95 hover:bg-white/10 hover:text-white";

  const renderDesktopNav = () => (
    <nav
      aria-label="Primary"
      className="pointer-events-auto hidden items-center rounded-2xl border border-white/10 bg-black/30 px-4 py-2 font-semibold backdrop-blur-md md:flex"
    >
      <Link href={aboutHref} className={desktopNavLinkClass}>
        About <span aria-hidden="true">⌄</span>
      </Link>

      <details className="group relative">
        <summary
          className={`${desktopNavLinkClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
          aria-label="Our Companies menu"
        >
          Our Companies <span aria-hidden="true">⌄</span>
        </summary>
        <div className="absolute left-0 top-full z-40 mt-2 min-w-44 rounded-xl border border-white/10 bg-black/40 p-1.5 backdrop-blur-md">
          {nav.companies.map((item) => (
            <Link key={item.href} href={item.href} className={mobileNavLinkClass}>
              {item.label}
            </Link>
          ))}
        </div>
      </details>

      <Link href={governanceHref} className={desktopNavLinkClass}>
        Governance
      </Link>
      <Link href={trackRecordHref} className={desktopNavLinkClass}>
        Track Record
      </Link>
      <Link href={eventsHref} className={desktopNavLinkClass}>
        Events <span aria-hidden="true">⌄</span>
      </Link>
      <Link href={donateHref} className={desktopNavLinkClass}>
        Donate <span aria-hidden="true">⌄</span>
      </Link>
    </nav>
  );

  const renderDesktopActions = () => (
    <div className="pointer-events-auto hidden items-center gap-6 md:flex">
      <Link href={askHelpHref} className="text-sm text-white/95 hover:text-white">
        Ask for Help
      </Link>
      <Link
        href={donateHref}
        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
      >
        Contact us
      </Link>
    </div>
  );

  const renderMobileMenu = () => (
    <details className="pointer-events-auto relative md:hidden">
      <summary
        className="inline-flex h-11 cursor-pointer items-center rounded-full border border-white/25 bg-black/30 px-4 text-sm font-medium text-white backdrop-blur-md [&::-webkit-details-marker]:hidden"
        aria-label="Open menu"
      >
        Menu
      </summary>
      <div className="absolute right-0 top-full z-40 mt-2 w-72 rounded-2xl border border-white/10 bg-black/60 p-3 backdrop-blur-md">
        <Link href={aboutHref} className={mobileNavLinkClass}>
          About
        </Link>
        <details className="mt-1">
          <summary
            className={`${mobileNavLinkClass} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
            aria-label="Our Companies submenu"
          >
            Our Companies <span aria-hidden="true">⌄</span>
          </summary>
          <div className="mt-1 ml-2 space-y-1 border-l border-white/10 pl-2">
            {nav.companies.map((item) => (
              <Link key={`mobile-${item.href}`} href={item.href} className={mobileNavLinkClass}>
                {item.label}
              </Link>
            ))}
          </div>
        </details>
        <Link href={governanceHref} className={`${mobileNavLinkClass} mt-1`}>
          Governance
        </Link>
        <Link href={trackRecordHref} className={`${mobileNavLinkClass} mt-1`}>
          Track Record
        </Link>
        <Link href={eventsHref} className={`${mobileNavLinkClass} mt-1`}>
          Events
        </Link>
        <Link href={donateHref} className={`${mobileNavLinkClass} mt-1`}>
          Donate
        </Link>
        <div className="mt-2 border-t border-white/10 pt-2">
          <Link href={askHelpHref} className={mobileNavLinkClass}>
            Ask for Help
          </Link>
          <Link href={donateHref} className={`${mobileNavLinkClass} mt-1 bg-white text-zinc-900 hover:bg-zinc-100`}>
            Contact us
          </Link>
        </div>
      </div>
    </details>
  );

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
          {renderDesktopNav()}
          {renderDesktopActions()}
          {renderMobileMenu()}
        </div>
      </header>
    );
  }

  return (
    <header className="relative inset-x-0 top-0 z-30 bg-transparent">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 pt-4 sm:px-8 sm:pt-6">
        <Link
          href="/"
          className="pointer-events-auto rounded-sm border border-white/10 bg-[#17392f]/80 px-3 py-3 text-[15px] font-semibold leading-[1.1] tracking-tight text-white backdrop-blur-sm"
          aria-label={`${site.orgName} home`}
        >
          <span className="block">De</span>
          <span className="block">Carvalho</span>
        </Link>
        {renderDesktopNav()}
        {renderDesktopActions()}
        {renderMobileMenu()}
      </div>
    </header>
  );
}
