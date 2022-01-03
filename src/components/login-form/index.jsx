import {useState} from 'react';
import FieldWrapper from '../field-wrapper';
import Button from '../button';
import './style.css';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit(email, password);
  };

  return <form
    className="login-form"
    onSubmit={onSubmit}
  >
    <FieldWrapper
      fieldId="email"
      label="Электронная почта"
    >
      <input
        id="email"
        type="email"
        required={true}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </FieldWrapper>

    <FieldWrapper
      fieldId="password"
      label="Пароль"
    >
      <input
        id="password"
        type="password"
        required={true}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </FieldWrapper>

    {
      props.error.length > 0 &&
      <div className="login-form__error">
        {props.error}
      </div>
    }

    <Button
      type="submit"
      className="login-form__submit-button"
      title="Войти"
    />
  </form>;
}

export default LoginForm;