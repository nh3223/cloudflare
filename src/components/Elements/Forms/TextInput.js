import StyledInput from './StyledInput';
import SingleLineLayout from '../Layouts/SingleLineLayout';
import Label from './Label';

const TextInput = ({ name, label, value, handleChange }) => (
  <SingleLineLayout>
    <Label htmlFor={ name } label={ label } />
    <StyledInput id={ name } type="text" value={ value } onChange={ handleChange } />
  </SingleLineLayout>
);

export default TextInput;