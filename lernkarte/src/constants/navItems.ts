export type NavItem = {
  label: string;
  href: string;
  keywords?: string[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", keywords: ["anasayfa", "start"] },
  { label: "Lernkarte", href: "/lern", keywords: ["karten", "fragen"] },
  { label: "Teil", href: "/docs", keywords: ["dokumente", "docs", "teil"] },
  { label: "Lernfeld", href: "/lernfeld", keywords: ["feld", "kurse"] },
];
