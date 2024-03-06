import { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@atg-ui/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Base: Story = {
  render: (args) => (
    <div className="flex items-start space-x-2">
      <Checkbox {...args} id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          이용 약관에 동의하기
        </label>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          귀하는 당사의 서비스 약관 및 개인정보처리방침에 동의합니다.
        </p>
      </div>
    </div>
  ),
  args: {},
};
export const Disabled: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} id="terms2" />
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        이용 약관에 동의하기
      </label>
    </div>
  ),
  args: {
    disabled: true,
  },
};
