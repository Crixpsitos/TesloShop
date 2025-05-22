"use server"

import { prisma } from "@/prisma";

export const getStockBySlug = async (slug: string): Promise<number> => {

    
    // const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    // await sleep(3000);

  try {
    const stockOfProduct = await prisma.product.findUnique({
      where: {
        slug: slug,
      },
      select: {
        inStock: true,
      },
    });

    if (!stockOfProduct) return 0;
    return stockOfProduct.inStock;
  } catch (err) {
    console.log(err);
    return 0;
  }
};
