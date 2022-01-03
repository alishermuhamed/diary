import './style.css';

function Button(props) {
  const className = 'button' + (props.className ? ` ${props.className}` : '');

  return <button
    type={props.type ?? 'button'}
    className={className}
    onClick={props.onClick}
  >
    {props.title}
  </button>;
}

export default Button;
