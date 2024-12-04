import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";

function Navigation() {
  return (
    <nav className={s.navigation}>
      <ul className={s.links}>
        <li>
          <NavLink to="/extension" className={s.linkItem}>
            <SvgIcon id="icon-book" className={s.navLinkIcon} />
            Extension
          </NavLink>
        </li>
        <li>
          <NavLink to="/features" className={s.linkItem}>
            <SvgIcon id="icon-menu" className={s.navLinkIcon} />
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/pro" className={s.linkItem}>
            <SvgIcon id="icon-card" className={s.navLinkIcon} />
            Pro
          </NavLink>
        </li>
        <li>
          <NavLink to="/developer" className={s.linkItem}>
            <SvgIcon id="icon-code" className={s.navLinkIcon} />
            Developer
          </NavLink>
        </li>
        <li className={s.linkItem}>
          <SvgIcon id="icon-grid" className={s.navLinkIcon} />
          Pages
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
