import { motion } from "framer-motion";
// import { useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

// const pages = [
//   {
//     path: "/about",
//     name: "overview",
//   },
//   {
//     path: "/",
//     name: "home",
//   },
//   {
//     path: "/works",
//     name: "works",
//   },
// ];

// function pagehandler(pathname, setpathstate) {
//   if (pathname === "home") {
//     return true;
//   } else if (pathname === "/about") {
//     // setpathstate((pathname = "/"));
//     return "/";
//   }
// }
function Bottombar() {
  return (
    <>
      <div className="bg-white sm:bottom-0 sm:fixed sm:w-full text-2xl md:text-3xl">
        <div
          // initial={{ y: -50, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // transition={{ delay: 2 }}
          className="flex py-2 py-5 md:pb-10 md:px-20 justify-evenly lg:justify-end items-center"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            className="md:px-10  text-gray-600"
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <NavLink activeClassName="text-green-600" to="/about">
                About
              </NavLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2 }}
            whileHover={{ scale: 1.3 }}
            className="md:px-10 text-gray-600"
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <NavLink activeClassName="text-green-600" to="/" exact>
                Home
              </NavLink>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.4 }}
            whileHover={{ scale: 1.3 }}
            className="md:px-10 text-gray-600"
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <NavLink activeClassName="text-green-600" to="/works">
                Works
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
export default Bottombar;
