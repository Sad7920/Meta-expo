'use client';

import { motion } from "framer-motion";

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-1000 ease-out-flex cursor-pointer ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'}`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute object-cover w-full h-full rounded-3xl"
    />
    {active == id ? (
      <div className="absolute bottom-0 flex-col justify-start w-full p-8 bg-[rgba(0,0,0,0.5)] rounded-b-3xl">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-3xl glassmorphism mb-[16px]`}>
          <img src="/headset.svg" alt="headset" className="object-contain w-1/2 h-1/2" />
        </div>
        <p className="font-normal text-[16px] text-white uppercase leading-[20px]">Enter the Metaverse</p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">{title}</h2>
      </div>
    )
      : (
        <h3 className="font-semibold sm:text-[20px] md:text-[30px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      )}
  </motion.div>
);

export default ExploreCard;
