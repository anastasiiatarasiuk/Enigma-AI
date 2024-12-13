import s from "./Footer.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";

const Footer = () => {
  return (
    <>
      <footer className={s.container}>
        <div className={s.contentContainer}>
          <div className={s.logoContentContainer}>
            <div className={s.logoContainer}>
              <h2 className={s.title}>
                <SvgIcon id="icon-union" className={s.logoIcon} />
                Enigma - AI
              </h2>
              <p className={s.description}>
                Unlock Your Coding Potential with Enigma
              </p>
            </div>
            <div className={s.socialListContainer}>
              <ul className={s.socialList}>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgIcon id="icon-twitter" className={s.socialIcon} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgIcon id="icon-github" className={s.socialIcon} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://slack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgIcon id="icon-slack" className={s.socialIcon} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.listsContainer}>
            <div className={s.productListContainer}>
              <h3 className={s.listTitle}>Product</h3>
              <ul className={s.productList}>
                <li className={s.listItem}>Features</li>
                <li className={s.listItem}>Extension</li>
                <li className={s.listItem}>Pro</li>
                <li className={s.listItem}>Changelog</li>
                <li className={s.listItem}>Docs</li>
                <li className={s.listItem}>Download</li>
              </ul>
            </div>
            <div className={s.resourcesListContainer}>
              <h3 className={s.listTitle}>Resources</h3>
              <ul className={s.resourcesList}>
                <li className={s.listItem}>About us</li>
                <li className={s.listItem}>Blog</li>
                <li className={s.listItem}>Careers</li>
                <li className={s.listItem}>Customers</li>
                <li className={s.listItem}>Brand</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.imgContainer}>
          <img src="/images/Footer/earth.webp" alt="earth" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
