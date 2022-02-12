import {useState} from 'react';
import {getTodayStringForDateInput} from '../../utils';
import FieldWrapper from '../field-wrapper';
import Button from '../button';
import './style.css';

function AddRecordForm(props) {
  const [date, setDate] = useState(getTodayStringForDateInput());
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit({date, title, text});
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
        value={date}
        onChange={e => setDate(e.target.value)}
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
        className="add-record-form__textarea"
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
      isLoading={props.isSaving}
    />

    <Button
      className="add-record-form__button"
      title="Отмена"
      onClick={props.onCancelClick}
    />
  </form>;
}

export default AddRecordForm;
