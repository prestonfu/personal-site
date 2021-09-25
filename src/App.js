import Experience from "./sections/experience";
import Hero from "./sections/hero";
import Header from "./sections/header"
import Footer from "./sections/footer"
import ProjectsCS from "./sections/projects/cs"
import ProjectsMath from "./sections/projects/math"
import ProjectsWriting from "./sections/projects/writing"
import Education from "./sections/education";
import HonorsAwards from "./sections/honors-awards";
import Skills from "./sections/skills";
import { Helmet } from "react-helmet";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className = "bg-white">
      <Router>
        <Helmet>
          <title>Preston Fu</title>
        </Helmet>
        <Header />
        
        <Switch>
          <Route path="/projects/math">
            <div className="h-20 bg-white" />
            <ProjectsMath />
          </Route>
          <Route path="/projects/cs">
            <div className="h-20 bg-white" />
            <ProjectsCS />
          </Route>
          <Route path="/projects/writing">
            <div className="h-20 bg-white" />
            <ProjectsWriting />
          </Route>
          <Route path="/bio">
            <div className="h-20 bg-white" />
            <div className="h-auto bg-white">
            <div className="mx-auto max-w-6xl sm:pl-16 z-0">
              <div className="h-12" />
              <h2 className = "text-center sm:text-center page-header">
                <b>About Me</b>
              </h2>
            </div>
            </div>
            <Experience />
            <Education />
            <HonorsAwards />
            <Skills />
          </Route>
          <Route path="/">
            <Hero />
          </Route>
        </Switch>

        <div id="footer">
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
