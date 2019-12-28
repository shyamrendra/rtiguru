import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'


class App extends Component {
  render() {
    return (

        
        <Router>

        <div>        
        <Route exact path ="/" component = {Home} />     


        </div>


       </Router>


      );
  }
}

export default App;
