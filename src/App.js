import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar"
import Footer from "../src/components/footer/footer"
import Portfolio from "./pages/portfolio/portfolio"
import About from "./pages/aboutme/about"
import Contact from "./pages/contact/contact"
import '../src/App.css';


function App() {
  return (
    <div>
      
      <Router>
      <Navbar />
        <Switch>
          
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={About} />
        </Switch>
        <Footer />
      </Router>
      
    </div>
  )
}

export default App
