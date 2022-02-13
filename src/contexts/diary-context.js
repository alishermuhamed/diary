import {createContext, useContext, useEffect, useState} from 'react';
import {useEasybase} from 'easybase-react';
import {DIARY_TABLE_NAME} from '../constants';

const DiaryContext = createContext(undefined);

export function DiaryProvider(props) {
  const [records, setRecords] = useState([]);
  const {db} = useEasybase();

  useEffect(() => {
    db(DIARY_TABLE_NAME, true)
      .return()
      .orderBy({by: 'd', sort: 'desc'})
      .all()
      .then(res => {
        if (!Array.isArray(res))
          return;
        setRecords(res);
      });
  }, []);

  const addRecord = record => db(DIARY_TABLE_NAME)
    .insert(record)
    .one()
    .then(res => {
      if (res === 1) {
        const newRecords = [record, ...records];
        setRecords(newRecords);
      }
      return res;
    });

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
