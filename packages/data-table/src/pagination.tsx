"use client";

import {
  RxChevronLeft,
  RxChevronRight,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from "react-icons/rx";
import { Button } from "@atg-ui/button";
import { cn } from "@atg-ui/lib";
import { useTable } from "./data-table";
import { Dispatch, SetStateAction } from "react";
import {
  calculatePageNumbers,
  usePageNavigation,
} from "./hooks/usePageNavigation";
import { IconType } from "react-icons/lib";

interface TableStateProps {
  count: number;
  pageIndex: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
  pageSize: number;
  setPageSize: Dispatch<SetStateAction<number>>;
  pageCount: number;
}

interface DataTablePaginationProps {
  className?: string;
  selectedRowCounter?: boolean;
  pageCounter?: boolean;
  tableState?: TableStateProps;
}

const DataTablePagination = ({
  className,
  selectedRowCounter = false,
  pageCounter = false,
  tableState,
}: DataTablePaginationProps) => {
  return (
    <div
      className={cn(
        "flex justify-center py-2",
        { "justify-between": selectedRowCounter && pageCounter },
        className,
      )}
    >
      {selectedRowCounter && <SelectedRows />}
      {tableState ? (
        <ServerSidePagination tableState={tableState} />
      ) : (
        <ClientSidePagination />
      )}
      {pageCounter && <PageCounter />}
    </div>
  );
};

const ServerSidePagination = ({
  tableState,
}: {
  tableState: TableStateProps;
}) => {
  // 서버사이드 페이징 로직
  const { pages, currentPage, setPageIndex, lastPage } =
    usePageNavigation(tableState);

  return (
    <PaginationComponent
      pages={pages}
      currentPage={currentPage}
      setPageIndex={setPageIndex}
      lastPage={lastPage}
    />
  );
};

const ClientSidePagination = () => {
  const { table } = useTable();
  // 클라이언트사이드 페이징 로직
  const currentPage = table.getState().pagination.pageIndex + 1;
  const lastPage = table.getPageCount();
  const pages = calculatePageNumbers(lastPage, currentPage);

  return (
    <PaginationComponent
      pages={pages}
      currentPage={currentPage}
      setPageIndex={(n: number) => table.setPageIndex(n - 1)}
      lastPage={lastPage}
    />
  );
};

type PaginationComponentProps = {
  pages: (string | number | undefined)[];
  currentPage: number;
  setPageIndex: (pageIndex: number) => void;
  lastPage: number;
};
const PaginationComponent = ({
  pages,
  currentPage,
  setPageIndex,
  lastPage,
}: PaginationComponentProps) => {
  return (
    <div className="flex items-center rounded-md border border-border">
      <PaginationButton
        icon={RxDoubleArrowLeft}
        onClick={() => setPageIndex(1)}
        disabled={currentPage === 1}
      />
      <PaginationButton
        icon={RxChevronLeft}
        onClick={() => setPageIndex(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {pages.map((number: string | number | undefined) => (
        <PaginationButton
          key={String(number)}
          variant={number === currentPage ? "primary" : "ghost"}
          onClick={() => setPageIndex(number as number)}
          label={number}
        />
      ))}
      <PaginationButton
        icon={RxChevronRight}
        onClick={() => setPageIndex(currentPage + 1)}
        disabled={currentPage === lastPage}
      />
      <PaginationButton
        icon={RxDoubleArrowRight}
        onClick={() => setPageIndex(lastPage)}
        disabled={currentPage === lastPage}
        hideBorder
      />
    </div>
  );
};

type PageButtonProps = {
  icon?: IconType;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "ghost";
  label?: string | number;
  hideBorder?: boolean;
};

const PaginationButton = ({
  icon: Icon,
  onClick,
  disabled,
  variant = "ghost",
  label,
  hideBorder = false,
}: PageButtonProps) => {
  return (
    <Button
      variant={variant}
      className={cn("h-9 w-9 rounded-none border-r border-border p-0", {
        "border-none": hideBorder,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {!Icon && <p>{label}</p>}
      <span className="sr-only">{label}</span>
      {Icon && <Icon className="h-4 w-4" />}
    </Button>
  );
};

function SelectedRows() {
  const { table } = useTable();
  return (
    <div className="text-sm text-muted-foreground">
      {table.getFilteredSelectedRowModel().rows.length} of{" "}
      {table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
  );
}

function PageCounter() {
  const { table } = useTable();
  return (
    <div className="flex w-[100px] items-center justify-center text-sm font-medium">
      Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
    </div>
  );
}

export { DataTablePagination };
export type { TableStateProps };
