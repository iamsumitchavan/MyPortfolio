import { Button } from "react-scroll";
import { motion } from "framer-motion";
import developer from "../images/developer.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { memo } from "react";

const url_name = "http://127.0.0.1:5173/images/sumitres.pdf";
function About() {
  Aos.init({});
  return (
    <div id="aboutSection" className="h-screen">
      <div className="w-full h-screen  ">
        <div className="py-10 px-10">
          <button className="py-2 w-20 bg-black text-white rounded-sm">
            About
          </button>

          <div className="flex justify-center items-center h-screen space-x-16">
            <div data-aos="fade-up">
              <img
                className="lg:h-80 lg:w-96 hidden lg:block shadow-xl rounded-sm"
                src={developer}
                alt=""
              />
            </div>
            <div
              data-aos="fade-down"
              className="lg:w-3/5  flex flex-col flex-wrap"
            >
              <h1 className="font-mono text-3xl font-bold">Iam Sumit Chavan</h1>
              <h3 className="py-2  text-xl font-mono">
                Creative Independent Web Developer
              </h3>
              <p
                className="font-mono text-sm
              "
              >
                My name is SUMIT CHAVAN and I am currently done Training as
                Software Developer at Qspider. I completed my degree in Bachelor
                of Technology in Electronics and Telecommunication in SVPM
                college of Engineering Malegaon bk. I am much interested in
                developing new things which excite me a lot. :) I love exploring
                new technologies and being a practitioner, I like to stay on top
                of latest trends. I try to leave every line of code I write more
                readable, accessible, and modular.
              </p>
              <div className="py-10">
                <button className="bg-black text-whte rounded-sm py-1  w-40 text-white">
                  <a href="sumitres.pdf" download="resume.pdf">
                    Download cv
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(About);
