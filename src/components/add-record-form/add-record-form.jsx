import {useState} from 'react';
import {getTodayStringForDateInput} from '../../utils/utils';
import FieldWrapper from '../field-wrapper/field-wrapper';
import Input from '../input/input';
import TextArea from '../textArea/textArea';
import Button from '../button/button';
import './add-record-form.css';

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
      <Input
        id="date"
        type="date"
        value={date}
        onChange={setDate}
      />
    </FieldWrapper>

    <FieldWrapper
      fieldId="title"
      label="Заголовок"
    >
      <Input
        id="title"
        value={title}
        onChange={setTitle}
      />
    </FieldWrapper>

    <FieldWrapper
      fieldId="text"
      label="Текст"
    >
      <TextArea
        id="text"
        value={text}
        onChange={setText}
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
