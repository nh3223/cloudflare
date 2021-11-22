import styled from 'styled-components';

import { color, fontWeight, layout, size } from '../../Styles/theme';

import Text from './Text';

const { darkBlue, orange } = color;
const { extraLarge, small, tiny } = size;
const { maxWidth } = layout;
const { heavyWeight } = fontWeight;

const StyledTitle = styled.div`
  background-color: ${orange};
  max-width: ${maxWidth};
  margin: ${small} auto;
  padding: ${tiny};
  width: 100%;
`;

const Title = ({ title }) => (
  <StyledTitle>
    <Text color={ darkBlue } size={ extraLarge } weight={ heavyWeight }>
      { title }
    </Text>
  </StyledTitle>
);

export default Title;