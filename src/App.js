import Headbar from "./components/Headbar";
import Home from "./components/Home";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotFound from "./components/NotFound";

function App() {
  const currentlocation = useLocation();
  return (
    <div className="App">
      <Headbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={currentlocation} key={currentlocation.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={NotFound} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
