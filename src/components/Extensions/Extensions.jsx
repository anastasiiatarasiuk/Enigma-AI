import ExtensionsList from "../ExtensionsList/ExtensionsList";
import s from "./Extensions.module.css";

const Extensions = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <h2 className={s.title}>Popular Extensions</h2>
          <p className={s.description}>
            Explore some of the most popular extensions that developers love to
            use alongside Enigma Code-ai.
          </p>
        </div>
        <ExtensionsList />
      </div>
    </>
  );
};

export default Extensions;
