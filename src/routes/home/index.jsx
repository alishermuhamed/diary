import {useEasybase} from 'easybase-react';
import {useState, useEffect} from 'react';
import {DIARY_TABLE_NAME} from '../../constants';
import {Link} from 'react-router-dom';
import Record from '../../components/record';
import './style.css';

function Home() {
  const {db} = useEasybase();

  const [records, setRecords] = useState([]);

  useEffect(() => {
    db(DIARY_TABLE_NAME)
      .return()
      .all()
      .then(r => setRecords(r));
  }, []);

  return <main className="home-page">
    <Link
      className="home-page__add-record-link"
      to="/add"
    >
      Добавить запись
    </Link>
    {
      records?.map(record =>
        <Record
          key={record._key}
          record={record}
        />
      )
    }
  </main>;
}

export default Home;
