import s from "./FeaturesList.module.css";
import SvgIcon from "../SvgIcon/SvgIcon";

const FeaturesList = () => {
  return (
    <div>
      <ul className={s.featuresList}>
        <li className={`${s.featuresListItem} ${s.firstItem}`}>
          <img
            src="/images/Features/dots.webp"
            alt=""
            className={s.titleImage}
          />
          <h3 className={s.titleAccent}>
            Enigma Code-ai is your cutting-edge AI-powered programming
            assistant, designed to revolutionize your coding experience. Whether
            you`re a seasoned developer or just starting out.
          </h3>
        </li>
        <li>
          <ul className={s.rightList}>
            <li className={`${s.featuresListItem} ${s.secondItem}`}>
              <img
                src="/images/Features/completion.webp"
                alt=""
                className={s.image}
              />
              <div className={s.textContainer}>
                <div>
                  <SvgIcon className={s.icon} id="icon-data" />
                </div>
                <div className={s.textContent}>
                  <h3 className={s.title}>Intelligent Code Completion</h3>
                  <p className={s.description}>
                    Boost your productivity with our advanced code completion
                    that understands your context and suggests the best possible
                    code snippets.
                  </p>
                </div>
              </div>
            </li>
            <li className={`${s.featuresListItem} ${s.featuresItemImages}`}>
              <img
                src="/images/Features/components-1.webp"
                alt=""
                className={s.images}
              />
              <img
                src="/images/Features/components-2.webp"
                alt=""
                className={s.images}
              />
            </li>
          </ul>
        </li>
        <li className={`${s.featuresListItem}  ${s.bottomItems}`}>
          <img
            src="/images/Features/debuging.webp"
            alt=""
            className={s.image}
          />
          <div className={s.textContainer}>
            <div>
              <SvgIcon className={s.icon} id="icon-message" />
            </div>
            <div className={s.textContent}>
              <h3 className={s.title}>Real-time Debugging</h3>
              <p className={s.description}>
                Identify and fix errors on the fly with our AI-driven debugging
                tool, ensuring your code runs smoothly.
              </p>
            </div>
          </div>
        </li>
        <li className={`${s.featuresListItem}  ${s.bottomItems}`}>
          <img
            src="/images/Features/integration.webp"
            alt=""
            className={s.image}
          />
          <div className={s.textContainer}>
            <div>
              <SvgIcon className={s.icon} id="icon-command-square" />
            </div>
            <div className={s.textContent}>
              <h3 className={s.title}>Seamless Integration</h3>
              <p className={s.description}>
                Easily integrate Enigma Code-ai into your favorite development
                environments, including VS Code, PyCharm, and more.
              </p>
            </div>
          </div>
        </li>
        <li className={`${s.featuresListItem} ${s.bottomItems}`}>
          <img
            src="/images/Features/optimization.webp"
            alt=""
            className={s.image}
          />
          <div className={s.textContainer}>
            <div>
              <SvgIcon className={s.icon} id="icon-code" />
            </div>
            <div className={s.textContent}>
              <h3 className={s.title}>Optimization Recommendations</h3>
              <p className={s.description}>
                Receive actionable insights on how to improve your code’s
                efficiency and performance, tailored to your specific project
                needs.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesList;
