// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Switch from '@material-ui/core/Switch';

function App() {
  return (
    <header className="bandeau">
      <div className="wrapper">
        <h1 className="titre">#FollowMe</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
          
        </BrowserRouter>
        <form action="http://localhost:8000/post" method="post"
              className="form">
          <button type="submit">Connected?</button>
        </form>
      </div>
    </header> 
  );
}

export default App;