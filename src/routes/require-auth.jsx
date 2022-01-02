import {useLocation, Navigate} from 'react-router-dom';

function RequireAuth(props) {
  const isUserSignedIn = () => false;
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
