import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import BrowserRouter from 'react-router-dom/BrowserRouter'


class App extends Component {
  render() {
    return (

        
        <Router>

           
        <BrowserRouter basename={window.location.pathname || ''}>
        <Route exact path ="/" component = {Home} /> 
        </BrowserRouter>    

       </Router>


      );
  }
}

export default App;
