import { useMemo } from "react";
import { TableStateProps } from "../pagination";

const usePageNavigation = (tableState: TableStateProps | null) => {
  return useMemo(() => {
    if (!tableState) {
      return {
        pages: [],
        currentPage: 0,
        setPageIndex: () => {},
        lastPage: 0,
      };
    } else {
      const { pageCount, pageIndex, setPageIndex } = tableState;
      const pages = calculatePageNumbers(pageCount, pageIndex);
      return {
        pages,
        currentPage: Number(pageIndex),
        setPageIndex,
        lastPage: Number(pageCount),
      };
    }
  }, [tableState]);
};

// 페이지 번호 계산 로직 분리
const calculatePageNumbers = (pageCount: number, currentPage: number) => {
  let pages = [];
  if (pageCount <= 5) {
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
  } else {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(pageCount, startPage + 4);
    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
  }
  return pages;
};

export { usePageNavigation, calculatePageNumbers };
