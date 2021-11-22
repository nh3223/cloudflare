import styled from 'styled-components';

const Text = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.align};
  margin: 0;
`;

export default Text;