"use client";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "@/components/TextAnimations/SlideUpWord";
import FadeTransition from "@/components/TextAnimations/textFade";
import { motion } from "framer-motion";
import { gridSlideUp, gridFadeIn } from "@/components/TextAnimations/animation";
import { useState, useEffect } from "react";

export default function GetToKnow() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const { ref: descriptionRef, inView: isInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: gridRef, inView: isGridInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const title = ["AI & Data Science", "Meets Creative Design"];
  const title2 = ["AI & Data Science Meets Creative Design"];
  const description =
    "I explore the intersection of artificial intelligence, data science, modern frontend development, and human-centered design. Transforming complex technological ideas into clear, engaging, and practical digital solutions.";

  return (
    <div ref={descriptionRef} className="w-full py-8 md:py-12 px-5 md:px-0">
      <div className="max-w-[1400px] mx-auto flex flex-col items-start gap-4 md:gap-6">
        <SlideUpWord
          title={isMobile ? title2 : title}
          isInView={isInView}
          className="text-[24px] md:text-3xl leading-tight text-neutral-900 dark:text-white"
        />
        <div className="text-lg md:text-2xl font-light text-neutral-600 dark:text-[#888888]">
          <FadeTransition description={description} isInView={isInView} />
        </div>

        {/* Grid Section */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12 w-full"
        >
          {[
            {
              number: "01",
              title: "UI/UX & Design",
              text: "From brand identities and social media campaigns to intuitive digital prototypes. I craft visual storytelling with Figma, Photoshop, Canva, and CorelDRAW to communicate concepts with clarity and impact.",
            },
            {
              number: "02",
              title: "Creative Development",
              text: "Engineering fast, modern web interfaces with React, Next.js, and Tailwind CSS. Bridging visual aesthetics with structured component logic and smooth micro-interactions.",
            },
            {
              number: "03",
              title: "AI & Data Science",
              text: "Developing machine learning concepts, NLP text classification pipelines, and data processing workflows using Python. Grounding modern technology in structured analytical problem-solving.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative pt-8 md:pt-10"
              variants={gridSlideUp}
              initial="initial"
              animate={isGridInView ? "open" : "initial"}
            >
              {/* Numbering (01, 02, 03) */}
              <span className="absolute top-[-20px] left-0 text-base md:text-lg text-neutral-400 dark:text-gray-400 font-light">
                {item.number}
              </span>

              {/* Border Line */}
              <div className="border-t border-neutral-300 dark:border-gray-600"></div>

              {/* Title & Description */}
              <motion.h2
                className="text-2xl md:text-[30px] font-normal pt-6 md:pt-[33px] text-neutral-900 dark:text-white"
                variants={gridSlideUp}
                initial="initial"
                animate={isGridInView ? "open" : "initial"}
              >
                {item.title}
              </motion.h2>
              <motion.p
                className="text-base md:text-lg text-neutral-600 dark:text-[#888888] pt-3 md:pt-[15px] leading-relaxed"
                variants={gridFadeIn}
                initial="initial"
                animate={isGridInView ? "open" : "initial"}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
