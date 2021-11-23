import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
 
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/resume" component={Resume} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
