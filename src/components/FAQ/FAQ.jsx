import s from "./FAQ.module.css";
import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: <span className={s.label}>What is Enigma Code-ai?</span>,
    children: (
      <p className={s.text}>
        Have questions about Enigma Code-ai? Here are some of the most common
        inquiries we receive from our users. If you don’t find the answer you’re
        looking for, feel free to contact us.
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <span className={s.label}>How do I get started with Enigma Code-ai?</span>
    ),
    children: (
      <p className={s.text}>
        To get started with Enigma Code-ai, sign up on their official website,
        log in, and explore the interface, including tools like code generation,
        debugging, or optimization. Set up your first project by selecting your
        programming language or framework and integrating it into your workflow
        using IDE plugins or APIs. Learn more through their documentation,
        tutorials, and support channels to maximize the platforms capabilities.
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <span className={s.label}>
        What programming languages does Enigma Code-ai support?
      </span>
    ),
    children: (
      <p className={s.text}>
        Enigma Code-ai supports a variety of programming languages, including
        popular ones like Python, JavaScript, Java, and C++. It may also offer
        compatibility with specialized languages for web development, data
        science, or machine learning. Check the platforms documentation for a
        complete list of supported languages and frameworks.
      </p>
    ),
  },
  {
    key: "4",
    label: <span className={s.label}>Can I use Enigma Code-ai for free?</span>,
    children: (
      <p className={s.text}>
        Yes, Enigma Code-ai may offer free plans or trials for new users,
        depending on its pricing model. Free plans often have limited features,
        while premium options provide full access to advanced tools and
        functionalities. Check the official website or documentation for details
        on available plans and their features.
      </p>
    ),
  },
  {
    key: "5",
    label: (
      <span className={s.label}>
        How does the AI-powered code completion work?
      </span>
    ),
    children: (
      <p className={s.text}>
        AI-powered code completion uses machine learning models trained on vast
        amounts of code to predict what you’re likely to write next. It analyzes
        the context of your code, such as variables, functions, and libraries,
        to provide accurate suggestions or auto-complete lines of code. This
        helps streamline coding, reduce errors, and boost productivity.
      </p>
    ),
  },
  {
    key: "6",
    label: (
      <span className={s.label}>What if I need help or have a question?</span>
    ),
    children: (
      <p className={s.text}>
        If you need help or have a question, start by exploring the platforms
        documentation or FAQ section for answers. You can also reach out to
        their support team through email, chat, or a ticketing system.
        Additionally, check for community forums or discussion boards to connect
        with other users for assistance.
      </p>
    ),
  },
];

const FAQ = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.titleContainer}>
          <h2 className={s.title}>
            Frequently Asked <span className={s.titleAccent}>Questions</span>
          </h2>
          <p className={s.description}>
            Have questions about Enigma Code-ai? Here are some of the most
            common inquiries we receive from our users. If you don’t find the
            answer you’re looking for, feel free to contact us.
          </p>
        </div>
        <div className={s.listContainer}>
          <Collapse
            items={items}
            bordered={false}
            defaultActiveKey={["1"]}
            expandIconPosition={"end"}
          />
        </div>
      </div>
    </>
  );
};

export default FAQ;
