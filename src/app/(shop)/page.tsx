



import { Pagination, ProductsGrid, Title } from "@/components";
// import { initialData } from "@/seed/seed";
// import { Product } from "@/interfaces";
// import { prisma } from "@/prisma";
import { getPaginatedProductsWithImages } from "@/actions";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{
    page: number;
  }>;
}

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;

  const { products, totalPages } =
    await getPaginatedProductsWithImages({
      page: page,
      take: 12,
    });

  if (products.length === 0) redirect("/");

  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2 mx-8"
      />
      <ProductsGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
