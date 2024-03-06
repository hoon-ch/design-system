import { Meta, StoryObj } from "@storybook/react";

import { TableSkeleton } from "@atg-ui/skeleton";

const meta: Meta<typeof TableSkeleton> = {
  title: "components/Skeleton/table",
  component: TableSkeleton,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TableSkeleton>;

export const Table: Story = {
  render: (args) => <TableSkeleton {...args} />,
  args: {},
};
