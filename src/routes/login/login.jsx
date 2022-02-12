import {useEasybase} from 'easybase-react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import LoginForm from '../../components/login-form/login-form';
import './login.css';

function Login() {
  const {signIn} = useEasybase();
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (email, password) => {
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Заполни все поля');
      setIsLoading(false);
      return;
    }

    signIn(email, password)
      .then(res => {
        setIsLoading(false);

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
      isLoading={isLoading}
    />
  </main>;
}

export default Login;
