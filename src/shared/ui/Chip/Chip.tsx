import { css, styled } from 'styled-components';
import arrowDownIcon from '../../assets/icons/commons/arrow-small-down.svg';
import closeBlackIcon from '../../assets/icons/commons/close-black.svg';
import closeGrayIcon from '../../assets/icons/commons/close-gray.svg';
import closeWhiteIcon from '../../assets/icons/commons/close-white.svg';
import closeYellowIcon from '../../assets/icons/commons/close-yellow.svg';

export type ChipVariant = 'primary' | 'outlined' | 'mono' | 'mono-outlined';
export type ChipSize = 'sm' | 'md' | 'lg';

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ChipVariant;
  size?: ChipSize;
  selected?: boolean;
  trailingIcon?: boolean;
  onDismiss?: () => void;
  children: React.ReactNode;
}

type StyledProps = {
  $variant: ChipVariant;
  $size: ChipSize;
  $selected: boolean;
  $hasIcon: boolean;
};

const variantStyles = ($variant: ChipVariant, $selected: boolean) => {
  switch ($variant) {
    case 'primary':
      return css`
        background: ${({ theme }) => ($selected ? theme.colors.yellow500 : theme.colors.gray100)};
        color: ${({ theme }) => theme.colors.gray800};
        border: none;
        &:disabled {
          background: ${({ theme }) => theme.colors.gray50};
          color: ${({ theme }) => theme.colors.gray400};
        }
      `;
    case 'outlined':
      return css`
        background: ${({ theme }) => ($selected ? theme.colors.yellow100 : theme.colors.white)};
        color: ${({ theme }) => ($selected ? theme.colors.yellow900 : theme.colors.gray700)};
        border: 1px solid
          ${({ theme }) => ($selected ? theme.colors.yellow600 : theme.colors.gray200)};
        &:disabled {
          background: ${({ theme }) => theme.colors.gray50};
          color: ${({ theme }) => theme.colors.gray400};
          border-color: ${({ theme }) => theme.colors.gray200};
        }
      `;
    case 'mono':
      return css`
        background: ${({ theme }) => ($selected ? theme.colors.gray800 : theme.colors.white)};
        color: ${({ theme }) => ($selected ? theme.colors.white : theme.colors.gray700)};
        border: 1px solid
          ${({ theme }) => ($selected ? 'transparent' : theme.colors.gray200)};
        &:disabled {
          background: ${({ theme }) => theme.colors.gray50};
          color: ${({ theme }) => theme.colors.gray400};
          border: 1px solid ${({ theme }) => theme.colors.gray200};
        }
      `;
    case 'mono-outlined':
      return css`
        background: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.gray700};
        border: 1px solid
          ${({ theme }) => ($selected ? theme.colors.gray900 : theme.colors.gray200)};
        &:disabled {
          background: ${({ theme }) => theme.colors.gray50};
          color: ${({ theme }) => theme.colors.gray400};
          border: 1px solid ${({ theme }) => theme.colors.gray200};
        }
      `;
  }
};

const StyledChip = styled.button<StyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  ${({ $size, $hasIcon, theme }) => {
    if ($size === 'sm')
      return css`
        padding: ${$hasIcon ? '8px 10px 8px 16px' : '8px 16px'};
        border-radius: 24px;
        gap: 2px;
        ${theme.fonts.body2SemiBold}
      `;
    if ($size === 'md')
      return css`
        padding: ${$hasIcon ? '8px 10px 8px 16px' : '8px 16px'};
        border-radius: 20px;
        gap: 2px;
        ${theme.fonts.body1SemiBold}
      `;
    return css`
      padding: 12px;
      border-radius: 12px;
      width: 100%;
      ${theme.fonts.body1SemiBold}
    `;
  }}

  ${({ $variant, $selected }) => variantStyles($variant, $selected)}

  &:disabled {
    cursor: not-allowed;
  }
`;

const iconSizeMap: Record<ChipSize, number> = { sm: 18, md: 20, lg: 20 };

const getCloseIcon = (variant: ChipVariant, selected: boolean, disabled?: boolean) => {
  if (disabled) return closeGrayIcon;
  if (variant === 'mono') return selected ? closeWhiteIcon : closeGrayIcon;
  if (variant === 'primary') return closeBlackIcon;
  if (variant === 'outlined') return closeYellowIcon;
  return closeBlackIcon; // mono-outlined
};

export function Chip({
  variant = 'primary',
  size = 'sm',
  selected = false,
  trailingIcon,
  onDismiss,
  children,
  onClick,
  ...props
}: ChipProps) {
  const iconSize = iconSizeMap[size];
  const closeIconSrc = getCloseIcon(variant, selected, props.disabled);

  const handleDismissClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDismiss?.();
  };

  return (
    <StyledChip
      $variant={variant}
      $size={size}
      $selected={selected}
      $hasIcon={!!trailingIcon}
      onClick={onClick}
      {...props}
    >
      {children}
      {trailingIcon && (
        <img
          src={selected ? closeIconSrc : arrowDownIcon}
          alt=""
          width={iconSize}
          height={iconSize}
          onClick={selected ? handleDismissClick : undefined}
        />
      )}
    </StyledChip>
  );
}
