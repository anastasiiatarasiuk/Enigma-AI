import s from "./NotFound.module.css";
import NotFoundContent from "../../components/NotFoundContent/NotFoundContent";

const NotFound = () => {
  return (
    <>
      <div className={s.notFound}>
        <NotFoundContent />
      </div>
    </>
  );
};

export default NotFound;
