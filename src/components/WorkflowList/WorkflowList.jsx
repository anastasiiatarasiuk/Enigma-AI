import s from "./WorkflowList.module.css";

const WorkflowList = () => {
  return (
    <>
      <ul className={s.workflowList}>
        <li className={s.workflowItem}>
          <img
            src="/images/Advantage/tools.webp"
            alt="tools"
            className={s.image}
          />
          <h3 className={s.title}>Access to Advanced Tools</h3>
          <p className={s.description}>
            Utilize our state-of-the-art AI programming assistant and other
            powerful development tools to enhance your coding projects.
          </p>
        </li>
        <li className={s.workflowItem}>
          <img
            src="/images/Advantage/environment.webp"
            alt="environment"
            className={s.image}
          />
          <h3 className={s.title}>Collaborative Environment</h3>
          <p className={s.description}>
            Work alongside a vibrant community of developers, share insights,
            and collaborate on innovative projects.
          </p>
        </li>
        <li className={s.workflowItem}>
          <img
            src="/images/Advantage/learning.webp"
            alt="learning"
            className={s.image}
          />
          <h3 className={s.title}>Continuous Learning</h3>
          <p className={s.description}>
            Stay ahead of the curve with access to the latest resources,
            tutorials, and best practices in AI and software development.
          </p>
        </li>
      </ul>
    </>
  );
};

export default WorkflowList;
