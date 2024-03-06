import { Meta, StoryObj } from "@storybook/react";
import {
  LuCloud,
  LuCreditCard,
  LuGithub,
  LuKeyboard,
  LuLifeBuoy,
  LuLogOut,
  LuMail,
  LuMessageSquare,
  LuPlus,
  LuPlusCircle,
  LuSettings,
  LuUser,
  LuUserPlus,
  LuUsers,
} from "react-icons/lu";

import { Button } from "@atg-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@atg-ui/dropdown-menu";

const meta: Meta<typeof DropdownMenu> = {
  title: "components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Base: Story = {
  render: (args) => (
    <DropdownMenu {...args}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">메뉴 열기</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>계정 정보</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LuUser className="mr-2 h-4 w-4" />
            <span>프로필</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LuCreditCard className="mr-2 h-4 w-4" />
            <span>청구서</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LuSettings className="mr-2 h-4 w-4" />
            <span>설정</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LuKeyboard className="mr-2 h-4 w-4" />
            <span>키보드 단축키</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LuUsers className="mr-2 h-4 w-4" />
            <span>팀 정보</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <LuUserPlus className="mr-2 h-4 w-4" />
              <span>초대하기</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <LuMail className="mr-2 h-4 w-4" />
                  <span>이메일</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LuMessageSquare className="mr-2 h-4 w-4" />
                  <span>메시지</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LuPlusCircle className="mr-2 h-4 w-4" />
                  <span>더보기...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <LuPlus className="mr-2 h-4 w-4" />
            <span>새로운 팀 생성</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LuGithub className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LuLifeBuoy className="mr-2 h-4 w-4" />
          <span>고객지원</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <LuCloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LuLogOut className="mr-2 h-4 w-4" />
          <span>로그아웃</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  args: {},
};
