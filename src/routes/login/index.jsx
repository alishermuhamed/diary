import {useState} from 'react';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setError('');
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
          className="loginRoute__fieldInput"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      {
        error.length > 0 &&
        <div className="loginRoute__error">
          Ошибка при входе
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
