import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

function FeaturedProjects() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0%" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  }

  return (
    <div className="w-full bg-zinc-900">
      <div className="pt-20 pb-10 px-12">
        <h1 className='font-["neue"] text-[3.8vw]'>Featured projects</h1>
      </div>
      <div className="w-full border-[1px] border-[#B2B2B2]"></div>

      <div className="w-full flex gap-5 px-12 py-20">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardContainer w-1/2 h-[80vh] relative"
        >
          <div className="flex items-center gap-2">
            <div className="w-[.7vw] h-[.7vw] bg-[#f1f1f1] rounded-full"></div>
            <h1 className="uppercase font-['neue'] text-sm">Fyde</h1>
          </div>

          <h1 className="overflow-hidden absolute z-[9] left-full flex -translate-x-1/2 top-1/2 text-[#CDEA68] -translate-y-1/2 text-[9vw] font-['fndrs'] leading-none tracking-tight">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                transition={{ delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                animate={cards[0]}
                className="inline-block font-['fndrs']"
              >
                {item}
              </motion.span>
            ))}
          </h1>

          <div className="w-full h-full pt-4">
            <img
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              className="object-cover object-center w-full h-full rounded-[.7vw]"
              alt=""
            />
          </div>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardContainer w-1/2 h-[80vh] relative"
        >
          <div className="flex items-center gap-2">
            <div className="w-[.7vw] h-[.7vw] bg-[#f1f1f1] rounded-full"></div>
            <h1 className="uppercase font-['neue'] text-sm">Vise</h1>
          </div>

          <h1 className="overflow-hidden absolute z-[9] flex right-full translate-x-1/2 top-1/2 text-[#CDEA68] -translate-y-1/2 text-[9vw] font-['fndrs'] leading-none tracking-tight">
            {"VISE".split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                transition={{ delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                animate={cards[1]}
                className="inline-block font-['fndrs']"
              >
                {item}
              </motion.span>
            ))}
          </h1>

          <div className="w-full h-full pt-4">
            <img
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              className="object-cover object-center w-full h-full rounded-[.7vw]"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
