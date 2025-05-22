"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  label: string;
  path: string;
  className?: string;
}

export const NavLinks = ({ label, path, className }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={clsx(
        "m-2 p-2 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700",
        {
          "bg-gray-200": isActive,
        },
        className
      )}
    >
      {label}
    </Link>
  );
};
