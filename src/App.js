import React, { Component } from 'react';
import Popular from './Components/Popular'
import './App.css';
import Nav from './Components/nav'
import Home from './Components/home'
import Battle from './Components/battle';
import {Switch} from 'react-router-dom'
import Results from './Components/results'

const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

class App extends Component {
  render() {
    return (
    <Router>
        <div className="container">
            <Nav/>
            <Switch>
                <Route path="/battle/results" component={Results}/>
            <Route path="/battle" component={Battle}/>
            <Route exact path="/" component={Home}/>
           <Route path="/popular" component={Popular}/>
                <Route render={function () {
                    return <p>Not Found</p>
                }}/>
            </Switch>
        </div>
    </Router>
    );
  }
}

export default App;
