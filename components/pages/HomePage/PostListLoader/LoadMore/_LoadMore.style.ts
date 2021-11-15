import styled from 'styled-components';
import { LoadMoreProps } from './_LoadMore.component';

interface LoadMoreButtonProps extends Pick<LoadMoreProps, 'loading'> {
  isError?: boolean;
}

export const LoadMoreButton = styled.button<LoadMoreButtonProps>`
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.common.black100};
`;
