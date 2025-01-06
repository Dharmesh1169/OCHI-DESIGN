import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      const offsetX = (mouseX - window.innerWidth / 2) / 35;
      const offsetY = (mouseY - window.innerHeight / 2) / 35;
      setOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="w-full h-full bg-[url('./src/Images/eye-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-10">
          <div className="back relative w-[15vw] flex items-center justify-center h-[15vw] bg-[#F4F4F4] rounded-full">
            <div
              className="black w-[8.5vw] h-[8.5vw] bg-[#212121] relative rounded-full flex items-center justify-center"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10 rotate-45 px-1"
              >
                <div className="w-[1.2vw] h-[1.2vw] bg-white rounded-full"></div>
              </div>
              <h1>PLAY</h1>
            </div>
          </div>

          <div className="back relative w-[15vw] flex items-center justify-center h-[15vw] bg-[#F4F4F4] rounded-full">
            <div
              className="black w-[8.5vw] h-[8.5vw] bg-[#212121] relative rounded-full flex items-center justify-center"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10 rotate-45 px-1"
              >
                <div className="w-[1.2vw] h-[1.2vw] bg-white rounded-full"></div>
              </div>
              <h1>PLAY</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
