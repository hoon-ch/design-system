import { Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "@atg-ui/scroll-area";
import { Separator } from "@atg-ui/separator";

const meta: Meta<typeof ScrollArea> = {
  title: "components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Base: Story = {
  render: (args) => (
    <ScrollArea
      {...args}
      className="h-72 w-48 rounded-md border border-slate-100 dark:border-slate-700"
    >
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 })
          .map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
          .map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm" key={tag}>
                {tag}
              </div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
      </div>
    </ScrollArea>
  ),
  args: {
    scrollbars: "both",
  },
};

export interface Artwork {
  artist: string;
  art: string;
}

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export const HorizontalElement: Story = {
  render: (args) => (
    <ScrollArea {...args} className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </ScrollArea>
  ),
  args: {
    scrollbars: "horizontal",
  },
};
