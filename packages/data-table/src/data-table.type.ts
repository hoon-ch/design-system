import { CellContext, ColumnDefBase } from "@tanstack/react-table";

interface ExtendedColumnDef<TData> extends ColumnDefBase<TData, any> {
  accessorKey?: keyof TData;
  header?: string | ((context?: any) => React.ReactNode);
  columns?: ExtendedColumnDef<any>[];
  cell?: (props: CellContext<TData, any>) => React.ReactNode;
  useRowSpan?: boolean;
}

export type { ExtendedColumnDef };
