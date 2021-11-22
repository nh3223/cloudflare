import styled from 'styled-components';

import { color, layout, size } from '../../Styles/theme';

const { darkBlue } = color;
const { tiny, small } = size;
const { maxWidth } = layout;

const Form = styled.form`
  border-color: ${darkBlue};
  border-radius: ${tiny};
  border-style: solid;
  max-width: ${maxWidth};
  margin: ${small} auto;
  padding: ${tiny};
`;

export default Form;