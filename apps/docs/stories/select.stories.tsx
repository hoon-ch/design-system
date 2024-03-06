import { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@atg-ui/select";

const meta: Meta<typeof Select> = {
  title: "components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Base: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="항목을 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>과일</SelectLabel>
          <SelectItem value="apple">사과</SelectItem>
          <SelectItem value="banana">바나나</SelectItem>
          <SelectItem value="blueberry">블루베리</SelectItem>
          <SelectItem value="grapes">포도</SelectItem>
          <SelectItem value="pineapple">파인애플</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>채소</SelectLabel>
          <SelectItem value="aubergine">가지</SelectItem>
          <SelectItem value="broccoli">브로콜리</SelectItem>
          <SelectItem value="carrot" disabled>
            당근
          </SelectItem>
          <SelectItem value="courgette">애호박</SelectItem>
          <SelectItem value="leek">부추</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>육류</SelectLabel>
          <SelectItem value="beef">소고기</SelectItem>
          <SelectItem value="chicken">닭고기</SelectItem>
          <SelectItem value="lamb">양고기</SelectItem>
          <SelectItem value="pork">돼지고기</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  args: {},
};
