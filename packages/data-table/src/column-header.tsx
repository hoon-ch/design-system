import { RxArrowDown, RxArrowUp, RxCaretSort, RxEyeNone } from "react-icons/rx";
import { Column, TableMeta } from "@tanstack/react-table";

import { cn } from "@atg-ui/lib";
import { Button } from "@atg-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@atg-ui/dropdown-menu";
import { useState } from "react";
import { useTable } from "./data-table";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <RxArrowDown className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <RxArrowUp className="ml-2 h-4 w-4" />
            ) : (
              <RxCaretSort className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <RxArrowUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <RxArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <RxEyeNone className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export interface SortableTableMeta<T> extends TableMeta<T> {
  setSortColumn: (column: string) => void;
  setSortOrder: (order: string) => void;
  sortColumn: string;
  sortOrder: string;
}

export function SortableHeader<TData, TValue>({
  text,
  column,
}: {
  text?: string;
  column: Column<any, unknown>;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { id: accessorKey } = column;
  const { table } = useTable();

  try {
    const { setSortColumn, setSortOrder, sortColumn, sortOrder } = table.options
      ?.meta as SortableTableMeta<TData>;
    const onClickHandler = () => {
      if (sortColumn === accessorKey) {
        switch (sortOrder) {
          case "DESC":
            setSortOrder("ASC");
            break;
          case "ASC":
            setSortColumn("");
            setSortOrder("");
            break;
          case "":
            setSortOrder("DESC");
            break;
        }
      } else {
        setSortColumn(accessorKey);
        setSortOrder("DESC");
      }
    };

    if (
      setSortColumn === undefined ||
      setSortOrder === undefined ||
      sortColumn === undefined ||
      sortOrder === undefined
    ) {
      throw new Error(
        "SortableHeader: meta is not sortable. Please Set 'sortOrder', 'sortColumn','setSortOrder','setSortColumn' on DataTable.meta",
      );
    }

    return (
      <button
        onClick={onClickHandler}
        className="flex w-full items-center justify-center gap-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>{text ? text : accessorKey}</span>
        {sortColumn === accessorKey ? (
          sortOrder === "DESC" ? (
            <RxArrowDown className="h-4 w-4" />
          ) : (
            <RxArrowUp className="h-4 w-4" />
          )
        ) : (
          <RxCaretSort className="h-4 w-4" />
        )}
      </button>
    );
  } catch (error) {
    return text ? text : accessorKey;
  }
}
