import site from "@/content/site.json";
import navigation from "@/content/navigation.json";
import companies from "@/content/companies.json";
import pages from "@/content/pages.json";

export type SiteConfig = typeof site;
export type NavigationConfig = typeof navigation;
export type CompaniesConfig = typeof companies;
export type PagesConfig = typeof pages;

export function getSite() {
  return site as SiteConfig;
}

export function getNavigation() {
  return navigation as NavigationConfig;
}

export function getCompanies() {
  return companies as CompaniesConfig;
}

export function getPages() {
  return pages as PagesConfig;
}

export function getAllStaticRoutes(): string[] {
  return [
    "/",
    "/about",
    "/our-companies",
    "/governance",
    "/track-record",
    "/contact",
    "/amparo",
    "/amparo/what-we-do",
    "/amparo/who-its-for",
    "/amparo/how-we-work",
    "/amparo/proof",
    "/cuidar",
    "/cuidar/what-we-do",
    "/cuidar/who-its-for",
    "/cuidar/how-we-work",
    "/cuidar/proof"
  ];
}
