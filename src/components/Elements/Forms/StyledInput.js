import styled from 'styled-components';

import { color, fontWeight, size } from '../../Styles/theme';

const { darkBlue, lightBlue } = color;
const { medium, small, tiny } = size;
const { mediumWeight } = fontWeight;

const StyledInput = styled.input`
  background-color: ${lightBlue};
  border-color: ${darkBlue};
  color: ${darkBlue};
  font-size: ${medium};
  font-weight: ${mediumWeight};
  flex: 5;
  margin: ${small};
  padding: ${tiny};
`;

export default StyledInput;