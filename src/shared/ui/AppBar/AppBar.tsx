import { styled } from 'styled-components';
import backIcon from '../../assets/icons/header/left_arrow.svg';
import searchIcon from '../../assets/icons/header/search.svg';
import bellIcon from '../../assets/icons/header/bell.svg';
import moreIcon from '../../assets/icons/header/more.svg';

export interface AppBarProps {
  back?: boolean;
  title?: string;
  titleAlign?: 'left' | 'center';
  titleBelow?: boolean;
  showSearch?: boolean;
  showBell?: boolean;
  showMore?: boolean;
  onBack?: () => void;
  onSearch?: () => void;
  onBell?: () => void;
  onMore?: () => void;
}

const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.white};
`;

const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 4px;
`;

const Icon = styled.img`
  cursor: pointer;
  flex-shrink: 0;
`;

const InlineTitle = styled.span`
  ${({ theme }) => theme.fonts.title3Bold}
  color: ${({ theme }) => theme.colors.gray900};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 4px;
`;

const CenteredTitle = styled.span`
  ${({ theme }) => theme.fonts.title3Bold}
  color: ${({ theme }) => theme.colors.gray900};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 55%;
  pointer-events: none;
`;

const Spacer = styled.span`
  flex: 1;
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const BelowTitle = styled.div`
  ${({ theme }) => theme.fonts.title2Bold}
  color: ${({ theme }) => theme.colors.gray900};
  padding: 0 16px 12px;
`;

export function AppBar({
  back,
  title,
  titleAlign = 'left',
  titleBelow,
  showSearch,
  showBell,
  showMore,
  onBack,
  onSearch,
  onBell,
  onMore,
}: AppBarProps) {
  const hasRightIcons = showSearch || showBell || showMore;
  const inlineTitle = title && !titleBelow;

  return (
    <Wrapper>
      <Row>
        {back && (
          <Icon src={backIcon} alt="뒤로가기" width={28} height={28} onClick={onBack} />
        )}

        {inlineTitle && titleAlign === 'center' ? (
          <>
            <Spacer />
            <CenteredTitle>{title}</CenteredTitle>
          </>
        ) : inlineTitle ? (
          <InlineTitle>{title}</InlineTitle>
        ) : (
          <Spacer />
        )}

        {hasRightIcons && (
          <RightIcons>
            {showSearch && (
              <Icon src={searchIcon} alt="검색" width={28} height={28} onClick={onSearch} />
            )}
            {showBell && (
              <Icon src={bellIcon} alt="알림" width={28} height={28} onClick={onBell} />
            )}
            {showMore && (
              <Icon src={moreIcon} alt="더보기" width={28} height={28} onClick={onMore} />
            )}
          </RightIcons>
        )}
      </Row>

      {titleBelow && title && <BelowTitle>{title}</BelowTitle>}
    </Wrapper>
  );
}
