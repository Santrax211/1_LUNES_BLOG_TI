// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Blog FEPTI";
export const SITE_TITLE = "Blog FEPTI";
export const SITE_DESCRIPTION = "Este blog ha sido elaborado para registrar el avance del proyecto del curso de Formulación y Evaluación de Proyectos de TI";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Blog FEPTI - Todas las etiquetas";
export const Tags_DESCRIPTION =
  "AstroVerse - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `Todos los artículos sobre la etiqueta  '${tag}' en Blog FEPTI`,
    description: `Explore artículos sobre ${tag} para diferentes perspectivas y análisis en profundidad.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `Todos los artículos en la categoría '${category}' en Blog FEPTI`,
    description: `Explore todos los artículos en la categoría ${category} en Blog FEPTI`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "Primer Avance" },
  { href: "/category/Two/1/", title: "Segundo Avance" },
  //{ href: "/category/Three/1/", title: "Tercer Avance" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/tags/", title: "Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://github.com/Santrax211/LUNES_TI.git",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Búsqueda del sitio`;
export const SEARCH_PAGE_DESCRIPTION = `Buscar todo el contenido en ${SITE_TITLE}`;
