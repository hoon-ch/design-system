import { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@atg-ui/table";

const meta: Meta<typeof Table> = {
  title: "components/Table/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Base: Story = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>최근 청구서 목록</TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-secondary">
          <TableHead className="w-[100px]">청구서</TableHead>
          <TableHead>상태</TableHead>
          <TableHead>지불 방법</TableHead>
          <TableHead className="text-right">금액</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  args: {},
};

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "결제 완료",
    totalAmount: "250원",
    paymentMethod: "신용카드",
  },
  {
    invoice: "INV002",
    paymentStatus: "대기중",
    totalAmount: "150원",
    paymentMethod: "네이버 페이",
  },
  {
    invoice: "INV003",
    paymentStatus: "결제 실패",
    totalAmount: "350원",
    paymentMethod: "카카오 페이",
  },
  {
    invoice: "INV004",
    paymentStatus: "결제 완료",
    totalAmount: "450원",
    paymentMethod: "신용카드",
  },
  {
    invoice: "INV005",
    paymentStatus: "결제 완료",
    totalAmount: "550원",
    paymentMethod: "네이버 페이",
  },
  {
    invoice: "INV006",
    paymentStatus: "대기중",
    totalAmount: "200원",
    paymentMethod: "카카오 페이",
  },
  {
    invoice: "INV007",
    paymentStatus: "결제 실패",
    totalAmount: "300원",
    paymentMethod: "신용카드",
  },
];
