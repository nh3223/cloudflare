import Button from './Button';

const AddPostButton = ({ name, text, toggleAdd }) => <Button name={ name } text={ text } handleClick={ toggleAdd } />;

export default AddPostButton;