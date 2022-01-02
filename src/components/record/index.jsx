import './style.css';

function Record(props) {
  const {added, title, mood, text} = props.record;

  const date = new Date(added).toLocaleDateString();

  return <article className="record">
    <h2>{title}</h2>

    <span>{date}</span>

    <span>Настроение: {mood}/5</span>

    <p>{text}</p>
  </article>;
}

export default Record;
