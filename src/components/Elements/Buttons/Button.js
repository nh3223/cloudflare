import styled from 'styled-components';

import { color, fontWeight, layout, size } from '../../Styles/theme';

const { darkBlue, lightBlue } = color;
const { extraLarge, tiny, extraSmall, small } = size;
const { maxWidth } = layout;
const { heavyWeight } = fontWeight;

const ButtonContainer = styled.div`
  max-width: ${maxWidth};
  margin: ${small} auto;
  padding: ${tiny};
`;

const StyledButton = styled.button`
  display: block;
  padding: ${extraSmall} ${extraLarge};
  border-color: ${darkBlue};
  border-radius: ${tiny};
  border-style: solid;
  border-width: ${tiny};
  font-size: ${small};
  font-weight: ${heavyWeight};
  color: ${darkBlue};
  background-color: ${lightBlue};
  cursor: pointer;

  :hover {
      opacity: 0.8;
  }

}
`;

const Button = ({ name, id, text, handleClick }) => (
  <ButtonContainer>
    <StyledButton aria-label={ name } id={ id } onClick={ handleClick }>
      { text }
    </StyledButton>
  </ButtonContainer>
);

export default Button;