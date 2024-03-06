import React from "react";
import { TableCell, TableFooter, TableRow } from "@atg-ui/table";
import { Button } from "@atg-ui/button";
import { useTable } from "./data-table";
import { TableMeta } from "@tanstack/react-table";

interface FooterProps {
  onAddRow?: () => void;
  text?: string;
}

interface CustomTableMeta<TData> extends TableMeta<TData> {
  addRow: () => void;
  removeSelectedRows: (rows: number[]) => void;
}

const AddRowFooter: React.FC<FooterProps> = ({ onAddRow, text }) => {
  const { table } = useTable();
  const meta = table.options.meta as CustomTableMeta<any>;
  const selectedRows = table.getSelectedRowModel().rows;

  const removeRows = () => {
    if (!meta) return;
    meta.removeSelectedRows(
      table.getSelectedRowModel().rows.map((row) => row.index),
    );
    table.resetRowSelection();
  };

  return (
    <TableFooter className="sticky bottom-0 z-10">
      <TableRow className="hover:bg-muted">
        <TableCell colSpan={table.getAllColumns().length}>
          <div className="flex justify-end">
            <Button
              variant="outline"
              className="bg-background"
              onClick={meta?.addRow}
            >
              {text ?? "Add Row +"}
            </Button>
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

export { AddRowFooter };
export type { FooterProps };
