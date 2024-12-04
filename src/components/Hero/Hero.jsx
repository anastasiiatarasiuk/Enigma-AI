import s from "./Hero.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";
const Hero = () => {
  return (
    <>
      <div className={s.contentWrapper}>
        <div className={s.titleContainer}>
          <h1 className={s.title}>
            Unlock Your Coding Potential with Enigma Code-ai
          </h1>
          <p className={s.description}>
            Learn coding and design with Enigma-AI, your ultimate destination
            for mastering the art of creating stunning designs and building
            powerful applications.
          </p>
          <div className={s.btnContainer}>
            <button type="button" className={s.firstBtn}>
              Get Started
            </button>
            <button type="button" className={s.secondBtn}>
              Start a Free Trial
              <SvgIcon id="icon-right" className={s.btnIcon} />
            </button>
          </div>
        </div>
        <div className={s.imgContainer}>
          <img src="/src/images/Hero/app.webp" alt="code" className={s.image} />
        </div>
      </div>
    </>
  );
};

export default Hero;