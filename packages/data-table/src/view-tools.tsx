"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { RxMixerHorizontal } from "react-icons/rx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@atg-ui/select";
import { Button } from "@atg-ui/button";
import { Input } from "@atg-ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@atg-ui/dropdown-menu";
import { useTable } from "./data-table";
import { cn } from "@atg-ui/lib";

const DataTableViewOptions: React.FC = () => {
  const { table } = useTable();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-9 lg:flex"
        >
          <RxMixerHorizontal className="mr-2 h-4 w-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DataTableRowsPerPage: React.FC = () => {
  const { table } = useTable();
  return (
    <Select
      value={`${table.getState().pagination.pageSize}`}
      onValueChange={(value) => {
        table.setPageSize(Number(value));
      }}
    >
      <SelectTrigger className="h-9 w-20">
        <SelectValue placeholder={table.getState().pagination.pageSize} />
      </SelectTrigger>
      <SelectContent side="bottom">
        {[5, 10, 20, 30, 40, 50].map((pageSize) => (
          <SelectItem
            className="text-right"
            key={pageSize}
            value={`${pageSize}`}
          >
            {pageSize}개
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

interface DataTableStringFilterProps {
  className?: string;
  placeholder?: string;
  accessorKey?: string;
  global?: boolean;
}

const DataTableStringFilter: React.FC<DataTableStringFilterProps> = ({
  className,
  placeholder,
  accessorKey = "",
  global = false,
}) => {
  const { table } = useTable();
  return (
    <Input
      placeholder={placeholder ?? `Filter ${accessorKey}...`}
      value={table.getColumn(accessorKey)?.getFilterValue() as string}
      onChange={(event) => {
        if (global) {
          table.setGlobalFilter(event.target.value);
          return;
        } else if (accessorKey !== "") {
          console.log(event.target.value);
          table.getColumn(accessorKey)?.setFilterValue(event.target.value);
        }
      }}
      className={cn("max-w-sm", className)}
    />
  );
};

export { DataTableViewOptions, DataTableRowsPerPage, DataTableStringFilter };
export type { DataTableStringFilterProps };
