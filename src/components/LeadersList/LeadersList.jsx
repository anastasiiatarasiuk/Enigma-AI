import s from "./LeadersList.module.css";
const LeadersList = () => {
  return (
    <>
      <div className={s.listContainer}>
        <h2 className={s.title}>Trusted By Industry Leaders</h2>
        <ul className={s.list}>
          <li>
            <img src="/src/images/Hero/amazon.webp" alt="amazon" />
          </li>
          <li>
            <img src="/src/images/Hero/apple.webp" alt="apple" />
          </li>
          <li>
            <img src="/src/images/Hero/youtube.webp" alt="YouTube" />
          </li>
          <li>
            <img src="/src/images/Hero/figma.webp" alt="Figma" />
          </li>
          <li>
            <img src="/src/images/Hero/google.webp" alt="Google" />
          </li>
          <li>
            <img src="/src/images/Hero/x.webp" alt="X" />
          </li>
          <li>
            <img src="/src/images/Hero/vercel.webp" alt="Vercel" />
          </li>
          <li>
            <img src="/src/images/Hero/airbnd.webp" alt="Airbnb" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeadersList;
