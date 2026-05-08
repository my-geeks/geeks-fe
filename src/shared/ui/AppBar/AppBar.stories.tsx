import type { Meta, StoryObj } from '@storybook/react';
import { AppBar } from './AppBar';

const meta: Meta<typeof AppBar> = {
  title: 'Shared/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  argTypes: {
    back: { control: 'boolean' },
    title: { control: 'text' },
    titleAlign: { control: 'select', options: ['left', 'center'] },
    titleBelow: { control: 'boolean' },
    showSearch: { control: 'boolean' },
    showBell: { control: 'boolean' },
    showMore: { control: 'boolean' },
  },
  args: {
    title: 'title',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

// Back only
export const BackOnly: Story = {
  args: { back: true, title: undefined },
};

// Back + title
export const BackWithTitle: Story = {
  args: { back: true },
};

// Back + title + more
export const BackWithTitleMore: Story = {
  args: { back: true, showMore: true },
};

// Back + title + search + more
export const BackWithTitleSearchMore: Story = {
  args: { back: true, showSearch: true, showMore: true },
};

// Back + title + search + bell + more
export const BackWithTitleAllIcons: Story = {
  args: { back: true, showSearch: true, showBell: true, showMore: true },
};

// No back, icons only
export const MoreOnly: Story = {
  args: { title: undefined, showMore: true },
};

export const SearchMore: Story = {
  args: { title: undefined, showSearch: true, showMore: true },
};

export const AllIconsNoBack: Story = {
  args: { title: undefined, showSearch: true, showBell: true, showMore: true },
};

// Title only (no back)
export const TitleOnly: Story = {
  args: {},
};

export const TitleWithMore: Story = {
  args: { showMore: true },
};

export const TitleWithSearchMore: Story = {
  args: { showSearch: true, showMore: true },
};

export const TitleWithAllIcons: Story = {
  args: { showSearch: true, showBell: true, showMore: true },
};

// Title below
export const BackTitleBelow: Story = {
  args: { back: true, titleBelow: true },
};

export const BackTitleBelowMore: Story = {
  args: { back: true, titleBelow: true, showMore: true },
};

export const BackTitleBelowSearchMore: Story = {
  args: { back: true, titleBelow: true, showSearch: true, showMore: true },
};

export const BackTitleBelowAllIcons: Story = {
  args: { back: true, titleBelow: true, showSearch: true, showBell: true, showMore: true },
};

// Centered title
export const BackTitleCenter: Story = {
  args: { back: true, titleAlign: 'center' },
};
