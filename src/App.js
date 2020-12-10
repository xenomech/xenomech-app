import Headbar from "./components/Headbar";
import Home from "./components/Home";
import RecentWorks from "./components/RecentWorks";
import { FaGithub, FaCopyright } from "react-icons/fa";

// import About from "./components/About";
// import Blog from "./components/Blog";

// import { Switch, Route, useLocation } from "react-router-dom";

// import { AnimatePresence } from "framer-motion";
// import "./styles/styles.css";
// import Bottombar from "./components/Bottombar";

// const pageVariants = {
//   initial: {
//     opacity: 0,
//   },
//   in: {
//     opacity: 1,
//   },
//   out: {
//     opacity: 0,
//   },
// };

function App() {
  // const currentlocation = useLocation();
  // console.log(currentlocation);
  return (
    <div className="App">
      <Headbar />
      <Home />
      {/* <div className="flex justify-between"> */}
      {/* <AnimatePresence exitBeforeEnter>
        <Switch location={currentlocation} key={currentlocation.pathname}>
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/works" exact component={RecentWorks} />
          <Route path="/blog" exact component={Blog} />
        </Switch>
      </AnimatePresence> */}
      <RecentWorks />
      {/* <Bottombar /> */}
      {/* </div> */}
      <div>
        <div className="w-full flex p-5 justify-center items-center text-xl">
          <p>
            This Website was created using{" "}
            <a className="text-blue-500" href="https://reactjs.org/">
              React
            </a>
            .
          </p>
        </div>
        <footer className="w-full flex justify-center items-center text-gray-900">
          <FaCopyright className="m-3" />
          <p>2020 Gokul Suresh</p>
          <FaGithub className="m-3" />
        </footer>
      </div>
    </div>
  );
}

export default App;
