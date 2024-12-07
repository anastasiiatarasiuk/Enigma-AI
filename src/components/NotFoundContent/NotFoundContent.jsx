import { Link } from "react-router-dom";
import s from "./NotFoundContent.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";

const NotFoundContent = () => {
  return (
    <>
      <div className={s.content}>
        <h2 className={s.title}>
          4<span className={s.accent}>0</span>4
        </h2>
        <p className={s.subtitle}>PAGE NOT FOUND !!</p>
        <Link to="/" className={s.link}>
          Back to homepage
          <SvgIcon id="icon-right" className={s.linkIcon} />
        </Link>
      </div>
    </>
  );
};

export default NotFoundContent;
