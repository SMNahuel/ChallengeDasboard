import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ContainerDashboard from "./Dashboard/Dashboard";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path={"/"} component={ContainerDashboard} />
    </Switch>
  </Router>
);

export default Root;
