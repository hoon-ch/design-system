import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@atg-ui/button";
import { Input } from "@atg-ui/input";
import { Label } from "@atg-ui/label";

const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: "email",
    placeholder: "Email",
  },
};
export const Disabled: Story = {
  render: (args) => <Input {...args} />,
  args: { ...Default.args, disabled: true },
};
export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{args.placeholder}</Label>
      <Input {...args} id="email" />
    </div>
  ),
  args: { ...Default.args },
};
export const WithText: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email-2">{args.placeholder}</Label>
      <Input {...args} id="email-2" />
      <p className="text-sm text-slate-500">Enter your email address.</p>
    </div>
  ),
  args: { ...Default.args },
};
export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
  args: { ...Default.args },
};

export const WithGraphic: Story = {
  render: (args) => (
    <div className="relative w-[240px] rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
        <span className="text-gray-500 sm:text-sm">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="flex-none text-slate-800 dark:text-slate-600"
            aria-hidden="true"
          >
            <path d="m19 19-3.5-3.5"></path>
            <circle cx="11" cy="11" r="6"></circle>
          </svg>
        </span>
      </div>
      <Input {...args} className="pl-7" />
    </div>
  ),
  args: { ...Default.args },
};
