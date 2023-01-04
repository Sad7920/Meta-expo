'use client';

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h1 className="font-bold md:text-[64px] text-[44px] text-white">Enter the Metaverse</h1>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] hover:bg-[#1d4c6e] rounded-full gap-[12px]">
          <img src="/headset.svg" alt="headset" className="w-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white uppercase">Enter Metaverse</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-20" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-extrabold text-[24px] text-white uppercase relative">Metaexpo</h1>
          <p className="font-normal text-[14px] text-white opacity-50">Copyright © 2021 - 2022 Metaexpo. All rights reserved.</p>
          <div className="flex gap-4">
            {socials.map(social => (
              <img src={social.url} key={social.name} alt={social.name} className="object-contain w-6 h-6 cursor-pointer hover:opacity-80" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
