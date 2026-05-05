import { css, styled } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outlined';
export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  selected?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  subText?: string;
  children: React.ReactNode;
}

type StyledProps = {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $selected?: boolean;
  $fullWidth?: boolean;
  $hasSubText?: boolean;
};

const sizeMap = {
  xl: { height: '56px', padding: '0 20px', radius: '16px', font: 'body1Bold' as const },
  lg: { height: '48px', padding: '0 16px', radius: '12px', font: 'body1Bold' as const },
  md: { height: '40px', padding: '0 14px', radius: '10px', font: 'body1Medium' as const },
  sm: { height: '36px', padding: '0 12px', radius: '8px',  font: 'body2SemiBold' as const },
  xs: { height: '28px', padding: '0 10px', radius: '6px',  font: 'body3SemiBold' as const },
};

const StyledButton = styled.button<StyledProps>`
  display: inline-flex;
  align-items: ${({ $hasSubText }) => ($hasSubText ? 'flex-start' : 'center')};
  justify-content: center;
  flex-direction: ${({ $hasSubText }) => ($hasSubText ? 'column' : 'row')};
  gap: ${({ $hasSubText }) => ($hasSubText ? '0' : '6px')};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $size, $hasSubText, theme }) => css`
    height: ${$hasSubText ? 'auto' : sizeMap[$size].height};
    padding: ${$hasSubText ? `10px ${sizeMap[$size].padding.split(' ')[1]}` : sizeMap[$size].padding};
    border-radius: ${sizeMap[$size].radius};
    ${theme.fonts[sizeMap[$size].font]}
  `}

  ${({ $variant, $selected, theme }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background: ${$selected ? theme.colors.yellow700 : theme.colors.yellow500};
          color: ${theme.colors.gray900};
          border: none;
          &:hover:not(:disabled) { background: ${theme.colors.yellow600}; }
          &:disabled { background: ${theme.colors.gray100}; color: ${theme.colors.gray400}; }
        `;
      case 'secondary':
        return css`
          background: ${$selected ? theme.colors.yellowGray200 : theme.colors.yellowGray50};
          color: ${theme.colors.yellowGray800};
          border: 1px solid ${theme.colors.yellowGray300};
          &:hover:not(:disabled) { background: ${theme.colors.yellowGray100}; }
          &:disabled { background: ${theme.colors.gray50}; color: ${theme.colors.gray400}; border-color: ${theme.colors.gray200}; }
        `;
      case 'tertiary':
        return css`
          background: ${$selected ? theme.colors.gray300 : theme.colors.gray100};
          color: ${theme.colors.gray700};
          border: none;
          &:hover:not(:disabled) { background: ${theme.colors.gray200}; }
          &:disabled { background: ${theme.colors.gray50}; color: ${theme.colors.gray400}; }
        `;
      case 'outlined':
        return css`
          background: transparent;
          color: ${$selected ? theme.colors.gray800 : theme.colors.gray700};
          border: 1px solid ${$selected ? theme.colors.gray800 : theme.colors.gray300};
          &:hover:not(:disabled) { border-color: ${theme.colors.gray500}; color: ${theme.colors.gray800}; }
          &:disabled { border-color: ${theme.colors.gray200}; color: ${theme.colors.gray400}; }
        `;
    }
  }}

  &:disabled {
    cursor: not-allowed;
  }
`;

const Inner = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: 100%;
`;

const SubText = styled.span`
  ${({ theme }) => theme.fonts.body3Medium}
  color: inherit;
  opacity: 0.7;
  width: 100%;
`;

export function Button({
  variant = 'primary',
  size = 'md',
  selected,
  fullWidth,
  leftIcon,
  rightIcon,
  subText,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $selected={selected}
      $fullWidth={fullWidth}
      $hasSubText={!!subText}
      {...props}
    >
      <Inner>
        {leftIcon}
        <span style={{ flex: 1 }}>{children}</span>
        {rightIcon}
      </Inner>
      {subText && <SubText>{subText}</SubText>}
    </StyledButton>
  );
}
