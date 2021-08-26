import styled from 'styled-components';
import { FlexContainer } from '../../layout/shared';

export const PostRoot = styled.article`
  width: 365px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.secondaryBg};
`;

export const PostCoverWrapper = styled.div`
  width: 100%;
  height: 260px;
  background: ${({ theme }) => theme.colors.imageBg};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const PostCardInfo = styled.div`
  padding: 20px;
`;

export const ReadMoreLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.logo};
  }
`;

export const PostCardTitle = styled.h2`
  margin-top: 0;
`;

export const Tags = styled(FlexContainer)`
  margin: 10px 0;
`;

export const Tag = styled.a`
  padding: 5px;
  background: slategrey;
  flex-shrink: 0;
  border-radius: 5px;
`;
