"use client";
import { useRef } from "react";
import styles from "./style.module.scss";
import { useTheme } from "../theme/ThemeProvider";
import ThemeToggle from "../theme/ThemeToggle";

interface HeaderProps {
  textColor?: "white" | "black" | "auto";
}

const Index: React.FC<HeaderProps> = ({ textColor = "auto" }) => {
  const header = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme } = useTheme();

  const finalColor =
    textColor === "auto"
      ? resolvedTheme === "dark"
        ? "#ffffff"
        : "#0f172a"
      : textColor === "white"
      ? "#ffffff"
      : "#0f172a";

  return (
    <div
      ref={header}
      className={styles.header}
      style={{ color: finalColor }}
    >
      <div className={styles.logo}>
        <p className={styles.copyright}>©</p>
        <div className={styles.name}>
          <p className={styles.codeBy}>Portfolio by</p>
          <p className={styles.dennis}>Darani&nbsp;</p>
          <p className={styles.snellenberg}>&nbsp;Viswanathan</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className={styles.nav}>
          <p>
            AI &amp; Data Science Student × Creative Developer &amp; UI/UX Designer,
            turning ideas into clear, user-focused digital experiences
          </p>
        </div>
        <ThemeToggle className="z-10" />
      </div>
    </div>
  );
};

export default Index;
