import {Link} from 'react-router-dom';
import Button from '../button/button';
import './header.css';

function Header(props) {
  return <header className="header">
    <Link
      className="header__title-link"
      to="/"
    >
      <h1 className="header__title">
        Дневник
      </h1>
    </Link>

    {
      props.isUserSignedIn &&
      <Button
        className="header__logout-button"
        onClick={props.onSignOut}
        title="Выйти"
      />
    }
  </header>;
}

export default Header;
