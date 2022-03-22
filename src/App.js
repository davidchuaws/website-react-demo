import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import Home from './components/Pages/Home';
import Services from './components/Common/Services';
import Portfolio from './components/Common/Portfolio';
import Team from './components/Common/Team';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>
          <Routes>
            <Route exact path="/"
              element={<Home />}
            />

            <Route 
              path="/about"
              element={<About />}
            />

            <Route 
              path="/services"
              element={<Services />}
            />

            <Route 
              path="/portfolio"
              element={<Portfolio />}
            />

            <Route 
              path="/team"
              element={<Team />}
            />

            <Route 
              path="/contact"
              component={<Contact />}
            />
            </Routes>
        </PageWrapper>
      </Router>
    );
  }  
}

export default App;
