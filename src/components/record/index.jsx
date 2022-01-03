import {MOODS} from '../../constants';
import './style.css';

function Record(props) {
  const {d, title, mood, text} = props.record;
  const date = new Date(d).toLocaleDateString();

  return <article className="record">
    <h2>{date}</h2>

    {
      title &&
      <h3 className="record__title">
        {title}
      </h3>
    }

    {
      mood &&
      <span>
        Настроение: {MOODS[mood]}
      </span>
    }

    <p>{text}</p>
  </article>;
}

export default Record;
