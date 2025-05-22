import { ValidGenders } from "@/interfaces";
import { prisma } from "@/prisma";

export const isValidGender = async (gender: ValidGenders) => {
  const products = await prisma.product.findMany();

  return products.some((cat) => cat.gender === gender);
};
