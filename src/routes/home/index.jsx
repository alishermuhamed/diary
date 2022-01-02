import {useEasybase} from 'easybase-react';
import {useState, useEffect} from 'react';
import {DIARY_TABLE_NAME} from '../../constants';
import Record from '../../components/record';

function Home() {
  const {db} = useEasybase();

  const [records, setRecords] = useState([]);

  useEffect(() => {
    db(DIARY_TABLE_NAME)
      .return()
      .all()
      .then(r => setRecords(r));
  }, []);

  return <main>
    {
      records.map(record =>
        <Record
          key={record._key}
          record={record}
        />
      )
    }
  </main>;
}

export default Home;
