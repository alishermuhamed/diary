import {useLocation, Navigate} from 'react-router-dom';
import {useEasybase} from 'easybase-react';

function RequireAuth(props) {
  const {isUserSignedIn} = useEasybase();
  const location = useLocation();

  if (isUserSignedIn())
    return props.children;

  return <Navigate
    to="/login"
    replace={true}
    state={{from: location.pathname}}
  />;
}

export default RequireAuth;
