import s from "./EnvironmentList.module.css";

const EnvironmentList = () => {
  const items = [
    {
      id: 1,
      img: "/images/Environments/vscode.webp",
      title: "Visual Studio Code (VS Code)",
      description:
        "Access all core features including intelligent code completion, real-time debugging, and optimization suggestions.",
    },
    {
      id: 2,
      img: "/images/Environments/pycharm.webp",
      title: "PyCharm",
      description:
        "Benefit from AI-driven insights and suggestions tailored for Python development.",
    },
    {
      id: 3,
      img: "/images/Environments/intelli.webp",
      title: "IntelliJ IDEA",
      description:
        "Get the most out of Java development with our advanced AI assistant. Seamless integration for a smooth, efficient ",
    },
    {
      id: 4,
      img: "/images/Environments/sublime.webp",
      title: "Sublime Text",
      description:
        "Enhance your Sublime Text editor with powerful AI features. Improve your productivity and code quality ",
    },
    {
      id: 5,
      img: "/images/Environments/atom.webp",
      title: "Atom",
      description:
        "Incorporate Enigma Code-ai's capabilities into Atom for a smarter coding workflow. Enjoy real-time assistance and code ",
    },
    {
      id: 6,
      img: "/images/Environments/vim.webp",
      title: "Vim",
      description:
        "Incorporate Enigma Code-ai`s capabilities into Vim for a smarter coding workflow. Enjoy real-time assistance and code ",
    },
  ];

  return (
    <>
      <ul className={s.environmentList}>
        {items.map((item) => (
          <li key={item.id} className={s.environmentItem}>
            <img src={item.img} alt={item.title} className={s.itemImg} />
            <div className={s.textContainer}>
              <h3 className={s.itemTitle}>{item.title}</h3>
              <p className={s.itemDescription}>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EnvironmentList;
