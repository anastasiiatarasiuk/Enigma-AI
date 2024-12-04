import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <Link to="/" className={s.logo}>
          <SvgIcon id="icon-union" className={s.logoIcon} />
          Enigma-AI
        </Link>
        <Navigation />
        <Link to="/download" className={s.downloadLink}>
          Download App
        </Link>
      </header>
    </div>
  );
};

export default Header;
