import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import Price from "../../components/Price/Price";
import Workflow from "../../components/Workflow/Workflow";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <section className={s.hero}>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
      <div className={s.bgContainer}>
        <section>
          <Workflow />
        </section>
        <section>
          <Price />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
