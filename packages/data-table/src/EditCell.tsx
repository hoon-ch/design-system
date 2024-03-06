"use client";

import { Button } from "@atg-ui/button";
import { MouseEvent } from "react";
import { RxCheck, RxCross2, RxPencil1, RxTrash } from "react-icons/rx";

export const EditCell = ({ row, table }: { row: any; table: any }) => {
  const meta = table.options.meta;
  const validRow = meta?.validRows[row.id];
  const disableSubmit = validRow
    ? Object.values(validRow)?.some((item) => !item)
    : false;

  const setEditedRows = (e: MouseEvent<HTMLButtonElement>) => {
    const elName = e.currentTarget.name;
    meta?.setEditedRows((old: []) => ({
      ...old,
      [row.id]: !old[row.id],
    }));
    if (elName !== "edit") {
      e.currentTarget.name === "cancel"
        ? meta?.revertData(row.index)
        : meta?.updateRow(row.index);
    }
  };

  const removeRow = () => {
    meta?.removeRow(row.index);
  };

  return (
    <div className="flex items-center justify-center gap-1">
      {meta?.editedRows[row.id] ? (
        <div className="flex">
          <Button
            variant={"outline"}
            className="p-2"
            onClick={setEditedRows}
            name="cancel"
          >
            <RxCross2 className="h-4 w-4" />
          </Button>
          <Button
            variant={"outline"}
            className="p-2 hover:bg-primary hover:text-primary-foreground"
            onClick={setEditedRows}
            name="done"
            disabled={disableSubmit}
          >
            <RxCheck className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="flex">
          <Button
            variant={"outline"}
            className="p-2"
            onClick={setEditedRows}
            name="edit"
          >
            <RxPencil1 className="h-4 w-4" />
          </Button>
          <Button
            variant={"semi-destructive"}
            className="border border-border p-2"
            onClick={removeRow}
            name="remove"
          >
            <RxTrash className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
