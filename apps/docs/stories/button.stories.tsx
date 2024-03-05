import type { Meta, StoryObj } from "@storybook/react";
import { LuLoader2, LuMail } from "react-icons/lu";
import { RxFilePlus } from "react-icons/rx";

import { Button } from "@atg-ui/button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Base: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {},
};

export const Outline: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "ghost",
  },
};

export const Secondary: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "destructive",
  },
};

export const SemiDestructive: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "semi-destructive",
  },
};

export const Link: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  args: {
    variant: "link",
  },
};

export const Loading: Story = {
  render: (args) => (
    <Button {...args}>
      <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
      Button
    </Button>
  ),
  args: {
    variant: "outline",
  },
};

export const Icon: Story = {
  render: (args) => (
    <Button {...args}>
      <RxFilePlus className="h-4 w-4" />
    </Button>
  ),
  args: {
    variant: "outline",
    size: "icon",
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <LuMail className="mr-2 h-4 w-4" /> Login with Email Button
    </Button>
  ),
  args: {
    variant: "secondary",
  },
};
