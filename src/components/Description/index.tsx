import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import { BsArrowUpRight } from "react-icons/bs";
import GsapMagnetic from "../buttons/magnetic/gsap";
import Magnetic from "../../common/Magnetic";

const Description: React.FC = () => {
  const phrase =
    "I’m an AI & Data Science student with a strong interest in programming, design, UI/UX, and startup ecosystems. I enjoy working at the intersection of technology and creativity, turning ideas into clear, user-focused solutions.";

  const description = useRef<HTMLDivElement>(null);
  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p className={styles.mainPara}>
          {phrase.split(" ").map((word, index) => (
            <span key={index} className={styles.mask}>
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <div className={styles.right}>
          <motion.p
            className={styles.subPara}
            variants={opacity}
            animate={isInView ? "open" : "closed"}
          >
            Combining analytical computing with creative design principles to transform complex ideas into simple, visually engaging, and highly functional digital applications.
          </motion.p>
          <div className={styles.about}>
            <Magnetic>
              <a href="/about" className="no-underline text-inherit">
                <p className={styles.hoverEffect}>More about Darani</p>
              </a>
            </Magnetic>
            <GsapMagnetic>
              <a href="/about" className="no-underline text-inherit">
                <div className={styles.button}>
                  <BsArrowUpRight />
                </div>
              </a>
            </GsapMagnetic>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
