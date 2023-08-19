import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import ShowVideos from "./ShowVideos";
import { memo } from "react";

function ProjectCard({ src, para, handleGetClick, title, url }) {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
    handleGetClick(click);
  }

  return (
    <div>
      <div>
        {click && <ShowVideos title={title} setClick={setClick} />}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className=" lg:bg-white lg:h-80 lg:w-52 shadow-2xl border border-gray-200 flex flex-col"
        >
          <img className=" h-2/5 w-full" src={src} alt="" />
          <div className="flex flex-col items-center justify-between">
            <h1 className="font-normal py-4 font-mono text-xl">{title}</h1>
            <p className="p-2">{para}</p>
            <div className="flex">
              <span className="font-mono font-normal text-indigo-400 hover:cursor-pointer">
                <a href={url} target="_blank">
                  {" "}
                  Live demo
                </a>
              </span>
              <button onClick={handleClick}>
                <span className="px-5 text-indigo-400">video</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default memo(ProjectCard);
