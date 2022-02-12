import './style.css';

function Select(props) {
  const className = 'select' + (props.className ? ` ${props.className}` : '');

  return <select
    className={className}
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
  >
    {
      props.options.map(option =>
        <option
          key={option.key}
          value={option.value}
        >
          {option.text}
        </option>
      )
    }
  </select>;
}

export default Select;
