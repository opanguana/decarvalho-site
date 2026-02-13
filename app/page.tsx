import Link from "next/link";
import AreasOfExpertiseBand from "@/components/AreasOfExpertiseBand";
import { getPages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const pages = getPages();

export const metadata = buildMetadata({
  title: pages.home.title,
  description: pages.home.description,
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-placeholder.svg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,16,13,0.22)_0%,rgba(5,16,13,0.38)_45%,rgba(2,10,8,0.82)_100%)]" />

        <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] items-end px-4 pb-14 sm:px-8 sm:pb-16 md:pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl">
              <span className="block">Support global</span>
              <span className="block">cancer care and</span>
              <span className="block">give hope a chance</span>
            </h1>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/track-record"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-base font-semibold text-zinc-900 hover:bg-zinc-100"
              >
                Upcoming events
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/45 bg-white/10 px-6 text-base font-medium text-white backdrop-blur-sm hover:bg-white/15"
              >
                Donate now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <AreasOfExpertiseBand />
    </>
  );
}
