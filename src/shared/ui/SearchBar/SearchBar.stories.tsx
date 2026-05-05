import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Shared/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
  },
  args: {
    placeholder: 'text',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

export const Focused: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <SearchBar {...args} autoFocus />
    </div>
  ),
};

export const Filled: Story = {
  args: { value: 'text', onChange: () => {} },
};

export const AllStates: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <SearchBar {...args} placeholder="Default" />
      <SearchBar {...args} placeholder="Focused" autoFocus />
      <SearchBar {...args} value="text" onChange={() => {}} />
    </div>
  ),
};
