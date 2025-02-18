import type { Meta, StoryObj } from "@storybook/react";
import Card from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const EmptyCard: Story = {
  render: (args) => {
    return <Card {...args} />;
  },
};
