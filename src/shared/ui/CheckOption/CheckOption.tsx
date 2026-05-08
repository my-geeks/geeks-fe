import { styled } from 'styled-components';
import circleCheck from '../../assets/icons/commons/circle-check.svg';
import circleNoncheck from '../../assets/icons/commons/circle-noncheck.svg';
import squareCheck from '../../assets/icons/commons/square-check.svg';
import squareNoncheck from '../../assets/icons/commons/square-noncheck.svg';

export type CheckOptionShape = 'circle' | 'square';
export type CheckOptionSize = 'sm' | 'lg';

interface CheckOptionProps {
  shape?: CheckOptionShape;
  size?: CheckOptionSize;
  checked?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

const sizeMap = {
  sm: { iconSize: 18, font: 'body2Medium' as const, gap: '4px' },
  lg: { iconSize: 20, font: 'body1SemiBold' as const, gap: '4px' },
};

const Wrapper = styled.button<{ $gap: string }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $gap }) => $gap};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const Label = styled.span<{ $size: CheckOptionSize; $checked: boolean }>`
  ${({ theme, $size }) => theme.fonts[sizeMap[$size].font]}
  color: ${({ theme, $checked }) =>
    $checked ? theme.colors.gray900 : theme.colors.gray400};
`;

export function CheckOption({
  shape = 'circle',
  size = 'sm',
  checked = false,
  label,
  onChange,
}: CheckOptionProps) {
  const { iconSize, gap } = sizeMap[size];

  const icon =
    shape === 'circle'
      ? checked ? circleCheck : circleNoncheck
      : checked ? squareCheck : squareNoncheck;

  return (
    <Wrapper
      type="button"
      role="checkbox"
      aria-checked={checked}
      $gap={gap}
      onClick={() => onChange?.(!checked)}
    >
      <img src={icon} alt="" width={iconSize} height={iconSize} />
      {label && (
        <Label $size={size} $checked={checked}>
          {label}
        </Label>
      )}
    </Wrapper>
  );
}
