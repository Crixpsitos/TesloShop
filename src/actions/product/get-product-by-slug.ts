import { prisma } from "@/prisma";

export const getPorductBySlug = async (slug: string) => {

  try {
    const product = await prisma.product.findFirst({
      include: {
        ProductImage: {
          select: {
            url: true,
          },
        },
      },
      where: {
        slug: slug,
      },
    });

    if (!product) return null;

    const { ProductImage, ...productWithoutImage } = product;

    return {
      ...productWithoutImage,
      images: ProductImage.map((image) => image.url),
    };
  } catch (err) {
    console.log(err);
    throw new Error("Error al obtener el producto por slug", {
      cause: err,
    });
  }
};
