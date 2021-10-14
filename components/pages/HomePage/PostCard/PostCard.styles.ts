import styled from 'styled-components';
import { HashTags } from '../../../common/HashTags';
import { FlexContainer } from '../../../../styles/containers';
import { device } from '../../../../styles/device';

export const PostRoot = styled(FlexContainer)`
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.postCard.background};
  flex-direction: column;

  @media screen and ${device.tablet} {
    flex-direction: row;
  }
`;

export const PostCoverWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.image.background};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and ${device.tablet} {
    width: 350px;
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
