import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (!event.target.closest(`.${s.dropdown}`)) {
      setIsDropdownOpen(false);
    }
  };

  const handleMenuClick = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

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
        <li className={`${s.linkItem} ${s.dropdown}`}>
          <button className={s.dropdownToggle} onClick={toggleDropdown}>
            <SvgIcon id="icon-grid" className={s.navLinkIcon} />
            Pages
          </button>
          {isDropdownOpen && (
            <ul className={s.dropdownMenu}>
              <li>
                <NavLink to="/about" onClick={handleMenuClick}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" onClick={handleMenuClick}>
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog-list" onClick={handleMenuClick}>
                  Blog List
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-police" onClick={handleMenuClick}>
                  Privacy Police
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms" onClick={handleMenuClick}>
                  Terms
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
