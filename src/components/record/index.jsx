import './style.css';
import {MOODS} from '../../constants';

function Record(props) {
  const {d, title, mood, text} = props.record;

  const date = new Date(d).toLocaleDateString();

  return <article className="record">
    <h2>{title}</h2>

    <span>{date}</span>

    <span>Настроение: {MOODS[mood]}</span>

    <p>{text}</p>
  </article>;
}

export default Record;
