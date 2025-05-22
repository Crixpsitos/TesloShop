import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { OpenMenuButton } from "./openMenuButton";
import { NavLinks } from "./nav-liks/NavLinks";
import { ClientCart } from "./cart/ClientCart";

const Routes = [
  { label: "Hombres", path: "/gender/men" },
  { label: "Mujeres", path: "/gender/women" },
  { label: "Niños", path: "/gender/kid" },
  { label: "Para todos", path: "/gender/unisex" },
];

export const TopMenu = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      {/* Logo   */}
      <div className="flex items-center gap-2">
        <Link href={"/"} className="flex items-center gap-2">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span className={`${titleFont.className} antialiased `}>| Shop</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block ">
        {Routes.map((route) => (
          <NavLinks key={route.path} label={route.label} path={route.path} />
        ))}
      </div>

      {/* Search, Cart, menu */}
      <div className="flex items-center gap-2 space-x-2">
        <Link href="/search">
          <IoSearchOutline className="size-5" />
        </Link>
        <ClientCart />
        <OpenMenuButton />
      </div>
    </nav>
  );
};
