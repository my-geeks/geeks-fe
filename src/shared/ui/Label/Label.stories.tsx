import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Shared/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['default', 'error'] },
    showIcon: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    variant: 'default',
    showIcon: false,
    label: 'label',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const DefaultWithIcon: Story = {
  args: { showIcon: true },
};

export const Error: Story = {
  args: { variant: 'error', label: 'error label' },
};

export const ErrorWithIcon: Story = {
  args: { variant: 'error', label: 'error label', showIcon: true },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 48 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 240 }}>
        <span style={{ fontSize: 12, color: '#aaa' }}>default</span>
        <Label variant="default" label="label" />
        <Label variant="default" label="label" showIcon />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 240 }}>
        <span style={{ fontSize: 12, color: '#aaa' }}>error</span>
        <Label variant="error" label="error label" />
        <Label variant="error" label="error label" showIcon />
      </div>
    </div>
  ),
};
