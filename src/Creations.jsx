import Earth from "/images/mobile/image-deep-earth.jpg";
import nightArc from "/images/mobile/image-night-arcade.jpg";
import soccer from "/images/mobile/image-soccer-team.jpg";
import theGrid from "/images/mobile/image-grid.jpg";
import upAbove from "/images/mobile/image-from-above.jpg";
import pocket from "/images/mobile/image-pocket-borealis.jpg";
import curiosity from "/images/mobile/image-curiosity.jpg";
import fishEye from "/images/mobile/image-fisheye.jpg";

import EarthLg from "/images/desktop/image-deep-earth.jpg";
import nightArcLg from "/images/desktop/image-night-arcade.jpg";
import soccerLg from "/images/desktop/image-soccer-team.jpg";
import theGridLg from "/images/desktop/image-grid.jpg";
import upAboveLg from "/images/desktop/image-from-above.jpg";
import pocketLg from "/images/desktop/image-pocket-borealis.jpg";
import curiosityLg from "/images/desktop/image-curiosity.jpg";
import fishEyeLg from "/images/desktop/image-fisheye.jpg";

import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Creations = () => {
  return (
    <section className="flex items-center font-Joe lg:mt-[10rem] justify-center flex-col mt-[5rem] mx-[1.7rem]">
      <div className="lg:flex items-start justify-between lg:w-[75vw]">
        <h2
          className="text-[2rem] mb-[2rem] text-start lg:text-[3rem]"
        >
          OUR CREATIONS
        </h2>

        <div className="font-Joe border-2 border-Dark-Gray py-[0.4rem] px-[1.7rem] hidden lg:flex items-center justify-center hover:text-White hover:bg-Black duration-300 lg:py-[0.5rem] lg:px-[2rem]">
          <button className="my-auto tracking-widest">
            <NavLink to="/more">SEE ALL</NavLink>
          </button>
        </div>
      </div>

      <AnimatePresence>
        <div className="grid grid-cols-1 grid-row-8 gap-[1.5rem] lg:grid-cols-4 lg:grid-rows-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, stagger: 0.2 }}
            className="relative"
          >
            <img className="lg:hidden" src={Earth} />
            <img className="lg:block hidden w-full h-full" src={EarthLg} />
            <div className="absolute top-0 left-0 bg-gradient-to-r lg:bg-gradient-to-t from-Black opacity-55 h-full w-full"></div>
            <span className="absolute text-White bottom-0 pl-[1.5rem] pb-[0.5rem] text-[1.3rem] w-[3rem] lg:text-[2rem] lg:leading-none lg:p-[2.5rem]">
              DEEP EARTH
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, stagger: 0.3 }}
            className="relative"
          >
            <div className="absolute top-0 left-0 bg-gradient-to-r lg:bg-gradient-to-t from-Black opacity-55 h-full w-full"></div>
            <img className="lg:hidden" src={nightArc} />
            <img className="lg:block hidden w-full h-full" src={nightArcLg} />
            <span className="absolute text-White bottom-0 pl-[1.5rem] pb-[0.5rem] text-[1.3rem] w-[3rem] lg:text-[2rem] lg:leading-none lg:p-[2.5rem]">
              NIGTH ARCADE
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, stagger: 0.4 }}
            className="relative"
          >
            <img className="lg:hidden" src={soccer} />
            <img className="lg:block hidden w-full h-full" src={soccerLg} />
            <div className="absolute top-0 left-0 bg-gradient-to-r lg:bg-gradient-to-t from-Black opacity-55 h-full w-full"></div>
            <span className="absolute text-White bottom-0 pl-[1.5rem] pb-[0.5rem] text-[1.3rem] w-[7.5rem] lg:text-[2rem] lg:leading-none lg:p-[2.5rem] lg:w-[15rem]">
              SOCCER TEAM VR
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, stagger: 0.5 }}
            className="relative"
          >
            <img className="lg:hidden" src={theGrid} />
            <img className="lg:block hidden w-full h-full" src={theGridLg} />
            <div className="absolute top-0 left-0 bg-gradient-to-r lg:bg-gradient-to-t from-Black opacity-55 h-full w-full"></div>
            <span className="absolute text-White bottom-0 pl-[1.5rem] pb-[0.5rem] text-[1.3rem] w-[3rem] lg:text-[2rem] lg:leading-none lg:p-[2.5rem]">
              GRID
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, stagger: 0.6 }}
            className="relative"
          >
            <img className="lg:hidden" src={upAbove} />
            <img className="lg:block hidden w-full h-full" src={upAboveLg} />
            <div className="absolute top-0 left-0 bg-gradient-to-r lg:bg-gradient-to-t from-Black opacity-55 h-full w-full"></div>
            <span className="absolute text-White bottom-0 pl-[1.5rem] pb-[0.5rem] text-[1.3rem] w-[9rem] lg:w-[17rem] lg:text-[2rem] lg:leading-none lg:p-[2.5rem]">
              FROM UP ABOVE VR
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, stagger: 0.6 }}
            className="relative"
          >
            <img className="lg:hidden" src={pocket} />
            <img className="lg:block hidden w-full h-full" src={pocketLg} />
            <div className="absolute top-0 left-0 bg-gradient-to-r lg:bg-gradient-to-t from-Black opacity-55 h-full w-full"></div>
            <span className="absolute text-White bottom-0 pl-[1.5rem] pb-[0.5rem] text-[1.3rem] w-[9rem] lg:w-[17rem] lg:text-[2rem] lg:leading-none lg:p-[2.5rem]">
                POCKET BOREALIS
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, stagger: 0.8 }}
            className="relative"
          >
            <img className="lg:hidden" src={curiosity} />
            <img className="lg:block hidden w-full h-full" src={curiosityLg} />
            <div className="absolute top-0 left-0 bg-gradient-to-r lg:bg-gradient-to-t   from-Black opacity-55 h-full w-full"></div>
            <span className="absolute text-White bottom-0 pl-[1.5rem] pb-[0.5rem] text-[1.3rem] w-[3rem] lg:text-[2rem] lg:leading-none lg:p-[2.5rem]">
              THE CURIOSITY
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, stagger: 0.9 }}
            className="relative"
          >
            <img className="lg:hidden" src={fishEye} />
            <img className="lg:block hidden w-full h-full" src={fishEyeLg} />
            <div className="absolute top-0 left-0 bg-gradient-to-r lg:bg-gradient-to-t from-Black opacity-55 h-full w-full"></div>
            <span className="absolute text-White bottom-0 pl-[1.5rem] pb-[0.5rem] text-[1.3rem] w-[9rem] lg:text-[2rem] lg:leading-none lg:p-[2.5rem] lg:w-[17rem]">
              MAKE IT FISHEYE
            </span>
          </motion.div>
        </div>
      </AnimatePresence>

      <div className="font-Joe my-[2rem] lg:hidden border-2 border-Dark-Gray py-[0.4rem] px-[1.7rem] flex items-center justify-center">
        <button className="my-auto tracking-widest">
          <NavLink to="/more">SEE ALL</NavLink>
        </button>
      </div>
    </section>
  );
};

export default Creations;
