import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import SignUp from './components/pages/SignUp'
import Watch from './components/pages/Watch'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/watch' component={Watch} />
          <Route path='/signup' component={SignUp} />


        </Switch>
      </Router>
    </>
  );
}

export default App;
