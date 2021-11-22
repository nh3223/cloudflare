import styled from 'styled-components';

import { color, fontWeight, size } from '../../Styles/theme';

const { darkBlue, lightBlue } = color;
const { small, tiny } = size;
const { mediumWeight } = fontWeight;

const StyledTextArea = styled.textarea`
  background-color: ${lightBlue};
  border-color: ${darkBlue};
  font-color: ${darkBlue};
  font-size: ${small};
  font-weight: ${mediumWeight};
  margin: ${small};
  padding: ${tiny};
  width: 95%;
`;

const TextAreaInput = ({ name, value, handleChange }) => <StyledTextArea type="textarea" value={ value } onChange={ handleChange } />;

export default TextAreaInput;