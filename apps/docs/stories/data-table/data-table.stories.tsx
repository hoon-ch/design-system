import type { Meta, StoryObj } from "@storybook/react";
import {
  DataTable,
  DataTableView,
  DataTableStringFilter,
  DataTablePagination,
  DataTableRowsPerPage,
  DataTableViewOptions,
} from "@atg-ui/data-table";
import type {
  DataTableProps,
  DataTableStringFilterProps,
  DataTableViewProps,
} from "@atg-ui/data-table";
import {
  Payment,
  generatePayment,
  columns as paymentColumns,
} from "@atg-ui/data-table";

const meta: Meta = {
  title: "components/DataTable",
  component: DataTable,
};
export default meta;

// 스토리북의 count arg 를 위한 타입
type CountArg = {
  count: number;
};

export const Default: StoryObj<
  CountArg & DataTableProps<Payment> & DataTableViewProps
> = {
  render: (args) => {
    const { count, columns, height } = args;
    const data = generatePayment(count);
    return (
      <DataTable data={data} columns={columns}>
        <DataTableView height={height} />
      </DataTable>
    );
  },
  args: {
    count: 2,
    columns: paymentColumns,
    height: undefined,
  },
};

export const ViewOptions: StoryObj<
  CountArg & DataTableProps<Payment> & DataTableViewProps
> = {
  render: (args) => {
    const { count, columns, height } = args;
    const data = generatePayment(count);
    return (
      <DataTable data={data} columns={columns}>
        <div className="flex py-2">
          <DataTableViewOptions />
        </div>
        <DataTableView height={height} />
      </DataTable>
    );
  },
  args: {
    count: 3,
    columns: paymentColumns,
    height: undefined,
  },
};

export const StringFilter: StoryObj<
  CountArg &
    DataTableProps<Payment> &
    DataTableViewProps &
    DataTableStringFilterProps
> = {
  render: (args) => {
    const { count, columns, height, accessorKey, placeholder } = args;
    const data = generatePayment(count);
    return (
      <DataTable data={data} columns={columns}>
        <DataTableStringFilter
          className="my-2"
          accessorKey={accessorKey}
          placeholder={placeholder}
        />
        <DataTableView height={height} />
      </DataTable>
    );
  },
  args: {
    count: 5,
    columns: paymentColumns,
    height: 300,
    accessorKey: "email",
    placeholder: undefined,
  },
};

export const Pagination: StoryObj<
  CountArg & DataTableProps<Payment> & DataTableViewProps
> = {
  render: (args) => {
    const { count, columns, height } = args;
    const data = generatePayment(count);
    return (
      <DataTable data={data} columns={columns} manualPagination={false}>
        <DataTableView height={height} />
        <DataTablePagination />
      </DataTable>
    );
  },
  args: {
    count: 501,
    columns: paymentColumns,
    height: 400,
  },
};

export const RowsPerPage: StoryObj<
  CountArg & DataTableProps<Payment> & DataTableViewProps
> = {
  render: (args) => {
    const { count, columns, height } = args;
    const data = generatePayment(count);
    return (
      <DataTable data={data} columns={columns}>
        <div className="flex items-end p-2">
          <DataTableRowsPerPage />
        </div>
        <DataTableView className="h-[30dvh]" height={height} />
        <DataTablePagination />
      </DataTable>
    );
  },
  args: {
    count: 200,
    columns: paymentColumns,
    height: undefined,
  },
};
