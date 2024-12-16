import Environment from "../../components/Environment/Environment";
import s from "./ExtensionPage.module.css";

const ExtensionPage = () => {
  return (
    <>
      <section className={s.hero}>
        <Environment />
      </section>
    </>
  );
};

export default ExtensionPage;
