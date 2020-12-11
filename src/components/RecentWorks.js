import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

import {
  SiFlutter,
  SiDart,
  SiPython,
  SiC,
  SiHtml5,
  SiCss3,
  SiReact,
} from "react-icons/si";

const Projects = [
  {
    name: "Face Detection using OpenCV",
    disc: "A program to detect face of a person from a live vedio feed.",
    link: "https://github.com/xenomech/Face-recognition-Using-OpenCV",
  },

  {
    name: "Portfolio",
    disc: "The source code for this webapp",
    link: "https://github.com/xenomech/xenomech-web",
  },
];
const pageanimvarients = {
  hidden: {
    x: 0,
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
  exit: {
    y: "100vh",
    transition: { ease: "easeInOut" },
  },
};

function RecentWorks() {
  return (
    <>
      <motion.div
        variants={pageanimvarients}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full overflow-hidden"
      >
        <div className="flex-col flex overflow-auto justify-between px-5 text-3xl sm:py-24  sm:items-center lg:flex-row ">
          <div>
            <h2 className=" md:pb-12 md:px-12 m-3  pt-5 items-center justify-start flex text-4xl md:text-5xl">
              My Works
            </h2>
            <div className="md:grid md:grid-cols-2 h-3/6 py-10 md:gap-x-2  flex flex-col  md:pb-12 justify-items-center items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-full lg:w-8/12 p-3 my-5 rounded-2xl shadow-2xl lg:p-10"
              >
                <img
                  className="h-12 md:h-auto"
                  src="https://www.sreevaidyanatham.in/wp-content/uploads/2020/03/logo.png"
                  alt=""
                />
                <h1 className="text-3xl py-3">
                  Sreevaidyanatham Ayurvedic Hospital
                </h1>
                <p className="text-2xl text-gray-700 py-3">
                  sreevaidyanatham.in was a website made for an ayurvedic
                  hospital established in kochi
                </p>
                <button className="bg-green-600 hover:scale-110 hover:bg-green-800 rounded-xl p-2 text-lg shadow-xl text-white">
                  <a className="p-2" href="https://www.sreevaidyanatham.in">
                    Know More
                  </a>
                </button>
              </motion.div>
            </div>
            <h2 className=" md:pb-12 md:px-12 m-3  pt-5 items-center justify-start flex text-4xl md:text-5xl">
              Mini Projects
            </h2>

            {/* maped fns */}

            <div className="md:grid md:grid-cols-2 py-10 md:gap-x-2 md:gap-y-10  flex flex-col justify-items-center items-center">
              {Projects.map((a, index) => {
                // return <h1 key={index}>{a.name}</h1>;
                return (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    key={index}
                    className="h-full lg:w-8/12 p-3 my-5 rounded-2xl shadow-2xl lg:p-10"
                  >
                    <h2 className="md:h-auto py-2 text-green-700">{a.name}</h2>
                    <p className="text-2xl py-5 ">
                      {a.disc}
                      <br />
                    </p>
                    <button className="bg-green-600 hover:scale-110 hover:bg-green-800 rounded-xl p-2 text-lg shadow-xl text-white">
                      <a className="p-2" href={a.link}>
                        Know More
                      </a>
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* end maped fns */}
          </div>
        </div>
        <div className="justify-center flex py-5">
          <ul className="grid grid-cols-3 gap-5 md:flex md:justify-items-center p-5 text-4xl">
            <li className="px-5">
              <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                <SiC color="#283593" />
              </a>
            </li>
            <li className="px-5">
              <a href="https://en.wikipedia.org/wiki/Python_(programming_language)">
                <SiPython color="#FFC107" />
              </a>
            </li>

            <li className="px-5">
              <a href="https://en.wikipedia.org/wiki/Dart_(programming_language)">
                <SiDart color="#18acb6" />
              </a>
            </li>
            <li className="px-5">
              <a href="https://en.wikipedia.org/wiki/HTML5">
                <SiHtml5 color="#f47d2e" />
              </a>
            </li>
            <li className="px-5">
              <a href="https://en.wikipedia.org/wiki/CSS">
                <SiCss3 color="#2da2e1" />
              </a>
            </li>
            <li className="px-5">
              <a href="https://en.wikipedia.org/wiki/React_(web_framework)">
                <SiReact />
              </a>
            </li>
            <li className="px-5">
              <a href="https://en.wikipedia.org/wiki/Flutter_(software)">
                <SiFlutter color="#24b9f0" />
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}

export default RecentWorks;
