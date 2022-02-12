import {useState} from 'react';
import {useDiaryContext} from '../../contexts/diary-context';
import {useLocation, useNavigate} from 'react-router-dom';
import AddRecordForm from '../../components/add-record-form/add-record-form';
import './add-record.css';

function AddRecord() {
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const {records, addRecord} = useDiaryContext();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = record => {
    setError('');
    setIsSaving(true);

    if (!record.date || !record.title || !record.text) {
      setError('Заполни все поля');
      setIsSaving(false);
      return;
    }

    const date = new Date(record.date);
    const hasRecordForTheDate = records.some(r => {
      const recordDate = new Date(r.d);
      return recordDate.getTime() === date.getTime();
    });

    if (hasRecordForTheDate) {
      setError('Запись на этот день уже есть');
      setIsSaving(false);
      return;
    }

    addRecord(record)
      .then(res => {
        setIsSaving(false);

        if (res !== 1) {
          setError('Ошибка при сохранении');
          return;
        }

        const from = location.state?.from ?? '/';
        navigate(from, {replace: true});
      });
  }

  return <main className="add-record-page">
    <AddRecordForm
      onSubmit={onSubmit}
      error={error}
      onCancelClick={() => navigate(-1)}
      isSaving={isSaving}
    />
  </main>;
}

export default AddRecord;
