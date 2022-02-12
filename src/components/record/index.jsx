import {MOODS} from '../../constants';
import './style.css';

function Record(props) {
  const {d, title, mood, text} = props.record;
  const date = new Date(d).toLocaleDateString();

  return <article className="record">
    <span className="record__date">
      {date}
    </span>

    <h2 className="record__title">
      {title}
    </h2>

    {/*<span>*/}
    {/*  Настроение: {MOODS[mood]}*/}
    {/*</span>*/}

    <p className="record__text">
      {text}
    </p>
  </article>;
}

export default Record;
