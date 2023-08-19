import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

import { AiFillLinkedin } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";

import "aos/dist/aos.css";
import { memo } from "react";
import Aos from "aos";
function Contact() {
  Aos.init({
    duration: 1000,
  });
  return (
    <div id="contactSection">
      <div className="h-screen bg-white">
        <div className="flex justify-center py-5">
          <h1 className="font-mono font-medium text-2xl">CONTACT</h1>
        </div>
        <div
          data-aos="fade-in"
          className="flex items-center justify-center space-x-32 py-20 "
        >
          <div className="flex justify-center items-center gap-5">
            <IoCallSharp className="text-3xl p-2 bg-black text-white" />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-lg font-mono">Call us</span>
              <span>+91-9172640678</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <FaLocationDot className="text-3xl p-2 bg-black text-white" />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-lg font-mono">ADDRESS</span>
              <span>Malegaon bk. Pune</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <MdEmail className="text-3xl p-2 bg-black text-white" />
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-lg font-mono">EMAIL</span>
              <span>chavansumit121@gmail.com</span>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="flex justify-center py-36">
          <div className="py-2 w-2/4 bg-black flex justify-center rounded-sm space-x-40">
            <a href="https://github.com/iamsumitchavan" target="_blank">
              <BsGithub className="text-2xl text-white" />
            </a>
            <a href="https://www.linkedin.com/in/chavansumit7/" target="_blank">
              <AiFillLinkedin className="text-2xl text-white" />
            </a>
            <a>
              <GrTwitter className="text-2xl text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Contact);
