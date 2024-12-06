import WorkflowList from "../WorkflowList/WorkflowList";
import s from "./Workflow.module.css";

const Workflow = () => {
  return (
    <>
      <div className={s.content}>
        <div className={s.titleContainer}>
          <h2 className={s.title}>
            Supercharge your <span className={s.accent}>workflow.</span>
          </h2>
          <p className={s.subtitle}>
            Stay ahead of the competition by quickly identifying trends and
            patterns in your data with our innovative algorithms.
          </p>
        </div>
        <div className={s.imgContainer}>
          <img src="/images/Advantage/card.webp" />
        </div>
        <WorkflowList />
      </div>
    </>
  );
};

export default Workflow;
