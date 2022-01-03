import {useEasybase} from 'easybase-react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import './style.css';

function Login() {
  const {signIn} = useEasybase();

  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setError('');
    signIn(email, password)
      .then(res => {
        if (!res.success) {
          setError('Возникла ошибка при входе');
          return;
        }
        const from = location.state?.from ?? '/';
        navigate(from, {replace: true});
      });
  };

  return <main className="loginRoute">
    <form
      className="loginRoute__form"
      onSubmit={onSubmit}
    >
      <div className="loginRoute__fieldWrapper">
        <label
          htmlFor="email"
          className="loginRoute__fieldLabel"
        >
          Электронная почта
        </label>

        <input
          id="email"
          type="email"
          required={true}
          className="loginRoute__fieldInput"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="loginRoute__fieldWrapper">
        <label htmlFor="password">
          Пароль
        </label>

        <input
          id="password"
          type="password"
          required={true}
          className="loginRoute__fieldInput"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      {
        error.length > 0 &&
        <div className="loginRoute__error">
          {error}
        </div>
      }

      <button
        type="submit"
        className="loginRoute__submitButton"
      >
        Войти
      </button>
    </form>
  </main>;
}

export default Login;
