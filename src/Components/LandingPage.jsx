import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.2" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="txtStruct mt-[9vw] px-12">
        {["We Create", "Eye-OPening", "Presentations"].map((item, index) => (
          <div className="maskes" key={index}>
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9.5vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1}}
                  className="w-[9.5vw] h-[6.2vw] relative object-cover object-center rounded-md mr-[1vw] bg-red-500"
                >
                  <img
                    src="./src/Images/land-img.jpg"
                    className="w-full h-full rounded-md"
                    alt=""
                  />
                </motion.div>
              )}
              <h1
                className="text-[9.3vw] flex items-center leading-[7.5vw] uppercase font-['fndrs']"
                key={index}
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-[#F1F1F1] mt-[7vw] flex items-center justify-between px-12 py-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} lassName="text-md font-['neue'] leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center justify-center gap-2">
          <div className="px-3 py-1 border-[1px] rounded-full text-[1vw] font-['neue'] border-[#F1F1F1]">
            START THE PROJECT
          </div>
          <div className="w-8 h-8 border-[1px] border-[#F1F1F1] rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
