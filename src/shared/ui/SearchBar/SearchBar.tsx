import { styled } from 'styled-components';
import searchIcon from '../../assets/icons/commons/search.svg';

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement>;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
`;

const SearchIconImg = styled.img`
  position: absolute;
  left: 12px;
  width: 20px;
  height: 20px;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 16px 10px 40px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.gray50};
  ${({ theme }) => theme.fonts.body1Medium}
  color: ${({ theme }) => theme.colors.gray800};
  outline: none;
  transition: border-color 0.15s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.yellow600};
  }
`;

export function SearchBar(props: SearchBarProps) {
  return (
    <Wrapper>
      <SearchIconImg src={searchIcon} alt="" />
      <Input {...props} />
    </Wrapper>
  );
}
