import './style.css';

function Record(props) {
  const {d, title, text} = props.record;
  const date = new Date(d).toLocaleDateString();

  return <article className="record">
    <span className="record__date">
      {date}
    </span>

    <h2 className="record__title">
      {title}
    </h2>

    <p className="record__text">
      {text}
    </p>
  </article>;
}

export default Record;
