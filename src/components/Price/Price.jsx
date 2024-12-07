import PriceList from "../PriceList/PriceList";
import s from "./Price.module.css";

const Price = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <h2 className={s.title}>
            Choose the Plan That’s Right{" "}
            <span className={s.accent}>for You</span>
          </h2>
          <p className={s.description}>
            The core of Enigma is free, including more than 1000 extensions.
            Purchase the Pro Plan to unlock a new level of productivity with AI,
            Cloud Sync and much more!
          </p>
        </div>
        <PriceList />
      </div>
    </>
  );
};

export default Price;
