export const suitColors = [
  { name: "Bordeaux", image: "/suits/burgundy.jpg", tone: "#651326" },
  { name: "Noir", image: "/suits/black.jpg", tone: "#181817" },
  { name: "Ivoire", image: "/suits/ivory.jpg", tone: "#e8ddca" },
  { name: "Sauge", image: "/suits/sage.jpg", tone: "#777b66" },
  { name: "Cacao", image: "/suits/cocoa.jpg", tone: "#654331" },
  { name: "Bleu nuit", image: "/suits/navy.jpg", tone: "#17243a" },
];

export function productSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ", "-");
}

export const brandValues = [
  "Confectionné avec soin",
  "Fabriqué au Maroc",
  "Des essentiels intemporels",
  "Plus de confiance en soi",
];
