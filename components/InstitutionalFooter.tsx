import Link from "next/link";

const followLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "Our Companies", href: "/our-companies" },
  { label: "Governance", href: "/governance" },
  { label: "Track Record", href: "/track-record" },
  { label: "Contact", href: "/contact" },
  { label: "News", href: "#" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Sitemap", href: "#" },
];

export default function InstitutionalFooter() {
  return (
    <footer className="mt-16 bg-[#F2D22E] text-black" aria-label="Site footer">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-16">
        <div className="shrink-0">
          <p className="text-5xl font-black leading-[0.88] tracking-tight">De</p>
          <p className="text-5xl font-black leading-[0.88] tracking-tight">Carvalho</p>
        </div>

        <div className="max-w-xs shrink-0">
          <p className="text-sm leading-relaxed">1615 Example Street, City, Country</p>
          <div className="mt-4 flex gap-3">
            <a
              href="mailto:info@decarvalho.com"
              className="inline-flex min-h-11 items-center justify-center border border-black bg-black px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-zinc-800"
            >
              Email
            </a>
            <a
              href="tel:+258000000000"
              className="inline-flex min-h-11 items-center justify-center border border-black bg-black px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-zinc-800"
            >
              Phone
            </a>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-3 lg:gap-10">
          <nav aria-label="Follow us">
            <h2 className="text-xs font-bold uppercase tracking-wider">Follow Us</h2>
            <ul className="mt-3 space-y-2">
              {followLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm transition-opacity duration-200 hover:underline hover:opacity-80">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore">
            <h2 className="text-xs font-bold uppercase tracking-wider">Explore</h2>
            <ul className="mt-3 space-y-2">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm transition-opacity duration-200 hover:underline hover:opacity-80">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal and more">
            <h2 className="text-xs font-bold uppercase tracking-wider">Legal & More</h2>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm transition-opacity duration-200 hover:underline hover:opacity-80">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
