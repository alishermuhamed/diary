import './input.css';

function Input(props) {
  const className = 'input' + (props.className ? ` ${props.className}` : '');

  return <input
    className={className}
    id={props.id ?? ''}
    type={props.type ?? 'text'}
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
  />;
}

export default Input;
