import Hero from "../../components/Hero/Hero";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <section className={s.hero}>
        <Hero />
      </section>
    </div>
  );
};

export default HomePage;
