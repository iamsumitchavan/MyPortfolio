import Aos from "aos";
import "aos/dist/aos.css";

import { memo } from "react";
import { skillData } from "./SkillData";
function Skills() {
  Aos.init();

  return (
    <div id="skillsSection">
      <div className="h-screen bg-white">
        <div className="flex justify-center">
          {" "}
          <h1 className="text-xl font-mono">WHAT MY SILLS</h1>
        </div>
        <div className="">
          <div
            data-aos="fade-left"
            className=" flex flex-col md:flex md:flex-row md:justify-center md:flex-wrap md:py-10 gap-2 md:gap-10 items-center"
          >
            {skillData.map((p) => {
              return (
                <div className=" shadow-2xl border border-gray-200 w-full  md:w-2/5">
                  <div className=" flex items-center justify-center py-2">
                    <p.Icon1 className="text-4xl text-gray-800" />
                    <p.Icon2 className="text-4xl text-gray-800" />
                  </div>
                  <div className="py-4 px-5 flex justify-center items-center flex-col flex-wrap">
                    <h1 className="font-mono text-black text-xl pb-5">
                      {p.title}
                    </h1>
                    <p className="text-sm font-mono">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Skills);
