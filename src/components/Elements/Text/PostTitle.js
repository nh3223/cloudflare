import styled from 'styled-components';

import { color, fontWeight, size } from '../../Styles/theme';

import Text from './Text';

const { darkBlue, orange } = color;
const { large, tiny } = size;
const { heavyWeight } = fontWeight;

const StyledPostTitle = styled.div`
  background-color: ${orange};
  margin: 0;
  padding: 0 ${tiny};
`;

const PostTitle = ({ title }) => (
  <StyledPostTitle>
    <Text color={ darkBlue } size={ large } weight={ heavyWeight } >
      { title }
    </Text>
  </StyledPostTitle>
);

export default PostTitle;