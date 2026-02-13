import Link from "next/link";
import footerContent from "@/content/footer.json";

export default function InstitutionalFooter() {
  return (
    <footer className="w-full bg-[#F2D22E] text-black" aria-label="Site footer">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-4 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <div className="shrink-0">
          <p className="text-5xl font-black leading-[0.88] tracking-tight">{footerContent.brand.line1}</p>
          <p className="text-5xl font-black leading-[0.88] tracking-tight">{footerContent.brand.line2}</p>
        </div>

        <div className="max-w-xs shrink-0">
          <p className="text-sm leading-relaxed">{footerContent.address}</p>
          <div className="mt-4 flex gap-3">
            <a
              href={footerContent.actions.email.href}
              aria-label={`Send email to ${footerContent.actions.email.href.replace("mailto:", "")}`}
              className="inline-flex min-h-11 items-center justify-center border border-black bg-black px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2D22E]"
            >
              {footerContent.actions.email.label}
            </a>
            <a
              href={footerContent.actions.phone.href}
              aria-label={`Call ${footerContent.actions.phone.href.replace("tel:", "")}`}
              className="inline-flex min-h-11 items-center justify-center border border-black bg-black px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2D22E]"
            >
              {footerContent.actions.phone.label}
            </a>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-3xl lg:grid-cols-3 lg:gap-10">
          {footerContent.groups.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-xs font-bold uppercase tracking-wider">{group.heading}</h2>
              <ul className="mt-3 space-y-2">
                {group.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-sm transition-opacity duration-200 hover:underline hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2D22E]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
