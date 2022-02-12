import './textArea.css';

function TextArea(props) {
  const className = 'textArea' + (props.className ? ` ${props.className}` : '');

  return <textarea
    id={props.id ?? ''}
    className={className}
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
  />;
}

export default TextArea;
