// import s from "./ExtensionsList.module.css";
// import SvgIcon from "../SvgIcon/SvgIcon";

// const ExtensionsList = () => {
//   const items = [
//     {
//       id: 1,
//       img: "/images/Extensions/brew.webp",
//       downloads: "10M+",
//       title: "Brew",
//       description:
//         "The missing package manager for macOS (or Linux). Simplifies the installation of software.",
//     },
//     {
//       id: 2,
//       img: "/images/Extensions/chatgpt.webp",
//       downloads: "5M+",
//       title: "ChatGPT",
//       description:
//         "An AI language model that can generate human-like text based on input. Useful for writing, coding assistance, and more.",
//     },
//     {
//       id: 3,
//       img: "/images/Extensions/translate.webp",
//       downloads: "20M+",
//       title: "Google Translate",
//       description:
//         "A powerful translation tool that supports multiple languages, making it easy to understand and communicate in ",
//     },
//     {
//       id: 4,
//       img: "/images/Extensions/vscode.webp",
//       downloads: "50M+",
//       title: "Visual Studio Code",
//       description:
//         "A free, powerful code editor with built-in support for various programming languages and extensions.",
//     },
//     {
//       id: 5,
//       img: "/images/Extensions/kill.webp",
//       downloads: "1M+",
//       title: "Kill Process",
//       description:
//         "Easily terminate processes directly from your IDE, helping you manage your system resources effectively.",
//     },
//     {
//       id: 6,
//       img: "/images/Extensions/github.webp",
//       downloads: "25M+",
//       title: "GitHub",
//       description:
//         "Seamlessly integrate with GitHub for version control, collaboration, and project management.",
//     },
//     {
//       id: 7,
//       img: "/images/Extensions/picker.webp",
//       downloads: "3M+",
//       title: "Color Picker",
//       description:
//         "A simple yet powerful tool to pick colors from anywhere on your screen, ideal for web and graphic designers. ",
//     },
//     {
//       id: 8,
//       img: "/images/Extensions/arc.webp",
//       downloads: "500K+",
//       title: "Arc",
//       description:
//         "A modern browser for developers that enhances productivity with features like tab organization and code snippets.",
//     },
//     {
//       id: 9,
//       img: "/images/Extensions/notion.webp",
//       downloads: "1M+",
//       title: "Notion",
//       description:
//         "All-in-one workspace for notes, tasks, databases, and collaboration, helping you stay organized and productive.",
//     },
//   ];

//   return (
//     <>
//       <ul className={s.extensionsList}>
//         {items.map((item) => (
//           <li key={item.id} className={s.extensionsItem}>
//             <div className={s.titleContainer}>
//               <div className={s.titleContent}>
//                 <img src={item.img} alt={item.title} className={s.itemImg} />
//                 <h3 className={s.itemTitle}>{item.title}</h3>
//               </div>
//               <div className={s.downloadsContent}>
//                 <SvgIcon id="icon-downloads" className={s.downloadsIcon} />
//                 <p className={s.downloadText}>{item.downloads}</p>
//               </div>
//             </div>
//             <p className={s.itemDescription}>{item.description}</p>
//             <a className={s.installLink}>
//               Install Extension
//               <SvgIcon id="icon-install" className={s.installIcon} />
//             </a>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ExtensionsList;
import s from "./ExtensionsList.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";

const ExtensionsList = () => {
  const items = [
    {
      id: 1,
      img: "/images/Extensions/brew.webp",
      downloads: "10M+",
      title: "Brew",
      description:
        "The missing package manager for macOS (or Linux). Simplifies the installation of software.",
      link: "https://brew.sh/",
    },
    {
      id: 2,
      img: "/images/Extensions/chatgpt.webp",
      downloads: "5M+",
      title: "ChatGPT",
      description:
        "An AI language model that can generate human-like text based on input. Useful for writing, coding assistance, and more.",
      link: "https://chat.openai.com/",
    },
    {
      id: 3,
      img: "/images/Extensions/translate.webp",
      downloads: "20M+",
      title: "Google Translate",
      description:
        "A powerful translation tool that supports multiple languages, making it easy to understand and communicate in.",
      link: "https://chromewebstore.google.com/detail/google-%D0%BF%D0%B5%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0%D1%87/aapbdbdomjkkjkaonfhkkikfgjllcleb",
    },
    {
      id: 4,
      img: "/images/Extensions/vscode.webp",
      downloads: "50M+",
      title: "Visual Studio Code",
      description:
        "A free, powerful code editor with built-in support for various programming languages and extensions.",
      link: "https://code.visualstudio.com/",
    },
    {
      id: 5,
      img: "/images/Extensions/kill.webp",
      downloads: "1M+",
      title: "Kill Process",
      description:
        "Easily terminate processes directly from your IDE, helping you manage your system resources effectively.",
      link: "https://marketplace.visualstudio.com/items?itemName=KillProcess",
    },
    {
      id: 6,
      img: "/images/Extensions/github.webp",
      downloads: "25M+",
      title: "GitHub",
      description:
        "Seamlessly integrate with GitHub for version control, collaboration, and project management.",
      link: "https://github.com/",
    },
    {
      id: 7,
      img: "/images/Extensions/picker.webp",
      downloads: "3M+",
      title: "Color Picker",
      description:
        "A simple yet powerful tool to pick colors from anywhere on your screen, ideal for web and graphic designers.",
      link: "https://chromewebstore.google.com/detail/color-picker-for-chrome/clldacgmdnnanihiibdgemajcfkmfhia",
    },
    {
      id: 8,
      img: "/images/Extensions/arc.webp",
      downloads: "500K+",
      title: "Arc",
      description:
        "A modern browser for developers that enhances productivity with features like tab organization and code snippets.",
      link: "https://arc.net/",
    },
    {
      id: 9,
      img: "/images/Extensions/notion.webp",
      downloads: "1M+",
      title: "Notion",
      description:
        "All-in-one workspace for notes, tasks, databases, and collaboration, helping you stay organized and productive.",
      link: "https://www.notion.com/",
    },
  ];

  return (
    <>
      <ul className={s.extensionsList}>
        {items.map((item) => (
          <li key={item.id} className={s.extensionsItem}>
            <div className={s.titleContainer}>
              <div className={s.titleContent}>
                <img src={item.img} alt={item.title} className={s.itemImg} />
                <h3 className={s.itemTitle}>{item.title}</h3>
              </div>
              <div className={s.downloadsContent}>
                <SvgIcon id="icon-downloads" className={s.downloadsIcon} />
                <p className={s.downloadText}>{item.downloads}</p>
              </div>
            </div>
            <p className={s.itemDescription}>{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={s.installLink}
            >
              Install Extension
              <SvgIcon id="icon-install" className={s.installIcon} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExtensionsList;
