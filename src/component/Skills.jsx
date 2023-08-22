import Aos from "aos";
import "aos/dist/aos.css";

import { memo } from "react";
import { skillData } from "./SkillData";
function Skills() {
  Aos.init({
    duration: 1000,
  });

  return (
    <div id="skillsSection">
      <div className="h-screen bg-white">
        <div className="mt-8 px-7">
          <button className="py-2 w-20 bg-black text-white rounded-sm">
            Skills
          </button>
        </div>

        <div className=" flex justify-center h-screen items-center">
          <div
            data-aos="zoom-in"
            className="flex justify-center flex-wrap gap-3 "
          >
            {skillData.map((p) => {
              return (
                <div className="">
                  <div className=" shadow-xl ring-1  ring-gray-400 max-w-xl ">
                    <div className=" flex items-center justify-center py-2">
                      <p.Icon1 className="text-4xl text-gray-800" />
                      <p.Icon2 className="text-4xl text-gray-800" />
                    </div>
                    <div className="py-4 px-5 flex justify-center items-center flex-col flex-wrap">
                      <h1 className="font-mono text-black text-xl pb-5">
                        {p.title}
                      </h1>
                      <p className="text-sm font-mono md:block hidden">
                        {p.description}
                      </p>
                    </div>
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
