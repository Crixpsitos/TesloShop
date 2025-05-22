import { ProductsGrid, Title } from "@/components";
import { Product } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: "men" | "women" | "kid" | "unisex" }>;
}

//metadata
export const metadata = {
  title: "Categories | Teslo Shop",
  description: "Tienda de productos Teslo por categorias",
};

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  const categories = initialData.products.map((product) => product.gender);

  const isValidCategory = categories.includes(id);
  if (!isValidCategory) return notFound();

  const categoryInSpanish = {
    women: "mujeres",
    men: "hombres",
    kid: "niños",
    unisex: "para todos",
  };

  const products = initialData.products.filter(
    (product) => product.gender === id
  ) as Product[];

  return (
    <>
      <Title
        title={
          categoryInSpanish[id].charAt(0).toUpperCase() +
          categoryInSpanish[id].slice(1)
        }
        subtitle={`Esto son todos los productos de la categoria ${categoryInSpanish[id]}`}
        className="mb-2 mx-8"
      />
      <ProductsGrid products={products} />
    </>
  );
}
