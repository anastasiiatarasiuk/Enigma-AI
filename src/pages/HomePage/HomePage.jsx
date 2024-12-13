import FAQ from "../../components/FAQ/FAQ";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import Price from "../../components/Price/Price";
import Subscribe from "../../components/Subscribe/Subscribe";
import TakeOff from "../../components/TakeOff/TakeOff";
import Workflow from "../../components/Workflow/Workflow";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <section className={s.hero}>
        <Hero />
      </section>
      <Features />
      <div className={s.bgContainer}>
        <Workflow />
        <Price />
        <FAQ />
        <TakeOff />
        <Subscribe />
      </div>
    </>
  );
};

export default HomePage;
