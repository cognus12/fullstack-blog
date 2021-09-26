import styled from 'styled-components';
import { HashTags } from '../../shared/HashTags';
import { FlexContainer } from '../../layout/shared';
import { device } from '../../../styles/global';

export const PostRoot = styled(FlexContainer)`
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.layout.content};
  flex-direction: column;

  @media screen and ${device.laptop} {
    flex-direction: row;
  }
`;

export const PostCoverWrapper = styled.div`
  min-width: 350px;
  background: ${({ theme }) => theme.colors.image.background};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostCardContent = styled.div`
  padding: 20px;
`;

export const PostCardInfo = styled(FlexContainer)`
  column-gap: 20px;
  align-items: center;
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
