
import React, { createContext, useContext, useEffect, useState } from "react";
import type { ColumnDef, TableMeta } from "@tanstack/react-table";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@atg-ui/table";
import { ScrollArea } from "@atg-ui/scroll-area";
import { cn } from "@atg-ui/lib";
import { Skeleton } from "@atg-ui/skeleton";
import { AddRowFooter, FooterProps } from "./footer";

// Table Context 정의
const TableContext = createContext<{
  table: ReturnType<typeof useReactTable<any>>;
  caption: string | undefined;
} | null>(null);

// 자식 컴포넌트에서 table 객체에 접근하기 위한 훅
const useTable = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTable must be used within a DataTable provider");
  }
  return context;
};

// DataTable 컴포넌트 정의
interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  children: React.ReactNode;
  caption?: string;
  manualPagination?: boolean;
  meta?: TableMeta<TData>;
}

function DataTable<TData>({
  data,
  columns,
  children,
  caption,
  manualPagination = true,
  meta,
}: DataTableProps<TData>) {
  const { Provider: TableProvider } = TableContext;
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const instance = useReactTable({
    data,
    columns,
    manualPagination: manualPagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    meta: meta,
  });

  // 새로운 데이터가 들어왔을경우 선택 해제를 시킨다.
  useEffect(() => {
    instance.resetRowSelection();
  }, [data, instance]);

  return (
    <TableProvider value={{ table: instance, caption }}>
      {children}
    </TableProvider>
  );
}

interface DataTableViewProps {
  className?: string;
  scrollbars?: "vertical" | "horizontal" | "both";
  tableClassName?: string;
  theadClassName?: string;
  theadRowClassName?: string;
  thClassName?: string;
  tbodyClassName?: string;
  tbodyRowClassName?: string;
  tdClassName?: string;
  height?: number;
  count?: number;
  rowCount?: number;
  rowClickHandler?: (rowData: any) => void | undefined;
  rowDoubleClickHandler?: (rowData: any) => void | undefined;
  addRowFooter?: FooterProps;
}
const DataTableView: React.FC<DataTableViewProps> = ({
  className,
  scrollbars = "both",
  tableClassName,
  theadClassName,
  theadRowClassName,
  thClassName,
  tbodyClassName,
  tbodyRowClassName,
  tdClassName,
  height,
  count,
  rowCount = 1,
  rowClickHandler,
  rowDoubleClickHandler,
  addRowFooter,
}) => {
  const { table, caption } = useTable();
  const scrollAreaStyle = height !== undefined ? { height: `${height}px` } : {};
  const isData = table?.options?.data?.length > 0;

  const renderDummyRow = () => {
    const dummyRow = [];

    const columnCount = table?.options?.columns?.length;

    const dummyCount = rowCount - table?.options?.data?.length;

    if (dummyCount > 0) {
      for (let i = 0; i < dummyCount; i++) {
        dummyRow.push(
          <TableRow
            key={`dummy-${i}`}
            className={cn("border-b-0 hover:bg-inherit")}
          >
            <TableCell
              colSpan={columnCount}
              className={cn("h-[49px] border-b-0")}
            >
              &nbsp;
            </TableCell>
          </TableRow>,
        );
      }
    }
    return dummyRow;
  };
  return (
    <ScrollArea
      className={cn("relative ", className)}
      style={scrollAreaStyle}
      scrollbars={scrollbars}
    >
      <Table
        className={cn(
          "h-full border-separate border-spacing-0 overflow-x-auto",
          "[&_td]:whitespace-nowrap [&_td]:px-2 [&_td]:py-1 [&_th]:whitespace-nowrap [&_th]:px-2 [&_th]:py-1",
          tableClassName,
          // className,
        )}
      >
        {caption && (
          <TableCaption className="sticky top-0 z-[11]">{caption}</TableCaption>
        )}
        <TableHeader
          className={cn(
            "sticky top-0 z-10",
            "[&_tr:not(:first-child)>th]:border-t-0",
            {
              "top-[46px]": caption,
            },
            theadClassName,
          )}
        >
          {table.getHeaderGroups().map((headerGroup, groupIndex) => (
            <TableRow
              className={cn(
                "hover:bg-inherit [&_th:last-child]:border-b  [&_th:last-child]:border-t [&_th]:border-b  [&_th]:py-2",
                {
                  "[&_th:last-child]:border-t-2 [&_th]:border-t-2 [&_th]:border-t-black":
                    !caption,
                },
                {
                  "[&_th:last-child]:border-r": groupIndex > 0,
                },
                theadRowClassName,
              )}
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => {
                const columnRelativeDepth = header.depth - header.column.depth;

                if (
                  !header.isPlaceholder &&
                  columnRelativeDepth > 1 &&
                  header.id === header.column.id
                ) {
                  return null;
                }

                let rowSpan = 1;
                if (header.isPlaceholder) {
                  const leafs = header.getLeafHeaders();
                  rowSpan = leafs[leafs.length - 1].depth - header.depth;
                }
                return (
                  <TableHead
                    key={header.id}
                    className={cn(thClassName)}
                    colSpan={header.colSpan}
                    rowSpan={rowSpan}
                    style={{ width: `${header.getSize()}px` }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className={cn(tbodyClassName)}>
          {isData ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={cn(
                  "data-[state=selected]:bg-primary/20 [&_td]:py-3",
                  {
                    "[&_td:last-child]:border-b [&_td]:border-b": caption,
                  },
                  {
                    "[&_td:last-child]:border-b [&_td]:border-b": !caption,
                  },
                  tbodyRowClassName,
                )}
                onClick={() => {
                  if (rowClickHandler) {
                    table.resetRowSelection();
                    rowClickHandler(row);
                    table.setRowSelection({ [row.id]: true });
                  }
                }}
                onDoubleClick={() => {
                  if (rowDoubleClickHandler) rowDoubleClickHandler(row);
                  console.log(row);
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className={cn(tdClassName)}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow
              className={cn(
                "data-[state=selected]:bg-primary/20 [&_td:last-child]:border-b [&_td]:border-b [&_td]:py-3",
                {
                  "[&_td:last-child]:border-t [&_td]:border-t": caption,
                },
                tbodyRowClassName,
              )}
            >
              <TableCell
                colSpan={table.options.columns.length}
                className={cn("text-center", tdClassName)}
              >
                {count ? (
                  <Skeleton className="h-6 w-full" />
                ) : (
                  <p>데이터가 없습니다.</p>
                )}
              </TableCell>
            </TableRow>
          )}
          {renderDummyRow()}
        </TableBody>
        {addRowFooter && <AddRowFooter {...addRowFooter} />}
      </Table>
    </ScrollArea>
  );
};

export { useTable, DataTable, DataTableView };
export type { DataTableProps, DataTableViewProps };
