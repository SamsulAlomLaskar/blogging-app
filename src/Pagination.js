import { useState } from "react";

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };
  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const previousPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };
  const jumpToPage = (page) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };
  return { currentData, nextPage, previousPage, jumpToPage };
};
