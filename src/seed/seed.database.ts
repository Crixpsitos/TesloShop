import { initialData } from "./seed";
import { prisma } from "../prisma";

async function main() {
  //   console.log(initialData);

  console.log("Seed ejecutado coorectamente");
}

(async () => {
  if (process.env.NODE_ENV === "production") return;

  await Promise.all([
    await prisma.productImage.deleteMany(),
    await prisma.product.deleteMany(),
    await prisma.category.deleteMany(),
  ]);

  //categorias
  const categoriesCount = await prisma.category.createMany({
    data: initialData.categories.map((category) => ({
      name: category,
    })),
  });

  console.log(categoriesCount);

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((acc, category) => {
    acc[category.name] = category.id;

    return acc;
  }, {} as Record<string, string>);

  //productos

  initialData.products.forEach(async (product) => {
    const { images, type, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  await main();
})();
