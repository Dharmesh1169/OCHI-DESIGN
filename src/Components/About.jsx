import React from "react";

function About() {
  return (
    <div data-scroll data-scroll-speed="-.21" className="w-full bg-[#CDEA68] rounded-tl-[1.5vw] rounded-tr-[1.5vw]">
      <h1 className="font-['neue'] text-black text-[3.8vw] leading-none py-20 px-12">
        Ochi is a strategic partner for fast-grow­ing tech
        <br />
        businesses that need to{" "}
        <span className="border-b-[.25vw] border-black">raise funds</span>,{" "}
        <span className="border-b-[.25vw] border-black">sell prod­ucts</span>,
        <br />
        <span className="border-b-[.25vw] border-black">
          ex­plain com­plex ideas
        </span>
        , and{" "}
        <span className="border-b-[.25vw] border-black">
          hire great peo­ple
        </span>
        .
      </h1>

      <div className="w-full border-[1px] border-[#99AD53]"></div>

      <div className="w-full py-6 px-12 flex justify-center">
        <div className="left w-[50%]">
          <h1 className="font-['neue'] text-black">What you can expect:</h1>
        </div>

        <div className="right w-[50%] pb-16 flex justify-between relative">
          <div className="font-['neue'] text-black">
            <p>
              We create tailored presentations to help
              <br />
              you persuade your colleagues, clients, or
              <br />
              investors. Whether it’s live or digital,
              <br />
              delivered for one or a hundred people.
            </p>
            <br />
            <br />
            <p>
              We believe the mix of strategy and
              <br />
              design (with a bit of coffee) is what
              <br />
              makes your message clear, convincing,
              <br />
              and captivating.
            </p>
          </div>

          <div className="absolute right-[10vw] bottom-[5vw]">
            <h1 className="font-['neue'] text-black">S:</h1>
            <br />
            <h5 className="font-['neue'] text-black">
              <span className="border-b-[.1vw] border-black">Instagram</span>
            </h5>
            <h5 className="font-['neue'] text-black">
              <span className="border-b-[.1vw] border-black">Behance</span>
            </h5>
            <h5 className="font-['neue'] text-black">
              <span className="border-b-[.1vw] border-black">Facebook</span>
            </h5>
            <h5 className="font-['neue'] text-black">
              <span className="border-b-[.1vw] border-black">Linkedin</span>
            </h5>
          </div>
        </div>
      </div>

      <div className="w-full border-[1px] border-[#99AD53]"></div>

      <div className="w-full flex pb-5">
      <div className="w-1/2 px-12 py-4">
        <h1 className="font-['neue'] text-black text-[3.8vw]">Our approach:</h1>
        <button className="px-5 font-['neue'] py-4 mt-2 bg-[#212121] uppercase rounded-full flex items-center justify-center gap-8 text-[1vw]">Read More
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </button>
      </div>

      <div className="w-1/2 px-12 h-[70vh] rounded-3xl py-4">
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className="object-cover object-center rounded-xl overflow-hidden" alt="" />
      </div>
      </div>
    </div>
  );
}

export default About;
