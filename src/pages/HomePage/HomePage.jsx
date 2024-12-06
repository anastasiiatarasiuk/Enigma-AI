import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
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
    </div>
  );
};

export default HomePage;
