import { expect, fn, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { Chip } from './Chip';
import type { ChipVariant } from './Chip';

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const meta: Meta<typeof Chip> = {
  title: 'Shared/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'outlined', 'mono', 'mono-outlined'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    trailingIcon: { control: 'boolean' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    onDismiss: { action: 'dismissed' },
  },
  args: {
    children: 'chip',
    variant: 'primary',
    size: 'sm',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

// ── Overview ────────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <Col>
      {(['primary', 'outlined', 'mono', 'mono-outlined'] as ChipVariant[]).map((variant) => (
        <Row key={variant}>
          <Chip variant={variant} size="sm">abled</Chip>
          <Chip variant={variant} size="sm" selected>selected</Chip>
          <Chip variant={variant} size="sm" disabled>disabled</Chip>
          <Chip variant={variant} size="sm" trailingIcon>with icon</Chip>
          <Chip variant={variant} size="sm" selected trailingIcon>selected+icon</Chip>
        </Row>
      ))}
    </Col>
  ),
};

// ── Interaction Tests ────────────────────────────────────────────────────────

export const ClickTest: Story = {
  args: { onClick: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByRole('button', { name: 'chip' });
    await userEvent.click(chip);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};

export const DismissTest: Story = {
  args: { selected: true, trailingIcon: true, onDismiss: fn() },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByRole('button');
    const closeImg = chip.querySelector('img')!;
    await userEvent.click(closeImg);
    await expect(args.onDismiss).toHaveBeenCalledOnce();
  },
};

// ── Primary ──────────────────────────────────────────────────────────────────

export const PrimaryAbled: Story = {
  args: { variant: 'primary' },
};
export const PrimarySelected: Story = {
  args: { variant: 'primary', selected: true },
};
export const PrimaryDisabled: Story = {
  args: { variant: 'primary', disabled: true },
};
export const PrimaryWithIcon: Story = {
  args: { variant: 'primary', trailingIcon: true },
};
export const PrimarySelectedWithIcon: Story = {
  args: { variant: 'primary', selected: true, trailingIcon: true },
};
export const PrimaryDisabledWithIcon: Story = {
  args: { variant: 'primary', disabled: true, trailingIcon: true },
};
export const PrimaryMd: Story = {
  args: { variant: 'primary', size: 'md' },
};
export const PrimaryMdSelected: Story = {
  args: { variant: 'primary', size: 'md', selected: true },
};
export const PrimaryMdDisabled: Story = {
  args: { variant: 'primary', size: 'md', disabled: true },
};
export const PrimaryMdWithIcon: Story = {
  args: { variant: 'primary', size: 'md', trailingIcon: true },
};
export const PrimaryMdSelectedWithIcon: Story = {
  args: { variant: 'primary', size: 'md', selected: true, trailingIcon: true },
};
export const PrimaryMdDisabledWithIcon: Story = {
  args: { variant: 'primary', size: 'md', disabled: true, trailingIcon: true },
};
export const PrimaryLg: Story = {
  args: { variant: 'primary', size: 'lg' },
};
export const PrimaryLgSelected: Story = {
  args: { variant: 'primary', size: 'lg', selected: true },
};
export const PrimaryLgDisabled: Story = {
  args: { variant: 'primary', size: 'lg', disabled: true },
};

// ── Outlined ─────────────────────────────────────────────────────────────────

export const OutlinedAbled: Story = {
  args: { variant: 'outlined' },
};
export const OutlinedSelected: Story = {
  args: { variant: 'outlined', selected: true },
};
export const OutlinedDisabled: Story = {
  args: { variant: 'outlined', disabled: true },
};
export const OutlinedWithIcon: Story = {
  args: { variant: 'outlined', trailingIcon: true },
};
export const OutlinedSelectedWithIcon: Story = {
  args: { variant: 'outlined', selected: true, trailingIcon: true },
};
export const OutlinedDisabledWithIcon: Story = {
  args: { variant: 'outlined', disabled: true, trailingIcon: true },
};
export const OutlinedMd: Story = {
  args: { variant: 'outlined', size: 'md' },
};
export const OutlinedMdSelected: Story = {
  args: { variant: 'outlined', size: 'md', selected: true },
};
export const OutlinedMdDisabled: Story = {
  args: { variant: 'outlined', size: 'md', disabled: true },
};
export const OutlinedMdWithIcon: Story = {
  args: { variant: 'outlined', size: 'md', trailingIcon: true },
};
export const OutlinedMdSelectedWithIcon: Story = {
  args: { variant: 'outlined', size: 'md', selected: true, trailingIcon: true },
};
export const OutlinedMdDisabledWithIcon: Story = {
  args: { variant: 'outlined', size: 'md', disabled: true, trailingIcon: true },
};
export const OutlinedLg: Story = {
  args: { variant: 'outlined', size: 'lg' },
};
export const OutlinedLgSelected: Story = {
  args: { variant: 'outlined', size: 'lg', selected: true },
};
export const OutlinedLgDisabled: Story = {
  args: { variant: 'outlined', size: 'lg', disabled: true },
};

// ── Mono ─────────────────────────────────────────────────────────────────────

export const MonoAbled: Story = {
  args: { variant: 'mono' },
};
export const MonoSelected: Story = {
  args: { variant: 'mono', selected: true },
};
export const MonoDisabled: Story = {
  args: { variant: 'mono', disabled: true },
};
export const MonoWithIcon: Story = {
  args: { variant: 'mono', trailingIcon: true },
};
export const MonoSelectedWithIcon: Story = {
  args: { variant: 'mono', selected: true, trailingIcon: true },
};
export const MonoDisabledWithIcon: Story = {
  args: { variant: 'mono', disabled: true, trailingIcon: true },
};
export const MonoMd: Story = {
  args: { variant: 'mono', size: 'md' },
};
export const MonoMdSelected: Story = {
  args: { variant: 'mono', size: 'md', selected: true },
};
export const MonoMdDisabled: Story = {
  args: { variant: 'mono', size: 'md', disabled: true },
};
export const MonoMdWithIcon: Story = {
  args: { variant: 'mono', size: 'md', trailingIcon: true },
};
export const MonoMdSelectedWithIcon: Story = {
  args: { variant: 'mono', size: 'md', selected: true, trailingIcon: true },
};
export const MonoMdDisabledWithIcon: Story = {
  args: { variant: 'mono', size: 'md', disabled: true, trailingIcon: true },
};
export const MonoLg: Story = {
  args: { variant: 'mono', size: 'lg' },
};
export const MonoLgSelected: Story = {
  args: { variant: 'mono', size: 'lg', selected: true },
};
export const MonoLgDisabled: Story = {
  args: { variant: 'mono', size: 'lg', disabled: true },
};

// ── Mono Outlined ─────────────────────────────────────────────────────────────

export const MonoOutlinedAbled: Story = {
  args: { variant: 'mono-outlined' },
};
export const MonoOutlinedSelected: Story = {
  args: { variant: 'mono-outlined', selected: true },
};
export const MonoOutlinedDisabled: Story = {
  args: { variant: 'mono-outlined', disabled: true },
};
export const MonoOutlinedWithIcon: Story = {
  args: { variant: 'mono-outlined', trailingIcon: true },
};
export const MonoOutlinedSelectedWithIcon: Story = {
  args: { variant: 'mono-outlined', selected: true, trailingIcon: true },
};
export const MonoOutlinedDisabledWithIcon: Story = {
  args: { variant: 'mono-outlined', disabled: true, trailingIcon: true },
};
export const MonoOutlinedMd: Story = {
  args: { variant: 'mono-outlined', size: 'md' },
};
export const MonoOutlinedMdSelected: Story = {
  args: { variant: 'mono-outlined', size: 'md', selected: true },
};
export const MonoOutlinedMdDisabled: Story = {
  args: { variant: 'mono-outlined', size: 'md', disabled: true },
};
export const MonoOutlinedMdWithIcon: Story = {
  args: { variant: 'mono-outlined', size: 'md', trailingIcon: true },
};
export const MonoOutlinedMdSelectedWithIcon: Story = {
  args: { variant: 'mono-outlined', size: 'md', selected: true, trailingIcon: true },
};
export const MonoOutlinedMdDisabledWithIcon: Story = {
  args: { variant: 'mono-outlined', size: 'md', disabled: true, trailingIcon: true },
};
export const MonoOutlinedLg: Story = {
  args: { variant: 'mono-outlined', size: 'lg' },
};
export const MonoOutlinedLgSelected: Story = {
  args: { variant: 'mono-outlined', size: 'lg', selected: true },
};
export const MonoOutlinedLgDisabled: Story = {
  args: { variant: 'mono-outlined', size: 'lg', disabled: true },
};
