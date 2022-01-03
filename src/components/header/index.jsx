import {Link} from 'react-router-dom';
import './style.css';

function Header() {
  return <header className="header">
    <Link
      className="header__title"
      to="/"
    >
      <h1>Дневник</h1>
    </Link>
  </header>;
}

export default Header;
