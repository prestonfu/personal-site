import "./static/main.css"

import Navbar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer"

import Hero from "./pages/Hero";
import ProjectsCS from "./pages/projects/ComputerScience"
import ProjectsMath from "./pages/projects/Math"
import ProjectsLeadership from "./pages/projects/Leadership"
import ProjectsWriting from "./pages/projects/Writing"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Construction from "./pages/Construction"

import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  var construction = new Boolean(false);

  if (construction == true) {
    return (
      <div>
        <Helmet>
          <title>Preston Fu</title>
        </Helmet>

        <Construction />
      </div>
    );
  }

  else {
    return (
      <div>
        <Router>
          <Helmet>
            <title>Preston Fu</title>
          </Helmet>
          {/* <Header /> */}
          <Navbar />

          <Switch>
            <Route exact path="/" component={Hero} />
            <Route path="/projects/math" component={ProjectsMath} />
            <Route path="/projects/cs" component={ProjectsCS} />
            <Route path="/writing" component={ProjectsWriting} />
            <Route path="/leadership" component={ProjectsLeadership} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} status={404} />
          </Switch>

          <div id="contact">
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
