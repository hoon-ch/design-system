import { Meta, StoryObj } from "@storybook/react";

import { Label } from "@atg-ui/label";

const meta: Meta<typeof Label> = {
  title: "components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Base: Story = {
  render: (args) => (
    <Label {...args} htmlFor="email">
      Your email address
    </Label>
  ),
  args: {},
};
