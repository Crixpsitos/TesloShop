import { ValidGenders } from "@/interfaces";
import { prisma } from "@/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender: ValidGenders;
}

export const productsWithGenderPagination = async ({
  page = 1,
  take = 12,
  gender,
}: PaginationOptions) => {
  if (isNaN(Number(page)) || page < 1) page = 1;

  try {
    //1. obtener los productos
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      where: {
        gender,
      },
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

    //". obtener el total de páginas"

    const totalCount = await prisma.product.count({
      where: {
        gender,
      },
    });
    const totalPages = Math.ceil(totalCount / take);

    return {
      totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (err) {
    console.log(err);
    throw new Error("Error al obtener productos", {
      cause: err,
    });
  }
};
