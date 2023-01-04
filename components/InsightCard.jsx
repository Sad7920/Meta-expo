'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col gap-4 md:flex-row"
  >
    <img src={imgUrl} alt="planet-01" className="md:w-[270px] mr-6 w-full h-[250px] rounded-[32px] object-cover" />
    <div className="flex items-center justify-between w-full">
      <div className="flex-1 md:ml-[62] max-w-2xl">
        <h1 className="font-normal lg:text-[42px] text-[26px] text-white">{title}</h1>
        <p className="font-normal text-secondary-white mt-[16px] lg:text-[20px] text-[14px]">{subtitle}</p>
      </div>
      <div className="items-center justify-center hidden w-24 h-24 bg-transparent border border-white rounded-full cursor-pointer hover:border-gray-400 lg:flex ">
        <img src="arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
