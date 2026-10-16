import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/layout/header";
import Footer from "@/components/footer";
import ProductDetail from "@/components/product-detail";
import { productSlug, suitColors } from "@/data/homepage";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return suitColors.map((product) => ({
    slug: productSlug(product.name),
  }));
}

function findProduct(slug: string) {
  return suitColors.find((product) => productSlug(product.name) === slug);
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) return { title: "Produit introuvable — IMZA" };

  return {
    title: `Le tailleur signature ${product.name} — IMZA`,
    description: `Découvrez le tailleur signature IMZA en coloris ${product.name.toLowerCase()}, confectionné avec soin au Maroc.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) notFound();

  return (
    <>
      <div id="top">
        <Header />
      </div>
      <main className="min-h-screen bg-[#f6efe6] pt-[108px] text-primary max-sm:pt-0">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
