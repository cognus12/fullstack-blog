import styled from 'styled-components';
import { FlexContainer } from '../../../../../styles/containers';

export const Article = styled.article`
  background: ${({ theme }) => theme.colors.fullPost.background};
  padding: 20px;
  border-radius: 15px;
  max-width: 1000px;
`;

export const ArticleInfo = styled(FlexContainer)`
  margin-top: 10px;
  width: 250px;
  column-gap: 20px;
`;

export const PostContent = styled.div`
  font-size: 20px;

  img {
    max-width: 100%;
  }
`;
