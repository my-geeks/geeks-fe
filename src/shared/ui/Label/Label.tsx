import { styled } from 'styled-components';
import blackCircleCheckFill from '../../assets/icons/commons/black-circle-check-fill.svg';
import redCircleCheckFill from '../../assets/icons/commons/red-circle-check-fill.svg';

export type LabelVariant = 'default' | 'error';

interface LabelProps {
  variant?: LabelVariant;
  label?: string;
  showIcon?: boolean;
}

const Wrapper = styled.div<{ $variant: LabelVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 0;
  width: 100%;
  border-radius: 12px;
  background-color: ${({ theme, $variant }) =>
    $variant === 'error' ? theme.colors.red50 : theme.colors.gray700};
`;

const LabelText = styled.span<{ $variant: LabelVariant }>`
  ${({ theme }) => theme.fonts.body1SemiBold}
  color: ${({ theme, $variant }) =>
    $variant === 'error' ? theme.colors.red500 : theme.colors.white};
`;

export function Label({ variant = 'default', label, showIcon = false }: LabelProps) {
  const icon = variant === 'error' ? redCircleCheckFill : blackCircleCheckFill;

  return (
    <Wrapper $variant={variant}>
      {showIcon && <img src={icon} alt="" width={24} height={24} />}
      {label && <LabelText $variant={variant}>{label}</LabelText>}
    </Wrapper>
  );
}
