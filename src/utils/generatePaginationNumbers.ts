export const generatePaginationNumbers = (
  currentPage: number,
  totalPages: number
) => {
  //si el numero total de paginas es 7 o menos
  //vamos a mostrar todas las paginas sin puntos suspensivos
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // si la pagina actual esta entre las 3 primeras paginas
  //mostrar las primeras 3 paginas con puntos suspensivos y las ultimas 2

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // si la pagina actual esta entre las ultimas 2 paginas
  //mostrar las primeras 2 paginas con puntos suspensivos y las ultimas 3

  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // si la pagina actual esta entre otro lugar medio
  //mostrar la primera pagina, puntos suspensivos, la pagina actual y mas puntos y vecinos

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
