import { useRef } from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function ShowVideos({ setClick, title }) {
  const videoref = useRef();
  AOS.init();

  const handlePause = () => {
    videoref.current.pause();
  };

  const handlePlay = () => {
    videoref.current.play();
  };

  let vd;
  if (title == "Ecommerce app") {
    vd = "/ecommerce.mp4";
  } else if (title == "Showsearch app") {
    vd = "/searchshow.mp4";
  } else if (title == "Password generator") {
    vd = "/passwordGenerator.mp4";
  }

  return (
    <div className="fixed right-0 left-0 bottom-0 top-0 flex justify-center items-center ">
      <div data-aos="fade-up" className="h-4/5 w- w-4/5 bg-black rounded-sm  ">
        <button onClick={() => setClick(false)} className="py-5 px-10">
          <AiFillCloseCircle className=" text-4xl text-white" />
        </button>

        <div className="flex  items-center h-full flex-col">
          <video width="600" height="240" ref={videoref}>
            <source src={vd} />
          </video>
          <div className="flex  w-full justify-center">
            <button className=" p-3" onClick={handlePause}>
              <FaPause className="text-white text-2xl active:text-green-500" />
            </button>
            <button className="text-white p-3" onClick={handlePlay}>
              <FaPlay className="text-white text-2xl active:text-green-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowVideos;
