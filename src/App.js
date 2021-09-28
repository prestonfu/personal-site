import Experience from "./components/experience";
import Hero from "./sections/hero";
import Header from "./components/header"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import ProjectsCS from "./sections/projects/cs"
import ProjectsMath from "./sections/projects/math"
import ProjectsWriting from "./sections/projects/writing"
import NotFound from "./sections/notfound"
import Construction from "./sections/construction"
import { Helmet } from "react-helmet";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  var construction = new Boolean('true');

  if (construction) {
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
          <Navigation />

          <Switch>
            <Route exact path="/" component={Hero} />
            <Route path="/projects/math" component={ProjectsMath} />
            <Route path="/projects/cs" component={ProjectsCS} />
            <Route path="/projects/writing" component={ProjectsWriting} />
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
