import {useState} from 'react';
import {useEasybase} from 'easybase-react';
import {useLocation, useNavigate} from 'react-router-dom';
import {DIARY_TABLE_NAME} from '../../constants';
import AddRecordForm from '../../components/add-record-form';
import './style.css';

function AddRecord() {
  const [error, setError] = useState('');
  const {db} = useEasybase();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = record => {
    setError('');

    db(DIARY_TABLE_NAME)
      .insert({
        d: record.date,
        title: record.title,
        mood: record.mood,
        text: record.text
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

  return <main className="add-record-page">
    <AddRecordForm
      onSubmit={onSubmit}
      error={error}
      onCancelClick={() => navigate(-1)}
    />
  </main>;
}

export default AddRecord;
