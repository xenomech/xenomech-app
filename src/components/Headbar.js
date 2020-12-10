import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Headbar() {
  return (
    <nav className="px-10 py-10 bg-white text-gray-900 hover:text-blue-500 text-3xl md:text-4xl">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, ease: "easeInOut" }}
      >
        <Link to="/">xenomech</Link>
      </motion.h1>
    </nav>
  );
}
export default Headbar;
