import { motion } from "framer-motion";

function Blog() {
  return (
    <>
      <div className="p-10 sm:mx-10 sm:my-24 mx-5 text-2xl">
        <motion.p
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, ease: "easeInOut" }}
        >
          <motion.div whileHover={{ x: 15 }}>
            <a href="http://xenomech.netlify.app">My blog 👉</a>
          </motion.div>
        </motion.p>
      </div>
    </>
  );
}

export default Blog;
