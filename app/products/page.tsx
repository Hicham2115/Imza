import type { Metadata } from "next";
import Header from "@/layout/header";
import Footer from "@/components/footer";
import ProductsCollection from "@/components/products-collection";

export const metadata: Metadata = {
  title: "La collection signature — IMZA",
  description:
    "Découvrez le tailleur signature IMZA en six couleurs, confectionné avec soin au Maroc.",
};

export default function ProductsPage() {
  return (
    <>
      <div id="top">
        <Header />
      </div>
      <main className="min-h-screen bg-[#f6efe6] pt-[108px] text-primary max-sm:pt-0">
        <ProductsCollection />
      </main>
      <Footer />
    </>
  );
}
