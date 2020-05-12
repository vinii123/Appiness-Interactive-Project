import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin/Admin";
import Logout from "./Components/Logout/Logout";

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} />
        
        <Redirect to="/" />
      </Switch>

    </div>
  );
}

export default App;
