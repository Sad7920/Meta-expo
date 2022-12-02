'use client';

import { motion } from "framer-motion";

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute inset-0 z-0 w-1/2 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8 z-50`}>
      <img src="/search.svg" alt="search" className="object-contain w-6 h-6 cursor-pointer" />
      <h1 className="text-2xl font-extrabold leading-8 text-white uppercase">Metaexpo</h1>
      <img src="/menu.svg" alt="menu" className="object-contain w-6 h-6 cursor-pointer" />
    </div>
  </motion.nav>
);

export default Navbar;
