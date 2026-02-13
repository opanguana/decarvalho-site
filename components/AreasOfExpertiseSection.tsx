import Link from "next/link";
import styles from "@/components/AreasOfExpertiseSection.module.css";

const expertiseItems = [
  {
    label: "Adolescent and Youth Health",
    href: "/areas-of-expertise/adolescent-and-youth-health/",
  },
  {
    label: "Primary Health Care",
    href: "/areas-of-expertise/primary-health-care/",
  },
  {
    label: "Women’s Cancers",
    href: "/areas-of-expertise/womens-cancers/",
  },
  {
    label: "HIV",
    href: "/areas-of-expertise/hiv/",
  },
  {
    label: "Tuberculosis",
    href: "/areas-of-expertise/tuberculosis/",
  },
  {
    label: "Global Health Security",
    href: "/areas-of-expertise/global-health-security/",
  },
  {
    label: "Learning and Performance",
    href: "/areas-of-expertise/learning-performance/",
  },
  {
    label: "Maternal, Newborn and Child Health",
    href: "/areas-of-expertise/maternal-newborn-child-health/",
  },
];

export default function AreasOfExpertiseSection() {
  return (
    <section
      aria-labelledby="areas-of-expertise-title"
      className={`bg-zinc-50 text-zinc-900 ${styles.waveThemeBlue}`}
    >
      <div className={styles.waveStaticTop} aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-8 sm:py-16">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-600">Mozambique</h3>
        <h2 id="areas-of-expertise-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Areas of Expertise
        </h2>

        <ul className="mt-8 grid gap-x-8 gap-y-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {expertiseItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex rounded-md py-1 text-base text-zinc-700 underline-offset-4 transition hover:text-zinc-900 hover:underline focus-visible:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.waveStaticBottom} aria-hidden="true" />
    </section>
  );
}
