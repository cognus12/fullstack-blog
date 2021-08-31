import styled from 'styled-components';
import { FlexContainer } from '../../shared';

export const FooterWrapper = styled.footer`
  padding: 40px 0;
  background: ${({ theme }) => theme.colors.headerBg};
`;

export const FooterInner = styled(FlexContainer)`
  justify-content: space-between;
`;

export const BlogAuthorWrapper = styled(FlexContainer)`
  flex-direction: column;
  row-gap: 10px;
`;

export const BlogAuthorName = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const BlogAuthorInfo = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
