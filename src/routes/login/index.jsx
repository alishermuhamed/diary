import {useEasybase} from 'easybase-react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import LoginForm from '../../components/login-form';
import './style.css';

function Login() {
  const {signIn} = useEasybase();
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const onSubmit = (email, password) => {
    setError('');
    signIn(email, password)
      .then(res => {
        if (!res.success) {
          setError('Ошибка при входе');
          return;
        }
        const from = location.state?.from ?? '/';
        navigate(from, {replace: true});
      });
  };

  return <main className="login-page">
    <LoginForm
      onSubmit={onSubmit}
      error={error}
    />
  </main>;
}

export default Login;
