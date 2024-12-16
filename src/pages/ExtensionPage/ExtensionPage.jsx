import Environment from "../../components/Environment/Environment";
import Extensions from "../../components/Extensions/Extensions";
import s from "./ExtensionPage.module.css";

const ExtensionPage = () => {
  return (
    <>
      <section className={s.hero}>
        <Environment />
      </section>
      <section>
        <Extensions />
      </section>
    </>
  );
};

export default ExtensionPage;
