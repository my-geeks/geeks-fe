import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'outlined'] },
    size: { control: 'select', options: ['xl', 'lg', 'md', 'sm', 'xs'] },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    leftIcon: { control: 'boolean' },
    rightArrow: { control: 'boolean' },
    subText: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary
export const Primary: Story = {
  args: { variant: 'primary' },
};
export const PrimarySelected: Story = {
  args: { variant: 'primary', selected: true },
};
export const PrimaryDisabled: Story = {
  args: { variant: 'primary', disabled: true },
};
export const PrimaryWithIcons: Story = {
  args: { variant: 'primary', leftIcon: true, rightArrow: true },
};
export const PrimaryWithSubText: Story = {
  args: { variant: 'primary', leftIcon: true, rightArrow: true, subText: 'Text', fullWidth: true },
};

// Secondary
export const Secondary: Story = {
  args: { variant: 'secondary', leftIcon: true, rightArrow: true },
};
export const SecondarySelected: Story = {
  args: { variant: 'secondary', selected: true, leftIcon: true, rightArrow: true },
};
export const SecondaryWithSubText: Story = {
  args: { variant: 'secondary', leftIcon: true, rightArrow: true, subText: 'Text', fullWidth: true },
};
export const SecondaryWithSubTextSelected: Story = {
  args: { variant: 'secondary', selected: true, leftIcon: true, rightArrow: true, subText: 'Text', fullWidth: true },
};

// Tertiary
export const Tertiary: Story = {
  args: { variant: 'tertiary' },
};
export const TertiarySelected: Story = {
  args: { variant: 'tertiary', selected: true },
};
export const TertiaryDisabled: Story = {
  args: { variant: 'tertiary', disabled: true },
};
export const TertiaryWithIcon: Story = {
  args: { variant: 'tertiary', leftIcon: true },
};
export const TertiaryWithIconSelected: Story = {
  args: { variant: 'tertiary', selected: true, leftIcon: true },
};
export const TertiaryWithIconDisabled: Story = {
  args: { variant: 'tertiary', disabled: true, leftIcon: true },
};

// Outlined
export const Outlined: Story = {
  args: { variant: 'outlined', leftIcon: true },
};
export const OutlinedSelected: Story = {
  args: { variant: 'outlined', selected: true, leftIcon: true },
};
export const OutlinedDisabled: Story = {
  args: { variant: 'outlined', disabled: true, leftIcon: true },
};

// Overview
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary" leftIcon rightArrow>Secondary</Button>
      <Button {...args} variant="tertiary">Tertiary</Button>
      <Button {...args} variant="outlined" leftIcon>Outlined</Button>
    </div>
  ),
  args: { size: 'md' },
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Button {...args} size="xl">XL</Button>
      <Button {...args} size="lg">LG</Button>
      <Button {...args} size="md">MD</Button>
      <Button {...args} size="sm">SM</Button>
      <Button {...args} size="xs">XS</Button>
    </div>
  ),
  args: { variant: 'primary' },
};

export const AllStates: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button {...args}>Default</Button>
      <Button {...args} selected>Selected</Button>
      <Button {...args} disabled>Disabled</Button>
      <Button {...args} selected disabled>Selected + Disabled</Button>
    </div>
  ),
  args: { variant: 'primary', size: 'md' },
};
