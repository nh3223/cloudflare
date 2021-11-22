import styled from 'styled-components';
import { color, size, layout } from '../../Styles/theme';

const { darkBlue } = color;
const { small, tiny } = size;
const { maxWidth } = layout;

const PostLayout = styled.div`
  border-color: ${darkBlue};
  border-radius: ${tiny};
  border-style: solid;
  max-width: ${maxWidth};
  margin: ${small} auto;
  padding: ${tiny};
`;

export default PostLayout;