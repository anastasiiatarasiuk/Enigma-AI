import Header from "../Header/Header";
import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className={s.headerWrapper}>
        <Header />
      </div>
      <div className={s.mainContent}>{children}</div>
    </div>
  );
};

export default Layout;
