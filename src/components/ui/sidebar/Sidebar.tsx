"use client";

import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/40"
          onClick={closeSideMenu}
        />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          onClick={closeSideMenu}
        />
      )}

      <nav
        className={clsx(
          "fixed right-0 top-0 w-[300px] sm:w-[380px] md:w-[500px] h-screen z-20 bg-white shadow-xl transform transition-all duration-300 ease-in-out overflow-y-auto",
          {
            "translate-x-full": !isSideMenuOpen,
            "translate-x-0": isSideMenuOpen,
          }
        )}
      >
        <div className="sticky top-0 bg-white z-10 px-6 py-5 border-b border-gray-100">
          <IoCloseOutline
            size={36}
            className="absolute top-5 right-5 cursor-pointer text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full p-1 transition-all"
            onClick={closeSideMenu}
          />

          <div className="relative mt-8">
            <IoSearchOutline
              size={20}
              className="absolute top-3 left-3 text-gray-400"
            />
            <input
              type="text"
              placeholder="Buscar"
              className="w-full bg-gray-50 rounded-lg px-10 py-2.5 border text-base border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="px-4 py-2">
          {/* User Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 px-2 mb-2 mt-4">
              Tu cuenta
            </h3>

            <Link
              href="/"
              className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-all text-gray-700 hover:text-blue-600"
            >
              <IoPersonOutline size={22} className="mr-3 text-gray-500" />
              <span className="text-base font-medium">Perfil</span>
            </Link>

            <Link
              href="/orders"
              className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-all text-gray-700 hover:text-blue-600"
            >
              <IoTicketOutline size={22} className="mr-3 text-gray-500" />
              <span className="text-base font-medium">Mis Ordenes</span>
            </Link>

            <Link
              href="/"
              className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-all text-gray-700 hover:text-blue-600"
            >
              <IoLogInOutline size={22} className="mr-3 text-gray-500" />
              <span className="text-base font-medium">Ingresar</span>
            </Link>

            <Link
              href="/"
              className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-all text-gray-700 hover:text-blue-600"
            >
              <IoLogOutOutline size={22} className="mr-3 text-gray-500" />
              <span className="text-base font-medium">Cerrar sesión</span>
            </Link>
          </div>

          {/* Admin Section */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 px-2 mb-2 mt-4">
              Administración
            </h3>

            <Link
              href="/"
              className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-all text-gray-700 hover:text-blue-600"
            >
              <IoShirtOutline size={22} className="mr-3 text-gray-500" />
              <span className="text-base font-medium">Productos</span>
            </Link>

            <Link
              href="/"
              className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-all text-gray-700 hover:text-blue-600"
            >
              <IoTicketOutline size={22} className="mr-3 text-gray-500" />
              <span className="text-base font-medium">Ordenes</span>
            </Link>

            <Link
              href="/"
              className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-all text-gray-700 hover:text-blue-600"
            >
              <IoPeopleOutline size={22} className="mr-3 text-gray-500" />
              <span className="text-base font-medium">Usuarios</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
