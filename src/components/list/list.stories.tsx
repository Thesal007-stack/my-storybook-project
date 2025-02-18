import type { Meta, StoryObj } from '@storybook/react';
import  List from './list';
import  {ListItems} from './list-items';

const meta: Meta<typeof List> = {
  title: 'Components/List', 
  component: List,
  subcomponents: { ListItems: ListItems as React.ComponentType<unknown>  }, 
};

export default meta;

type Story = StoryObj<typeof List>;

export const Empty: Story = {};

export const OneItem: Story = {
  render: (args) => (
    <List {...args}>
      <ListItems>First Item</ListItems>
    </List>
  ),
};

export const MultipleItems: Story = {
  render: (args) => (
    <List {...args}>
      <ListItems>First Item</ListItems>
      <ListItems>Second Item</ListItems>
      <ListItems>Third Item</ListItems>
    </List>
  ),
};