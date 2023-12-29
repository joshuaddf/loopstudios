import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <section className="relative h-[90vh] lg:h-[75vh] w-screen">
      {/* Background Image */}
      <div
        className="bg-cover bg-center bg-no-repeat absolute top-[-8rem] h-full w-full bg-[url('/images/mobile/image-hero.jpg')] lg:bg-[url('/images/desktop/image-hero.jpg')]"
        style={{ filter: "brightness(70%)" }}
      ></div>

      {/* Overlay */}
      <div className="absolute top-0 h-full w-full bg-black opacity-70"></div>

      {/* Text Container */}
      <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center translate-y-[50%] font-Joe font-[300] text-[2.7rem] border-2 text-white mx-[1.4rem] relative text-White lg:w-[40rem] lg:text-[4rem] lg:ml-[10rem] lg:translate-y-[20%] "
          >
            <h1 className="z-[5] py-[1.5rem] lg:py-[2rem] px-[3rem] leading-[1]">
              IMMERSIVE EXPERIENCES THAT DELIVER
            </h1>
          </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;
