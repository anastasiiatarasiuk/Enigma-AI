import FeaturesList from "../FeaturesList/FeaturesList";
import s from "./Features.module.css";

const Features = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <h2 className={s.title}>
            Features That Empower Your{" "}
            <span className={s.accent}>Development</span>
          </h2>
          <p className={s.subtitle}>
            Our suite of features is designed to enhance every aspect of your
            development process. From writing code to debugging and optimizing,
            Enigma Code-ai provides you with the tools you need to succeed.
          </p>
        </div>
        <div className={s.featuresListContainer}>
          <FeaturesList />
        </div>
      </div>
    </>
  );
};

export default Features;
