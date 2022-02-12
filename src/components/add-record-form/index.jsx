import {useState} from 'react';
import {getTodayStringForDateInput} from '../../utils';
import {MOODS} from '../../constants';
import FieldWrapper from '../field-wrapper';
import Select from '../select';
import Button from '../button';
import './style.css';

function AddRecordForm(props) {
  const moods = Object.getOwnPropertyNames(MOODS).map(m => ({
    key: m,
    value: m,
    text: MOODS[m]
  }));

  const [date, setDate] = useState(getTodayStringForDateInput());
  const [mood, setMood] = useState(moods[0].value);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit({date, mood, title, text});
  };

  return <form
    className="add-record-form"
    onSubmit={onSubmit}
  >
    <FieldWrapper
      fieldId="date"
      label="Дата"
    >
      <input
        id="date"
        type="date"
        required={true}
        value={date}
        onChange={e => setDate(e.target.value)}
      />
    </FieldWrapper>

    <FieldWrapper
      fieldId="mood"
      label="Настроение"
    >
      <Select
        value={mood}
        onChange={setMood}
        options={moods}
      />
    </FieldWrapper>

    <FieldWrapper
      fieldId="title"
      label="Заголовок"
    >
      <input
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </FieldWrapper>

    <FieldWrapper
      fieldId="text"
      label="Текст"
    >
      <textarea
        id="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </FieldWrapper>

    {
      props.error.length > 0 &&
      <div className="add-record-form__error">
        {props.error}
      </div>
    }

    <Button
      type="submit"
      className="add-record-form__button"
      title="Сохранить"
    />

    <Button
      className="add-record-form__button"
      title="Отмена"
      onClick={props.onCancelClick}
    />
  </form>;
}

export default AddRecordForm;
