import Headbar from "./components/Headbar";
import Home from "./components/Home";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


// import RecentWorks from "./components/RecentWorks";
// import svg from "./assets/Rectangle.svg";
// import Sidenav from "./components/Sidenav";

function App() {
  const currentlocation = useLocation();
  return (
    <div className="App">
      <Headbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={currentlocation} key={currentlocation.pathname}>
          <Route path="/" exact component={Home} />
          {/* <Route path="/works" exact component={RecentWorks} /> */}
        </Switch>
      </AnimatePresence>





      {/* <div>
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
      </div> */}
    </div>
  );
}

export default App;
