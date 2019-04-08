import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Redirector} from 'react-router-redirect';
import "./App.css";
import Menu from "./menu/menu";
import Reservation from "./menu/reservation";
import Principale from "./home/principale"

import Adminmenu from './admin/adminmenu'
import Adminusers from './admin/adminusers'




class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Redirector />
          <Switch>
            <Route path="/"  component={Principale} exact />
            <Route path="/menu/:mail/:firstName/:lastName" component={Menu}  />
            <Route path="/reservation" component={Reservation} /> 
            <Route path="/admin" component={Adminmenu} />
            <Route path="/adminmenu" component={Adminmenu} />
            <Route path="/adminusers" component={Adminusers} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
