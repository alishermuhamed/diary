import {Link} from 'react-router-dom';
import Button from '../button/button';
import './header.css';

function Header(props) {
  return <header className="header">
    <Link
      className="header__title"
      to="/"
    >
      <h1>Дневник</h1>
    </Link>

    {
      props.isUserSignedIn &&
      <Button
        onClick={props.onSignOut}
        title="Выйти"
      />
    }
  </header>;
}

export default Header;
