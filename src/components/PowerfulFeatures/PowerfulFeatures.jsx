import FeaturesList from "../FeaturesList/FeaturesList";
import s from "./PowerfulFeatures.module.css";

const PowerfulFeatures = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <h1 className={s.title}>
            Discover the <span className={s.titleAccent}>Powerful</span>{" "}
            Features of Enigma Code-ai
          </h1>
          <p className={s.subtitle}>
            Unlock the full potential of your development workflow with our
            AI-powered programming assistant.
          </p>
          <button type="button" className={s.startedBtn}>
            Get Started
          </button>
        </div>
        <FeaturesList />
      </div>
    </>
  );
};

export default PowerfulFeatures;
