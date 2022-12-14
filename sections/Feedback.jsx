'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth}  mx-auto flex lg:flex-row gap-6 flex-col`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-xs flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h1 className="font-bold sm:text-[36px] text-[26px] sm:leading-[40px] leading-[36px] text-white relative">Shashant</h1>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white relative">Founder | Metaexpo</p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white relative">“The "metaverse" is a hypothetical iteration of the Internet as a single, universal, and immersive virtual world that is facilitated by the use of virtual reality and augmented reality headsets.”</p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex items-center justify-center flex-1 "
      >
        <img src="/planet-09.png" alt="planet-09" className="w-full rounded-[40px] lg:h-[610px] h-auto object-cover min-h-[210px]" />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img src="/stamp.png" alt="stamp" className="w-[155px] h-[155px] object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
