import { styled } from 'styled-components';
import addGrayIcon from '../../assets/icons/commons/add-gray.svg';

export type BadgeVariant = 'text' | 'num' | 'description';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  variant: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
}

const StyledTextBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray700};
  ${({ theme }) => theme.fonts.body2Medium}
  border-radius: 6px;
  padding: 4px 8px;
`;

const StyledNumBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.red500};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body3SemiBold}
`;

const StyledDescriptionBadge = styled.span<{ $size: BadgeSize }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.gray700};
  ${({ theme, $size }) => {
    if ($size === 'sm') return theme.fonts.body3Medium;
    if ($size === 'lg') return theme.fonts.body2SemiBold;
    return theme.fonts.body2Medium;
  }}
`;

const iconSizeMap: Record<BadgeSize, number> = { sm: 14, md: 16, lg: 20 };

export function Badge({ variant, size = 'md', children }: BadgeProps) {
  if (variant === 'text') {
    return <StyledTextBadge>{children}</StyledTextBadge>;
  }
  if (variant === 'num') {
    return <StyledNumBadge>{children}</StyledNumBadge>;
  }
  return (
    <StyledDescriptionBadge $size={size}>
      <img src={addGrayIcon} alt="" width={iconSizeMap[size]} height={iconSizeMap[size]} />
      {children}
    </StyledDescriptionBadge>
  );
}
