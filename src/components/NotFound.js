import { motion } from "framer-motion";

const pageanimvar = {
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
export default function NotFound() {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageanimvar}
        exit="exit"
      >
        <div className=" flex-col flex justify-center px-10 sm:mx-10  sm:my-24 sm:items-center xl:flex-row ">
          <article className="text-xl md:text-3xl sm:mt-5 sm:mb-20">
            <p className="my-5 lg:mt-20">
              oops! This page is under development
            </p>
          </article>
        </div>
      </motion.div>
    </>
  );
}
