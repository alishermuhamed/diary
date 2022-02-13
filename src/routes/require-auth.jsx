import {useLocation, Navigate} from 'react-router-dom';
import {useEasybase} from 'easybase-react';
import {DiaryProvider} from '../contexts/diary-context';

function RequireAuth(props) {
  const {isUserSignedIn} = useEasybase();
  const location = useLocation();

  if (isUserSignedIn())
    return <DiaryProvider>
      {props.children}
    </DiaryProvider>;

  return <Navigate
    to="/login"
    replace={true}
    state={{from: location.pathname}}
  />;
}

export default RequireAuth;
