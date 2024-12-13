import { Link } from "react-router-dom";
import s from "./TakeOff.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";

const TakeOff = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <h2 className={s.title}>Ready for take-off?</h2>
          <p className={s.description}>
            Download the Enigma app and start taking your productivity to new
            heights.
          </p>
        </div>
        <Link to="/download" className={s.link}>
          Download on Mac <SvgIcon id="icon-right" className={s.linkIcon} />
        </Link>
      </div>
    </>
  );
};

export default TakeOff;
