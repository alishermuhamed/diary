import {useState} from 'react';
import {getStringForDateInput} from '../../utils/date-input-string';
import FieldWrapper from '../field-wrapper/field-wrapper';
import Input from '../input/input';
import TextArea from '../textArea/textArea';
import Button from '../button/button';
import './add-record-form.css';

function AddRecordForm(props) {
  const [d, setD] = useState(getStringForDateInput());
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit({d, title, text});
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
        value={d}
        onChange={setD}
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
