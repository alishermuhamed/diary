import './button.css';

function Button(props) {
  const className = 'button' + (props.className ? ` ${props.className}` : '');

  return <button
    type={props.type ?? 'button'}
    className={className}
    onClick={props.onClick ?? (() => undefined)}
    disabled={props.isLoading ?? false}
  >
    {
      props.isLoading
        ? 'Загрузка...'
        : props.title
    }
  </button>;
}

export default Button;
