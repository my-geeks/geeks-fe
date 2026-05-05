import { styled, css } from 'styled-components';

interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

type StyledProps = { $checked: boolean; $disabled: boolean };

const Track = styled.button<StyledProps>`
  position: relative;
  width: 64px;
  height: 32px;
  border-radius: 24px;
  border: 1px solid;
  display: inline-flex;
  align-items: center;
  padding: 0;
  transition: background 0.2s, border-color 0.2s;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  ${({ $checked, $disabled, theme }) => {
    if ($disabled) return css`
      background: ${theme.colors.background};
      border-color: ${theme.colors.gray100};
    `;
    if ($checked) return css`
      background: ${theme.colors.yellow100};
      border-color: ${theme.colors.yellow400};
    `;
    return css`
      background: ${theme.colors.gray50};
      border-color: ${theme.colors.gray200};
    `;
  }}
`;

const Thumb = styled.span<StyledProps>`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: left 0.2s;
  left: ${({ $checked }) => ($checked ? '33px' : '4px')};
  background: ${({ $checked, $disabled, theme }) => {
    if ($disabled) return theme.colors.gray200;
    if ($checked) return theme.colors.yellow400;
    return theme.colors.gray300;
  }};
`;

const Label = styled.span<StyledProps>`
  position: absolute;
  ${({ theme }) => theme.fonts.body3SemiBold}
  color: ${({ $checked, $disabled, theme }) => {
    if ($disabled) return 'transparent';
    if ($checked) return theme.colors.yellow700;
    return theme.colors.gray500;
  }};
  ${({ $checked }) => ($checked ? css`left: 11px;` : css`right: 5px;`)}
`;

export function Toggle({ checked = false, disabled = false, onChange }: ToggleProps) {
  return (
    <Track
      $checked={checked}
      $disabled={disabled}
      disabled={disabled}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
    >
      <Label $checked={checked} $disabled={disabled}>
        {checked ? 'ON' : 'OFF'}
      </Label>
      <Thumb $checked={checked} $disabled={disabled} />
    </Track>
  );
}
