import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckOption } from './CheckOption';

const meta: Meta<typeof CheckOption> = {
  title: 'Shared/CheckOption',
  component: CheckOption,
  tags: ['autodocs'],
  argTypes: {
    shape: { control: 'radio', options: ['circle', 'square'] },
    size: { control: 'radio', options: ['sm', 'lg'] },
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    shape: 'circle',
    size: 'sm',
    checked: false,
    label: 'text',
  },
};

export default meta;
type Story = StoryObj<typeof CheckOption>;

export const Default: Story = {};

export const Checked: Story = {
  args: { checked: true },
};

export const AllStates: Story = {
  render: () => {
    const shapes = ['circle', 'square'] as const;
    const sizes = ['sm', 'lg'] as const;

    return (
      <div style={{ display: 'flex', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 12, color: '#aaa' }}>default</span>
          {sizes.map(size =>
            shapes.map(shape => (
              <CheckOption key={`${size}-${shape}`} shape={shape} size={size} checked={false} label="text" />
            ))
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ fontSize: 12, color: '#aaa' }}>checked</span>
          {sizes.map(size =>
            shapes.map(shape => (
              <CheckOption key={`${size}-${shape}`} shape={shape} size={size} checked={true} label="text" />
            ))
          )}
        </div>
      </div>
    );
  },
};

export const Interactive: Story = {
  render: () => {
    const [states, setStates] = useState({
      smCircle: false,
      smSquare: false,
      lgCircle: false,
      lgSquare: false,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <CheckOption shape="circle" size="sm" checked={states.smCircle} label="text" onChange={v => setStates(s => ({ ...s, smCircle: v }))} />
        <CheckOption shape="square" size="sm" checked={states.smSquare} label="text" onChange={v => setStates(s => ({ ...s, smSquare: v }))} />
        <CheckOption shape="circle" size="lg" checked={states.lgCircle} label="text" onChange={v => setStates(s => ({ ...s, lgCircle: v }))} />
        <CheckOption shape="square" size="lg" checked={states.lgSquare} label="text" onChange={v => setStates(s => ({ ...s, lgSquare: v }))} />
      </div>
    );
  },
};
