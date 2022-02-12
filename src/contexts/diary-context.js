import {createContext, useContext, useState} from 'react';
import {useEasybase} from 'easybase-react';
import {DIARY_TABLE_NAME} from '../constants';

const DiaryContext = createContext(undefined);

export function DiaryProvider(props) {
  const [records, setRecords] = useState([]);
  const {useReturn, db} = useEasybase();

  useReturn(() => {
    const dbInstance = db(DIARY_TABLE_NAME).return();

    dbInstance
      .orderBy({by: 'd', sort: 'desc'})
      .all()
      .then(records => setRecords(records));

    return dbInstance;
  });

  const addRecord = record => db(DIARY_TABLE_NAME)
    .insert({
      d: record.date,
      title: record.title,
      mood: record.mood,
      text: record.text
    })
    .one();

  const value = {
    records,
    addRecord
  };

  return <DiaryContext.Provider
    value={value}
    {...props}
  />;
}

export function useDiaryContext() {
  const context = useContext(DiaryContext);

  if (!context)
    throw new Error('useDiaryContext hook must be used inside DiaryProvider');

  return context;
}
