export const revalidate = 604800;

import { getPorductBySlug } from "@/actions";
import {
  ProductMobileSlidesShow,
  ProductSlidesShow,
  StockLabel,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./_ui/AddToCart";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // fetch post information
  const product = await getPorductBySlug(slug);

  return {
    title: product?.title ?? "producto no encontrado",
    description: product?.description ?? "producto no encontrado",
    openGraph: {
      title: product?.title ?? "producto no encontrado",
      description: product?.description ?? "producto no encontrado",
      images: [`/products/${product?.images[2]}`],
    },
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getPorductBySlug(slug);
  if (!product) return notFound();

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 h-full w-full">
          {/* ShileShow mobile */}
          <ProductMobileSlidesShow
            images={product.images}
            title={product.title}
            className="block md:hidden"
          />
          {/* SlideShow deskopt*/}
          <ProductSlidesShow
            images={product.images}
            title={product.title}
            className="hidden md:block"
          />
        </div>

        {/* Detalles */}
        <div className="flex flex-col">
          <StockLabel slug={product.slug} />
          <h1
            className={`${titleFont.className} antialiased font-bold text-xl`}
          >
            {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
          </h1>
          <p className="text-lg mb-4">
            {product.price.toLocaleString("es-ES", {
              style: "currency",
              currency: "EUR",
            })}
          </p>
          <AddToCart product={product} />

          {/* Descripción */}
          <div className="mt-4">
            <h3 className="font-bold text-sm mb-2">Descripción</h3>
            <p className="font-light text-sm leading-relaxed text-gray-700">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
