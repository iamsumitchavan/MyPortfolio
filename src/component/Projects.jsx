import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Aos from "aos";

import { ProductData } from "./ProductData";
import { memo } from "react";
function Projects() {
  Aos.init();

  function handleGetClick(click) {
    setGetClick(click);
  }
  return (
    <div id="projectsSection">
      <div className="h-screen bg-slate-200">
        <div data-aos="fade-up" className="py-10 px-10">
          <button className="py-2 w-20 bg-black text-white rounded-sm">
            Projects
          </button>

          <div className="flex justify-center py-24 ">
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-10"
            >
              {ProductData.map((p) => (
                <ProjectCard
                  key={p.title}
                  handleGetClick={handleGetClick}
                  {...p}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Projects);
