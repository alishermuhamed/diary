import {useState} from 'react';
import {useEasybase} from 'easybase-react';
import {useLocation, useNavigate} from 'react-router-dom';
import {DIARY_TABLE_NAME} from '../../constants';
import './style.css';

function getTodayStringForDateInput() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  return `${year}-${(month < 10 ? '0' : '') + month}-${(day < 10 ? '0' : '') + day}`;
}

function Add() {
  const {db} = useEasybase();
  const location = useLocation();
  const navigate = useNavigate();

  const [date, setDate] = useState(getTodayStringForDateInput());
  const [mood, setMood] = useState('good');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    setError('');

    db(DIARY_TABLE_NAME)
      .insert({
        d: date,
        title,
        mood,
        text
      })
      .one()
      .then(res => {
        if (res !== 1) {
          setError('Ошибка при сохранении');
          return;
        }

        const from = location.state?.from ?? '/';
        navigate(from, {replace: true});
      });
  };

  return <main className="addRoute">
    <form
      className="addRoute__form"
      onSubmit={onSubmit}
    >
      <div className="addRoute__fieldWrapper">
        <label htmlFor="date">
          Дата
        </label>
        <input
          id="date"
          type="date"
          className="addRoute__fieldInput"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>

      <div className="addRoute__fieldWrapper">
        <label htmlFor="mood">
          Настроение
        </label>
        <select
          className="addRoute__fieldInput"
          value={mood}
          onChange={e => setMood(e.target.value)}
        >
          <option value="good">Хорошее 🙂</option>
          <option value="fine">Нормальное 😐</option>
          <option value="bad">Плохое 🙁</option>
        </select>
      </div>

      <div className="addRoute__fieldWrapper">
        <label htmlFor="title">
          Заголовок
        </label>
        <input
          id="title"
          className="addRoute__fieldInput"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="addRoute__fieldWrapper">
        <label htmlFor="text">
          Текст
        </label>
        <textarea
          id="text"
          className="addRoute__fieldInput"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>

      {
        error.length > 0 &&
        <div className="loginRoute__error">
          {error}
        </div>
      }

      <button
        type="submit"
        className="addRoute__submitButton"
      >
        Сохранить
      </button>

      <button
        type="button"
        className="addRoute__submitButton"
        onClick={() => navigate(-1)}
      >
        Отмена
      </button>
    </form>
  </main>;
}

export default Add;
