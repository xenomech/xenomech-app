// import image from "../assets/home-bg-fr-white.png";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaGitlab,
  FaEnvelope,
  // FaPhoneAlt,
  // FaSnapchat,
  FaInstagram,
  // FaDiscord,
  FaTwitter,
} from "react-icons/fa";

const iconanimvarients = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  whilehvrgithub: { scale: 1.5, color: "#333333" },
  whilehvrgitlab: { scale: 1.5, color: "orange" },
  whilehvrmail: { scale: 1.5, color: "#00C6FF" },
  whilehvrlinkedin: { scale: 1.5, color: "#0072b1" },
  whilehvrphone: { scale: 1.5, color: "red" },
  whilehvrsnapchat: { scale: 1.5, color: "#fffc00" },
  whilehvrinstagram: { scale: 1.5, color: "violet" },
  whilehvrtwitter: { scale: 1.5, color: "#1DA1F2" },
  whilehvrdiscord: { scale: 1.5, color: "#7289d9" },
};
const pageanimvarients = {
  hidden: {
    x: 0,
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, duration: 0.3 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageanimvarients}
      exit="exit"
    >
      <div className=" flex-col flex justify-between px-10 sm:mx-10  sm:my-24 sm:items-center xl:flex-row ">
        <article className="text-xl md:text-3xl sm:mt-5 sm:mb-20">
          <p className="my-5 lg:mt-20">
            Hi 👋 , My name is Gokul Suresh
            <br />I am a Computer Science student at
            <a className="hover:text-blue-600" href="http://www.fisat.ac.in/">
              {" "}
              Federal Institute of Science And Technology (FISAT)® <br />
            </a>
            who like to build things! 🚀
            <br />
            Stay connected 👇
          </p>
          <div
            id="icons"
            className="grid grid-cols-3 gap-5 py-5 lg:flex lg:justify-start lg:items-center"
          >
            <motion.a
              variants={iconanimvarients}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.1 }}
              href="https://github.com/xenomech"
              className="px-4"
            >
              <motion.div
                variants={iconanimvarients}
                whileHover="whilehvrgithub"
              >
                <FaGithub size="30px" />
              </motion.div>
            </motion.a>
            <motion.a
              variants={iconanimvarients}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.2 }}
              href="https://gitlab.com/xenomech"
              className="px-4"
            >
              <motion.div
                variants={iconanimvarients}
                whileHover="whilehvrgitlab"
              >
                <FaGitlab size="30px" />
              </motion.div>
            </motion.a>
            <motion.a
              variants={iconanimvarients}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.3 }}
              href="mailto:gokulsmenon227@gmail.com"
              className="px-4"
            >
              <motion.div variants={iconanimvarients} whileHover="whilehvrmail">
                <FaEnvelope size="30px" />
              </motion.div>
            </motion.a>
            <motion.a
              variants={iconanimvarients}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.4 }}
              className="px-4"
              href="https://www.linkedin.com/in/gokulsmenon227"
            >
              <motion.div
                variants={iconanimvarients}
                whileHover="whilehvrlinkedin"
              >
                <FaLinkedin size="30px" />
              </motion.div>
            </motion.a>
            {/* <motion.a
              variants={iconanimvarients}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.5 }}
              className="px-4"
              href="tel:9645418886"
            >
              <motion.div
                variants={iconanimvarients}
                whileHover="whilehvrphone"
              >
                <FaPhoneAlt size="30px" />
              </motion.div>
            </motion.a> */}
            {/* <motion.a
              variants={iconanimvarients}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.6 }}
              href="https://www.snapchat.com/add/gox_07"
              className="px-4"
            >
              <motion.div
                variants={iconanimvarients}
                whileHover="whilehvrsnapchat"
              >
                <FaSnapchat size="30px" />
              </motion.div>
            </motion.a> */}
            <motion.a
              variants={iconanimvarients}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.7 }}
              className="px-4"
              href="https://www.instagram.com/_.gokul.suresh._/"
            >
              <motion.div
                variants={iconanimvarients}
                whileHover="whilehvrinstagram"
              >
                <FaInstagram size="30px" />
              </motion.div>
            </motion.a>
            <motion.a
              variants={iconanimvarients}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.8 }}
              className="px-4"
              href="https://twitter.com/xen40k"
            >
              <motion.div
                variants={iconanimvarients}
                whileHover="whilehvrtwitter"
              >
                <FaTwitter size="30px" />
              </motion.div>{" "}
            </motion.a>
            {/* <motion.a
              variants={iconanimvarients}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.9 }}
              className="px-4"
              href="#"
            >
              <motion.div
                variants={iconanimvarients}
                whileHover="whilehvrdiscord"
              >
                <FaDiscord size="30px" />
              </motion.div>
            </motion.a> */}
          </div>
        </article>
        
        {/* <motion.img
          className="-ml-2 md:m-2"
          src={image}
          alt="the-home-bitmoji-goes-here"
        /> */}
      </div>
    </motion.div>
  );
}

export default Home;
