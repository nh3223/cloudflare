import styled from 'styled-components';

import { color, fontWeight, size } from '../../Styles/theme';

import Text from './Text';

const { lightBlue, darkBlue } = color;
const { small, tiny } = size;
const { lightWeight } = fontWeight;

const StyledUser = styled.div`
  background-color: ${lightBlue};
  margin: 0;
  padding: 0 ${tiny};
`;

const User = ({ username }) => (
  <StyledUser>
    <Text color={ darkBlue } size={ small } wieght={ lightWeight } align="right" >
      { `Posted by ${username}` }
    </Text>
  </StyledUser>
);

export default User;