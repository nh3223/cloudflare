import Button from './Button';

const PostButton = ({ name, text, handleSubmit }) => <Button name={ name } text={ text } handleClick={ handleSubmit } />;

export default PostButton;