import styled from 'styled-components';
import { EyeIcon } from '../../svg/icons';
import { FlexContainer } from '../../../styles/containers';

export const ViewsCounterRoot = styled(FlexContainer)`
  column-gap: 10px;
  align-items: center;
`;

export const ViewsEyeIcon = styled(EyeIcon)`
  width: 20px;
  height: 20px;
  fill: gray;
`;
