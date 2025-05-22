"use client";

import { generatePaginationNumbers } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get("page") ?? 1;

  const currentPage = isNaN(Number(pageString)) ? 1 : Number(pageString);

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    const pageNum = Number(pageNumber); // Ensure pageNumber is treated as a number

    if (!isNaN(pageNum) && pageNum <= 0) {
      return `${pathname}`;
    }

    if (pageNum > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNum.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex text-center mb-20 justify-center">
      <nav aria-label="Page navigation example">
        <ul className="flex list-style-none">
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage - 1)}
              tabIndex={-1}
              aria-disabled="true"
            >
              <IoChevronBackOutline size={30} />
            </Link>
          </li>
          {allPages.map((page, index) => {
            console.log({ page, currentPage });
            return (
              <li className="page-item" key={`${page} - ${index}`}>
                {page === "..." ? (
                  <span className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none">
                    <IoChevronForwardOutline size={30} />
                  </span>
                ) : (
                  <Link
                    className={clsx(
                      "page-link relative block py-1.5 px-3  border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-blue-200 focus:shadow-none",
                      {
                        "bg-blue-500": currentPage === Number(page),
                      }
                    )}
                    href={createPageUrl(page)}
                  >
                    {page}
                  </Link>
                )}
              </li>
            );
          })}
          <li className="page-item">
            {currentPage < totalPages ? (
              <Link
                className={clsx(
                  "page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                )}
                href={createPageUrl(currentPage + 1)}
              >
                <IoChevronForwardOutline size={30} />
              </Link>
            ) : (
              <span
                className={clsx(
                  "page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800  focus:shadow-none",
                  {
                    "text-gray-300": currentPage === totalPages,
                  }
                )}
              >
                <IoChevronForwardOutline size={30} />
              </span>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
