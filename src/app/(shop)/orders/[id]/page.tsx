import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag as BagIcon } from "react-icons/fi";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CheckoutPage({ params }: Props) {
  const { id } = await params;

  //Todo: verificar

  //redirect("/")

  return (
    <div className="container mx-auto px-4 py-6 sm:py-10 max-w-6xl">
      <Title title={`Orden #${id}`} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6 sm:mt-8">
        {/* Carrito - Ocupa 2/3 en pantallas grandes */}
        <div className="lg:col-span-2">
          <div
            className={clsx(
              "flex items-center rounded-lg py-2 px-3.5 text-sm font-bold text-white mb-5",
              {
                "bg-red-500": false,
                "bg-green-700": true,
              }
            )}
          >
            <IoCardOutline size={30} />
            {/* <span className="mx-2">Pendiente de pago</span> */}
            <span className="mx-2">Pagada</span>
          </div>

          {/* Items */}
          <div className="space-y-5 sm:space-y-6">
            {productsInCart.map((product) => (
              <div
                key={product.slug}
                className="flex flex-col sm:flex-row border-b pb-5 sm:pb-6"
              >
                <div className="max-w-[120px] mx-auto sm:mx-0 sm:w-1/4 mb-3 sm:mb-0">
                  <Image
                    src={`/products/${product.images[0]}`}
                    alt={product.title}
                    width={120}
                    height={120}
                    quality={85}
                    className="rounded-md object-cover w-full h-auto"
                  />
                </div>

                <div className="sm:w-3/4 sm:pl-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-base sm:text-lg">
                        {product.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-500 mt-1">
                      Talla: {product.sizes[0]}
                    </p>
                  </div>

                  <div className="flex justify-between items-end mt-3 sm:mt-4">
                    <div>
                      <p className="font-medium mb-2">
                        {product.price.toLocaleString("es-ES", {
                          currency: "EUR",
                          style: "currency",
                        })}{" "}
                        x 3
                      </p>
                      <p className="font-bold">
                        Subtotal:{" "}
                        {(product.price * 3).toLocaleString("es-ES", {
                          currency: "EUR",
                          style: "currency",
                        })}
                      </p>
                      {/* <QuantitySelector quantity={3} /> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resumen - Ocupa 1/3 en pantallas grandes */}
        <div className="bg-gray-50 rounded-lg p-5 sm:p-6 h-fit">
          <h2 className="text-2xl mb-2">Direccion de entrega</h2>
          <div className="mb-5 grid grid-cols-2 space-y-2">
            <p>Fernando herrera</p>
            <p>Av. Siempre viva 123</p>
            <p>Col. Centro</p>
            <p>Alcaldia ibague</p>
            <p>Colombia</p>
            <p>CP 12121212</p>
            <p>573144197191</p>
          </div>
          <hr className="mb-2" />
          {/* divider */}
          <h2 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">
            Resumen de orden
          </h2>

          <div className="space-y-3 sm:space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Productos (3)</span>
              <span>€600,00</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>€600,00</span>
            </div>

            <div className="flex justify-between">
              <span>Impuestos (21%)</span>
              <span>€126,00</span>
            </div>

            <div className="flex justify-between">
              <span>Envío</span>
              <span>Gratis</span>
            </div>

            <div className="border-t pt-3 sm:pt-4 mt-3 sm:mt-4">
              <div className="flex justify-between font-medium text-base sm:text-lg">
                <span>Total</span>
                <span>€726,00</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Impuestos incluidos</p>
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            {/* disclaimer */}
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-sm font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">Pagada</span>
            </div>

            <div className="mt-3 sm:mt-4 text-xs text-center text-gray-500">
              <p>Envío gratuito en todos los pedidos</p>
              <p className="mt-1">30 días para devoluciones</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barra flotante para móvil con resumen y botón de checkout */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-between items-center lg:hidden z-10">
        <div>
          <p className="font-bold text-base">€726,00</p>
          <p className="text-xs text-gray-500">3 productos</p>
        </div>

        <Link
          href="/orders/123"
          className="btn-primary px-4 py-2 flex items-center gap-2"
        >
          <BagIcon size={16} />
          Colocar orden
        </Link>
      </div>

      {/* Espacio adicional en móvil para que el contenido no quede detrás de la barra flotante */}
      <div className="h-16 lg:hidden"></div>
    </div>
  );
}
