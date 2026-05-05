import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Shared/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Off: Story = {
  args: { checked: false },
};

export const On: Story = {
  args: { checked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Toggle checked={false} />
      <Toggle checked={true} />
      <Toggle disabled />
    </div>
  ),
};
