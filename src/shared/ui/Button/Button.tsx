import { css, styled, useTheme } from 'styled-components';
import addDefaultIcon from '../../assets/icons/commons/add-default.svg';
import addGrayIcon from '../../assets/icons/commons/add-gray.svg';
import rightArrowIcon from '../../assets/icons/commons/right-arrow.svg';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outlined';
export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  selected?: boolean;
  fullWidth?: boolean;
  leftIcon?: boolean;
  rightArrow?: boolean;
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
  xl: { height: '64px', padding: '18px 20px', vPadding: '18px 20px', radius: '12px', font: 'title2Bold' as const },
  lg: { height: '64px', padding: '18px 20px', vPadding: '18px 20px', radius: '12px', font: 'title2Bold' as const },
  md: { height: '64px', padding: '18px 16px', vPadding: '18px 16px', radius: '12px', font: 'title2Bold' as const },
  sm: { height: '64px', padding: '18px 16px', vPadding: '18px 16px', radius: '12px', font: 'title2Bold' as const },
  xs: { height: '40px', padding: '8px 12px',  vPadding: '8px 12px',  radius: '8px',  font: 'body2SemiBold' as const },
};

const StyledButton = styled.button<StyledProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $size, $hasSubText }) => css`
    height: ${$hasSubText ? 'auto' : sizeMap[$size].height};
    padding: ${$hasSubText ? sizeMap[$size].vPadding : sizeMap[$size].padding};
    border-radius: ${sizeMap[$size].radius};
  `}

  ${({ $variant, $selected, theme }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background: ${$selected ? theme.colors.yellow600 : theme.colors.yellow500};
          color: ${theme.colors.gray900};
          border: none;
          &:hover:not(:disabled) { background: ${theme.colors.yellow600}; }
          &:disabled { background: ${theme.colors.gray100}; color: ${theme.colors.gray400}; }
        `;
      case 'secondary':
        return css`
          background: ${$selected ? theme.colors.yellowGray200 : theme.colors.yellowGray100};
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
          background: ${$selected ? theme.colors.gray50 : theme.colors.white};
          color: ${theme.colors.gray700};
          border: 1px solid ${theme.colors.gray200};
          &:hover:not(:disabled) { background: ${theme.colors.gray50}; }
          &:disabled { background: ${theme.colors.gray50}; color: ${theme.colors.gray400}; border-color: ${theme.colors.gray200}; }
        `;
    }
  }}

  &:disabled {
    cursor: not-allowed;
  }
`;

const LabelGroup = styled.span<{ $size: ButtonSize }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  gap: 2px;
  ${({ theme, $size }) => theme.fonts[sizeMap[$size].font]}
`;

const SubText = styled.span`
  ${({ theme }) => theme.fonts.body3Medium}
  color: inherit;
  opacity: 0.6;
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;

const CircleIconWrapper = styled.span<{ $bg: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  flex-shrink: 0;
`;

function LeftIconRenderer({ variant }: { variant: ButtonVariant }) {
  const theme = useTheme();

  if (variant === 'primary') {
    return (
      <CircleIconWrapper $bg={theme.colors.yellow200}>
        <img src={addDefaultIcon} alt="" width={20} height={20} />
      </CircleIconWrapper>
    );
  }
  if (variant === 'secondary') {
    return (
      <CircleIconWrapper $bg={theme.colors.yellowGray50}>
        <img src={addGrayIcon} alt="" width={20} height={20} />
      </CircleIconWrapper>
    );
  }
  return <img src={addGrayIcon} alt="" width={20} height={20} />;
}

export function Button({
  variant = 'primary',
  size = 'md',
  selected,
  fullWidth,
  leftIcon,
  rightArrow,
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
      {leftIcon && (
        <IconWrapper style={{ marginRight: 8 }}>
          <LeftIconRenderer variant={variant} />
        </IconWrapper>
      )}
      <LabelGroup $size={size}>
        <span>{children}</span>
        {subText && <SubText>{subText}</SubText>}
      </LabelGroup>
      {rightArrow && (
        <IconWrapper style={{ marginLeft: 8 }}>
          <img src={rightArrowIcon} alt="" width={16} height={16} />
        </IconWrapper>
      )}
    </StyledButton>
  );
}
