import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ResumeItem } from "../types/ResumeItem";

export const TimelineItem = ({
    title,
    institution,
    company,
    date,
    description,
    isWork = false
  }: ResumeItem & { isWork?: boolean }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
    useEffect(() => {
      if (inView) controls.start("visible");
    }, [controls, inView]);
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute -left-8 top-18 w-4 h-4 bg-blue-500 rounded-full border-2 border-blue-500 shadow" />
        <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
          <h3 className="font-semibold text-lg">{title}</h3>
          <span className="text-sm text-gray-500 block mb-1">
            {isWork ? company : institution} — {date}
          </span>
          <p className="text-gray-700 text-sm md:text-base">{description}</p>
        </div>
      </motion.div>
    );
  };
  