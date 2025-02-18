import { Meta, StoryObj } from "@storybook/react";
import Button from "./button";
import { action } from '@storybook/addon-actions';
export default {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['idle', 'success', 'error'], 
    },
    backgroundColor:{
      control: 'color'
    }
  },
  
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    type: "error",
    name: "Button",
    onClick: action('on-click'),
    backgroundColor: '#FFFFF'
  },
};
export const Primary: Story = {
  args: {
    type: "idle",
    name: "Progress",
  },
};

export const Group: Story = {
  render: (args) => {
    return (
      <div className="flex items-center justify-center w-20 h-32 flex-col border border-gray-500">
        <Button {...args} type="idle" name="Progress" />
        <Button {...args} type="success" name="Success" />
        <Button {...args} type="error" name="Error"/>
      </div>
    );
  },
};
