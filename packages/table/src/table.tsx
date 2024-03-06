import * as React from "react";

import { cn } from "@atg-ui/lib";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  // <div className="w-full overflow-auto border border-t-0">
  <table
    ref={ref}
    className={cn(
      "w-full caption-top border-separate border-spacing-0  border-b border-border-table text-base",
      className,
    )}
    {...props}
  />
  // </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "bg-muted [&_th]:border-t-2 [&_th]:border-t-foreground peer-data-[caption=true]/caption:[&_th]:border-t peer-data-[caption=true]/caption:[&_th]:border-border-table hover:[&_tr]:bg-muted",
      className,
    )}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      "[&_th:last-child]:border-0 [&_tr:last-child]:border-0",
      className,
    )}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "font-medium text-foreground hover:bg-inherit [&_tr]:bg-muted",
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "transition-colors hover:bg-primary/10 data-[state=selected]:bg-muted [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { verticalLines?: boolean }
>(({ className, verticalLines = true, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 cursor-default border-b border-border-table p-4 align-middle font-semibold text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      verticalLines ? "border-r border-border-table" : "",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & { verticalLines?: boolean }
>(({ className, verticalLines = true, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "border-b border-border-table p-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      verticalLines ? "border-r border-border-table" : "",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, children, ...props }, ref) => (
  <caption
    ref={ref}
    data-caption="true"
    className={cn(
      "border-t-4 border-border-table bg-muted py-2 text-lg font-semibold text-foreground",
      "peer/caption",
      className,
    )}
    {...props}
  >
    {children}
  </caption>
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
