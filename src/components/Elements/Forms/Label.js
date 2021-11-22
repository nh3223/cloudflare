import styled from 'styled-components';

import { color, fontWeight, size } from '../../Styles/theme';

import Text from '../Text/Text';

const { darkBlue } = color;
const { medium, small } = size;
const { mediumWeight } = fontWeight;

const StyledLabel = styled.label`
  flex: 1;
  margin: ${small};
`;

const Label = ({ label }) => (
  <StyledLabel>
    <Text color={ darkBlue } size={ medium } weight={ mediumWeight } >
      { label }
    </Text>
  </StyledLabel>
);

export default Label;