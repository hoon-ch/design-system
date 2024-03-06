import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from "@atg-ui/table";
import { Skeleton } from "./skeleton";
import { cn } from "@atg-ui/lib";

interface TableSkeletonProps {
  colCount?: number;
  rowCount?: number;
  className?: string;
  caption?: boolean;
  error?: boolean;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({
  colCount = 5,
  rowCount = 5,
  className,
  caption = false,
  error = false,
}) => {
  const skeletonClassName = cn(
    "h-4 w-20 bg-muted-foreground/70",
    { "animate-none": error },
    className,
  );
  return (
    <Table>
      {caption && (
        <TableCaption>
          <Skeleton className={skeletonClassName} />
        </TableCaption>
      )}
      <TableHeader>
        <TableRow>
          {Array.from({ length: colCount }, (_, index) => (
            <TableHead key={`th-tr-th-${index}`}>
              <Skeleton className={skeletonClassName} />
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {error ? (
          <TableRow>
            <TableCell
              colSpan={colCount}
              className={"h-64 text-center text-xl"}
            >
              데이터를 가져올 수 없습니다.
            </TableCell>
          </TableRow>
        ) : (
          Array.from({ length: rowCount }, (_, index) => (
            <TableRow key={`tb-tr-${index}`}>
              {Array.from({ length: colCount }, (_, index) => (
                <TableCell key={`tb-tr-td-${index}`}>
                  <Skeleton className={skeletonClassName} />
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
        {}
      </TableBody>
    </Table>
  );
};

export { TableSkeleton };
