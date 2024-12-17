import PowerfulFeatures from "../../components/PowerfulFeatures/PowerfulFeatures";
import TakeOff from "../../components/TakeOff/TakeOff";
import Workflow from "../../components/Workflow/Workflow";
import s from "./FeaturesPage.module.css";

const FeaturesPage = () => {
  return (
    <>
      <section className={s.hero}>
        <PowerfulFeatures />
      </section>
      <section className={s.bgContainer}>
        <Workflow />
        <TakeOff />
      </section>
    </>
  );
};

export default FeaturesPage;
