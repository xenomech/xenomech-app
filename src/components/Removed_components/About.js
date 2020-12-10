import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../assets/hereyougo-removebg-preview.png";

import {
  SiFlutter,
  SiDart,
  SiPython,
  SiC,
  SiHtml5,
  SiCss3,
  SiReact,
} from "react-icons/si";
const pageanimvarients = {
  hidden: {
    x: 0,
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3 },
  },
  exit: {
    y: "100vh",
    transition: { ease: "easeInOut" },
  },
};

function About() {
  return (
    <motion.div
      variants={pageanimvarients}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex-col flex justify-between lg:justify-start md:mt-15 lg:mt-20 text-3xl sm:items-center xl:flex-row ">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="md:ml-10  xl:flex md:mt-20 md:w-10/12 justify-center items-center xl:pb-10 lg:m-auto"
        >
          <img src={image} alt="hereyougo" />
          <div className="md:rounded-3xl md:shadow-2xl pl-3 md:p-5">
            <h1 className="text-5xl">overview</h1>
            <p className="text-xl md:text-2xl p-3">
              I am a 4th-year Computer Science student who is specializing in
              building and sometimes designing mobile and web apps. As a part of
              my exploring journey in development, I have worked on various
              freelance projects.
            </p>
            <p className="text-2xl">The languages I use are :</p>

            <ul className="grid grid-cols-3 gap-5 md:flex md:justify-items-center p-5 text-3xl">
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
            </ul>
            <p className="text-2xl">The frameworks I use are:</p>
            <ul className="flex justify-items-center p-5 text-3xl">
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
            <div className="py-10 md:py-0 text-2xl">
              <p>
                Want to know how this website was developed?{" "}
                <Link
                  className="text-green-600 hover:text-green-900"
                  to="/blog"
                >
                  click here
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.5 }}
          className="md:mr-5  mt-10 mb-10 text-5xl"
        >
          <Link
            className="m-auto md:m-0 flex justify-end items-center text-5xl"
            to="/works"
          >
            <p className="md:hidden text-2xl">Next Page</p>
            <MdKeyboardArrowRight color="black" />
          </Link>
        </motion.div> */}
      </div>
      {/* <footer className="lg:fixed md:bottom-0 flex w-full justify-center items-center text-gray-700">
        <FaCopyright className="mb-3" />
        <p>2020 Gokul Suresh</p>
        <FaGithub className="mb-3" />
      </footer> */}
    </motion.div>
  );
}

export default About;
