import EnvironmentList from "../EnvironmentList/EnvironmentList";
import s from "./Environment.module.css";

const Environment = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <h1 className={s.title}>
            Supercharge Your Development Environment with
            <span className={s.titleAccent}> Enigma</span> Code-ai Extension
          </h1>
          <p className={s.subtitle}>
            Seamlessly integrate our AI-powered programming assistant into your
            favorite IDEs and streamline your coding workflow.
          </p>
        </div>
        <div className={s.listTitleContainer}>
          <h2 className={s.listTitle}>Supported Development Environments</h2>
          <p className={s.listSubtitle}>
            Our extension is compatible with a wide range of popular IDEs to
            ensure a seamless coding experience, no matter your preference.
          </p>
        </div>
        <EnvironmentList />
      </div>
    </>
  );
};

export default Environment;
