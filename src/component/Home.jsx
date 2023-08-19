import portfolio from "../images/portfolio.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="" id="homeSection">
      <div className="h-screen w-screen bg-hero  flex justify-center items-center bg-cover bg-center bg-transparent bg-fixed -z-30 ">
        <div
          data-aos="fade-up"
          data-aos-anchor=".other-element"
          className="px-10 py-5 w-3/5 bg-gradient-to-t from-black z-30"
        >
          <h1 className="text-2xl font-bold text-white">
            <span className="text-yellow-300">Hello,</span> Iam
          </h1>
          <h1 className="text-6xl font-bold font-mono text-white">
            <Typewriter
              options={{
                strings: ["Sumit Chavan", "I code cool websites"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <motion.h1
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              type: "tween",
              duration: "2",
              delay: "1",
            }}
            exit={{ x: -1000 }}
            className="text-xl font-bold font-mono text-yellow-300"
          >
            FrontEnd Developer
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
export default Home;
