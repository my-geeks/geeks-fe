import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Shared/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['text', 'num', 'description'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    children: { control: 'text' },
  },
  args: {
    children: 'label',
    variant: 'text',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Text
export const TextMd: Story = {
  args: { variant: 'text', size: 'md', children: 'label' },
};
export const TextSm: Story = {
  args: { variant: 'text', size: 'sm', children: 'label' },
};

// Num
export const Num: Story = {
  args: { variant: 'num', children: '2' },
};

// Description
export const DescriptionSmall: Story = {
  args: { variant: 'description', size: 'sm', children: 'text' },
};
export const DescriptionMedium: Story = {
  args: { variant: 'description', size: 'md', children: 'text' },
};
export const DescriptionLarge: Story = {
  args: { variant: 'description', size: 'lg', children: 'text' },
};

// Overview
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Badge variant="text" size="md">label</Badge>
        <Badge variant="text" size="sm">label</Badge>
      </div>
      <div>
        <Badge variant="num">2</Badge>
      </div>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <Badge variant="description" size="sm">text</Badge>
        <Badge variant="description" size="md">text</Badge>
        <Badge variant="description" size="lg">text</Badge>
      </div>
    </div>
  ),
};
