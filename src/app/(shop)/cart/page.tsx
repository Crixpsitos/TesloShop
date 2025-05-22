import {  Title } from "@/components"


import Link from "next/link"
import { redirect } from "next/navigation"
import { FiShoppingBag as BagIcon } from "react-icons/fi"
import { ContainerToCart } from "./_ui/ContainerToCart"



export default function CartPage() {

  // redirect("/empty")

  return (
    <div className="container mx-auto px-4 py-6 sm:py-10 max-w-6xl">
      <Title title="Carrito de compra" subtitle="Revisa tus productos seleccionados" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6 sm:mt-8">
        {/* Carrito - Ocupa 2/3 en pantallas grandes */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-medium">Productos</h2>
            <Link href="/" className="text-sm text-blue-500 hover:underline">
              Continuar comprando
            </Link>
          </div>

          {/* Items */}
          <ContainerToCart />
        </div>

        {/* Resumen - Ocupa 1/3 en pantallas grandes */}
        <div className="bg-gray-50 rounded-lg p-5 sm:p-6 h-fit">
          <h2 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Resumen de orden</h2>

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
            <Link
              href="/checkout/address"
              className="btn-primary w-full py-3 flex justify-center items-center text-center"
            >
              Tramitar pedido
            </Link>

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
        <Link href="/checkout/address" className="btn-primary px-4 py-2 flex items-center gap-2">
          <BagIcon size={16} />
          Tramitar pedido
        </Link>
      </div>

      {/* Espacio adicional en móvil para que el contenido no quede detrás de la barra flotante */}
      <div className="h-16 lg:hidden"></div>
    </div>
  )
}
