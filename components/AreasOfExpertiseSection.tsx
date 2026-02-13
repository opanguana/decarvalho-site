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
      className={`text-[#F5F7F6] ${styles.waveThemeBlue} ${styles.heroSurface}`}
    >
      <div className={styles.waveStaticTop} aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-8 sm:py-16">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.75)]">Mozambique</h3>
        <h2
          id="areas-of-expertise-title"
          className="mt-3 text-3xl font-semibold tracking-tight text-[#F5F7F6] sm:text-4xl"
        >
          Areas of Expertise
        </h2>

        <ul className="mt-8 grid gap-x-8 gap-y-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {expertiseItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex rounded-md py-1 text-base text-[#F5F7F6] underline-offset-4 transition-opacity hover:opacity-85 hover:underline focus-visible:underline focus-visible:ring-2 focus-visible:ring-[rgba(255,255,255,0.25)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#062C26]"
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
