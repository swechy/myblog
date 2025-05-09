const Input = ({ onChangeHandler }) => {
  return (
    <input type="search" onChange={ onChangeHandler } />
  );
};
export default Input;
/*
class Input extends React.Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <input type="search" onChange={ onChangeHandler } />
    );
  }
}
*/
