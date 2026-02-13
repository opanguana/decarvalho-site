import Link from "next/link";
import { getNavigation, getSite } from "@/lib/content";

export default function Footer() {
  const nav = getNavigation();
  const site = getSite();

  return (
    <footer
      className="mt-16 bg-white/90 pt-12 text-sm text-gray-600 backdrop-blur-xl dark:bg-gray-900/90 dark:text-gray-300"
      aria-label="Site footer"
    >
      <div className="flex justify-center w-full">
        <div className="mx-auto w-full max-w-7xl border-t border-gray-200/60 px-4 py-8 sm:px-6 lg:px-8 dark:border-white/10">
          <div className="grid w-full grid-cols-2 gap-8 text-sm text-gray-600 dark:text-gray-300 md:grid-cols-3 lg:grid-cols-6">
            <div className="col-span-2 space-y-2 text-left lg:col-span-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">{site.orgName}</h3>
              <p>{site.tagline}</p>
            </div>

            <ul className="space-y-2 text-left">
              <li className="font-semibold text-gray-800 dark:text-gray-100">Pages</li>
              {nav.primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-2 text-left">
              <li className="font-semibold text-gray-800 dark:text-gray-100">Companies</li>
              {nav.companies.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-2 text-left">
              <li className="font-semibold text-gray-800 dark:text-gray-100">Contact</li>
              <li>{site.contact.email}</li>
              <li>{site.contact.phone}</li>
              <li>{site.contact.address}</li>
            </ul>

            <ul className="space-y-2 text-left">
              <li className="font-semibold text-gray-800 dark:text-gray-100">Explore</li>
              {nav.primary.slice(0, Math.ceil(nav.primary.length / 2)).map((item) => (
                <li key={`explore-${item.href}`}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-2 text-left">
              <li className="font-semibold text-gray-800 dark:text-gray-100">Quick links</li>
              {nav.primary.slice(Math.ceil(nav.primary.length / 2)).map((item) => (
                <li key={`quick-${item.href}`}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between border-t border-gray-200/60 px-4 py-4 text-xs text-gray-500 sm:px-6 lg:px-8 md:flex-row dark:border-white/10 dark:text-gray-400">
          <p className="w-full text-left md:mr-4 md:w-auto">
            Copyright © {new Date().getFullYear()} {site.orgName}. All rights reserved.
          </p>
          <div className="flex w-full flex-wrap justify-center gap-4 md:w-auto md:justify-center">
            {nav.primary.slice(0, 4).map((item) => (
              <Link
                key={`legal-${item.href}`}
                href={item.href}
                className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{site.contact.address}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
