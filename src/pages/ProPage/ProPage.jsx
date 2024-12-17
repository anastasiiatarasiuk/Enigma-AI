import FAQ from "../../components/FAQ/FAQ";
import Price from "../../components/Price/Price";
import TakeOff from "../../components/TakeOff/TakeOff";
import s from "./ProPage.module.css";

const ProPage = () => {
  return (
    <>
      <section className={s.bg}>
        <Price />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <TakeOff />
      </section>
    </>
  );
};

export default ProPage;
