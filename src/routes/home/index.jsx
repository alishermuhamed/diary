import {useDiaryContext} from '../../contexts/diary-context';
import {Link} from 'react-router-dom';
import Record from '../../components/record';
import './style.css';

function Home() {
  const records = useDiaryContext();

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
