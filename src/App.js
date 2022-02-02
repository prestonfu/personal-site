import "./static/main.css"

import Navbar from "./components/Header/NavBar";
import Footer from "./components/Footer"

import Hero from "./pages/Hero";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Construction from "./pages/Construction"

import math from "./data/math"
import cs from "./data/cs"
import writing from "./data/writing"
import leadership from "./data/leadership"

import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const MathProjects = () => {
  return Projects('Mathematics Projects', math)
}

const CSProjects = () => {
  return Projects('Computer Science Projects', cs)
}

const Writing = () => {
  return Projects('Writing', writing)
}

const Leadership = () => {
  return Projects('Leadership', leadership)
}

function App() {
  // manually change this value
  var construction = false;

  if (construction === true) {
    return (
      <div>
        <Helmet>
          <title>Preston Fu</title>
        </Helmet>
        <Construction />
      </div>
    )
  }
  else {
    return (
      <div>
        <Router>
          <Helmet>
            <title>Preston Fu</title>
          </Helmet>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route path="/projects/math" component={MathProjects} />
            <Route path="/projects/cs" component={CSProjects} />
            <Route path="/writing" component={Writing} />
            <Route path="/leadership" component={Leadership} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} status={404} />
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
