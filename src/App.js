import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home";
import AddEvents from "./Components/AddEvents/AddEvents";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvent">Add Event</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addEvent">
            <AddEvents />
          </Route>
          <Route path="/dashboard">
            {/* <Dashboard /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

  
export default App;
