import Link from "next/link";
import styles from "@/components/areas-of-expertise-band.module.css";

const leftColumnItems = [
  {
    label: "Adolescent and Youth Health",
    href: "/areas-of-expertise/adolescent-and-youth-health/",
  },
  {
    label: "Women’s Cancers",
    href: "/areas-of-expertise/womens-cancers/",
  },
  {
    label: "Tuberculosis",
    href: "/areas-of-expertise/tuberculosis/",
  },
  {
    label: "Learning and Performance",
    href: "/areas-of-expertise/learning-performance/",
  },
];

const rightColumnItems = [
  {
    label: "Primary Health Care",
    href: "/areas-of-expertise/primary-health-care/",
  },
  {
    label: "HIV",
    href: "/areas-of-expertise/hiv/",
  },
  {
    label: "Global Health Security",
    href: "/areas-of-expertise/global-health-security/",
  },
  {
    label: "Maternal, Newborn and Child Health",
    href: "/areas-of-expertise/maternal-newborn-child-health/",
  },
];

export default function AreasOfExpertiseBand() {
  return (
    <section
      aria-labelledby="areas-of-expertise-title"
      className="w-full bg-[radial-gradient(78%_110%_at_88%_50%,rgba(92,58,30,0.24)_0%,rgba(58,37,20,0.12)_40%,rgba(26,18,12,0)_72%),linear-gradient(104deg,#062C26_0%,#0C3F34_48%,#062C26_100%)] text-white"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-8">
        <h3 className={`${styles.label} font-extrabold uppercase text-white/75`}>Mozambique</h3>
        <h2 id="areas-of-expertise-title" className={`${styles.title} mt-4 font-black uppercase text-white`}>
          AREAS OF EXPERTISE
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-36 md:gap-y-0 lg:gap-x-44">
          <ul className="space-y-2 md:space-y-3" role="list">
            {leftColumnItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.itemLink} inline-flex font-bold text-white transition-opacity duration-200 hover:opacity-85 focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062C26]`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-2 md:space-y-3" role="list">
            {rightColumnItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.itemLink} inline-flex font-bold text-white transition-opacity duration-200 hover:opacity-85 focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#062C26]`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
