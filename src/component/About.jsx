import { Button } from "react-scroll";
import { motion } from "framer-motion";
import developer from "../images/developer.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const url_name = "http://127.0.0.1:5173/images/chavanresume.pdf";
function About() {
  Aos.init({});
  return (
    <div id="aboutSection" className="h-screen">
      <div className="w-full h-screen  ">
        <div className="py-10 px-10">
          <button className="py-2 w-20 bg-black text-white rounded-sm">
            About
          </button>
          <h1 className="font-mono font-extrabold text-3xl py-3 text-white ">
            About me
          </h1>

          <div className="lg:flex lg:space-x-48  lg:py-8">
            <div data-aos="fade-up">
              <img
                className="lg:h-80 lg:w-96 hidden lg:block shadow-xl rounded-sm"
                src={developer}
                alt=""
              />
            </div>
            <div data-aos="fade-down-left" className="lg:w-3/5 flex flex-wrap">
              <h1 className="font-mono text-3xl font-bold">Iam Sumit Chavan</h1>
              <h3 className="py-2  text-xl font-mono">
                Creative Independent Web Developer based in USA
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
              <div className="lg:py-1 md:py-40">
                <button className="bg-black text-whte rounded-sm py-1  w-40 text-white">
                  <a href="chavanresume.pdf" download="resume.pdf">
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
export default About;
