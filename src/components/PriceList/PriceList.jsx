import s from "./PriceList.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";

const PriceList = () => {
  return (
    <div>
      <section className={s.priceList}>
        <article className={s.card}>
          <div className={s.titleContainer}>
            <h2 className={s.title}>Free</h2>
            <p className={s.description}>
              Everything you need to supercharge your productivity.
            </p>
            <div className={s.priceContainer}>
              <p className={s.price}>$0 </p>
              <p className={s.priceSecondary}>/ month</p>
            </div>
          </div>
          <span className={s.underline}></span>
          <div className={s.listContainer}>
            <p className={s.listTitle}>What’s included</p>
            <ul className={s.includedList}>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checked} />
                Everything in Free
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checked} />
                More than 1000 Extensions
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checked} />
                Custom Extensions
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checked} />
                Developer Tools
              </li>
            </ul>
          </div>
          <button className={s.cardBtn}>
            Download Now
            <SvgIcon id="icon-right" className={s.btnIcon} />
          </button>
        </article>

        <article className={s.primary}>
          <div className={s.titleContainer}>
            <h2 className={s.primaryTitle}>Pro</h2>
            <p className={s.description}>
              Unlock a new level of your personal productivity.
            </p>
            <div className={s.priceContainer}>
              <p className={s.price}>$8</p>
              <span className={s.priceSecondary}>/ month</span>
            </div>
          </div>
          <span className={s.underline}></span>
          <div className={s.listContainer}>
            <p className={s.listTitle}>What’s included</p>
            <ul className={s.includedList}>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checkedPrimary} />
                Everything in Free
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checkedPrimary} />
                Enigma AI
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checkedPrimary} />
                Cloud Sync
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checkedPrimary} />
                Custom Themes
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checkedPrimary} />
                More than 1000 Extensions
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checkedPrimary} />
                Custom Extensions
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checkedPrimary} />
                Developer Tools
              </li>
            </ul>
          </div>
          <button className={s.cardBtn}>
            Upgrade Now
            <SvgIcon id="icon-right" className={s.btnIcon} />
          </button>
        </article>

        <article className={s.card}>
          <div className={s.titleContainer}>
            <h2 className={s.title}>Team</h2>
            <p className={s.description}>
              Everything you need to supercharge your productivity.
            </p>
            <div className={s.priceContainer}>
              <p className={s.price}>$10</p>
              <span className={s.priceSecondary}>/ month</span>
            </div>
          </div>
          <span className={s.underline}></span>
          <div className={s.listContainer}>
            <p className={s.listTitle}>What’s included</p>
            <ul className={s.includedList}>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checked} />
                Everything in Free
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checked} />
                Unlimited Shared Commands
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checked} />
                Unlimited Shared Quicklinks
              </li>
              <li className={s.includedItem}>
                <SvgIcon id="icon-checked" className={s.checked} />
                Unlimited Team Members
              </li>
            </ul>
          </div>
          <button className={s.cardBtn}>
            Upgrade Now
            <SvgIcon id="icon-right" className={s.btnIcon} />
          </button>
        </article>
      </section>
    </div>
  );
};

export default PriceList;
