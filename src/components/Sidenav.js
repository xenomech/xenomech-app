import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Sidenav() {
  return (
    <>
      <div className="bottom-0 fixed w-full  text-2xl md:text-3xl">
        <div className="flex py-2 py-5 md:pb-10 md:px-20 justify-evenly lg:justify-end items-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            className="md:px-10  text-gray-800"
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <NavLink activeClassName="text-blue-400" exact to="/">
                Home
              </NavLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2 }}
            whileHover={{ scale: 1.3 }}
            className="md:px-10 text-gray-800"
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <NavLink activeClassName="text-blue-400" exact to="/works">
                Works
              </NavLink>
            </motion.div>
          </motion.div>
          {/* <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.4 }}
            whileHover={{ scale: 1.3 }}
            className="md:px-10 text-gray-600"
          >
            <motion.div whileHover={{ scale: 1.3 }}>
              <NavLink activeClassName="text-blue-500" exact to="/contact">
                Contact
              </NavLink>
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </>
  );
}
export default Sidenav;
