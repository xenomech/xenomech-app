import { motion } from "framer-motion";
import image from "../assets/wtthecat.png";

const pageanimvarients = {
  hidden: {
    x: 0,
    y: 100,
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
  whilehvr: {
    scale: 0.8,
  },
};

function Blog() {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageanimvarients}
        exit="exit"
        whileHover="whilehvr"
        className="flex-col flex justify-between lg:justify-start md:mt-15  lg:mt-20 text-3xl sm:items-center  "
      >
        <h2> Blog will be up soon ....</h2>
        <img src={image} alt="" />
      </motion.div>
    </>
  );
}

export default Blog;
