import styled from 'styled-components';

import { color, fontWeight, size } from '../../Styles/theme';

import Text from './Text';

const { darkBlue } = color;
const { medium, tiny } = size;
const { lightWeight } = fontWeight;

const StyledContent = styled.div`
  margin: 0;
  padding: 0 ${tiny};
  `;

const Content = ({ content }) => (
  <StyledContent>
    <Text color={ darkBlue } size={ medium } weight={ lightWeight } >
      { content }
    </Text>
  </StyledContent>
);

export default Content;