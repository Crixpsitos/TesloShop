export const revalidate = 60;

import { productsWithGenderPagination } from "@/actions/gender/productsWithGenderPagination";
import { isValidGender } from "@/actions/gender/isValidGender";
import { Pagination, ProductsGrid, Title } from "@/components";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ gender: "men" | "women" | "kid" | "unisex" }>;
  searchParams: Promise<{
    page: number;
  }>;
}

//metadata
export const metadata = {
  title: "Categories | Teslo Shop",
  description: "Tienda de productos Teslo por categorias",
};

export default async function CategoryPage({ params, searchParams }: Props) {
  const [{ gender }, { page }] = await Promise.all([params, searchParams]);

  const validCategory = await isValidGender(gender);

  if (!validCategory) return notFound();

  const categoryInSpanish = {
    women: "mujeres",
    men: "hombres",
    kid: "niños",
    unisex: "para todos",
  };

  const { products, totalPages } = await productsWithGenderPagination({
    page,
    take: 12,
    gender,
  });

  return (
    <>
      <Title
        title={
          categoryInSpanish[gender].charAt(0).toUpperCase() +
          categoryInSpanish[gender].slice(1)
        }
        subtitle={`Esto son todos los productos de la categoria ${categoryInSpanish[gender]}`}
        className="mb-2 mx-8"
      />
      <ProductsGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
