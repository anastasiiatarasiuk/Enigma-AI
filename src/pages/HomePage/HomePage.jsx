import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
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
      </div>
    </div>
  );
};

export default HomePage;
