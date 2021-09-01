import styled from 'styled-components';
import { HashTags } from '../../shared/HashTags';

export const PostRoot = styled.article`
  width: 365px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.layout.content};
`;

export const PostCoverWrapper = styled.div`
  width: 100%;
  height: 260px;
  background: ${({ theme }) => theme.colors.image.background};
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
  color: ${({ theme }) => theme.colors.font.primary};
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.link.hover};
  }
`;

export const PostCardTitle = styled.h2`
  margin-top: 0;
`;

export const PostHashTags = styled(HashTags)`
  margin: 10px 0;
`;
