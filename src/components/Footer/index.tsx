"use client";
import styles from "./style.module.scss";
import { useRef } from "react";
import { useScroll, motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Index: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [-500, 0]
  );

  return (
    <motion.div ref={container} style={{ y }} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.header}>
          <div className="text-[20px] sm:text-[32px] md:text-[50px] lg:text-[60px] ml-2 md:ml-5 font-light tracking-tight">
            AI &amp; Data Science × Design
          </div>
          <div className={styles.arrow}>
            <Image
              src="/icons/arrow-curve.svg"
              alt="Arrow"
              width={45}
              height={45}
              className="w-6 h-6 md:w-[45px] md:h-[45px]"
            />
          </div>
        </div>
        
        <div className={styles.name}>
          <h2>Darani Viswanathan</h2>
        </div>

        {/* Minimal Editorial Footer Links */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between border-t border-neutral-300 dark:border-white/10 pt-8 mt-12 text-sm text-neutral-600 dark:text-gray-400">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link href="/" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-neutral-950 dark:hover:text-white transition-colors">About</Link>
            <Link href="/projects" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Projects</Link>
            <Link href="/skills" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Skills</Link>
            <Link href="/experience" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Experience</Link>
            <Link href="/resume" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Resume</Link>
            <Link href="/contact" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/darani-s-v-79659b28b/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/darani-sv" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.instagram.com/dextro_kiddo/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
              Instagram
            </a>
            <a href="mailto:help.artdesigns@gmail.com" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>

        <div className="w-full text-left text-xs text-neutral-500 dark:text-gray-600 mt-6 font-mono">
          © {new Date().getFullYear()} Darani Viswanathan (தரணி ச.வி). All rights reserved.
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
