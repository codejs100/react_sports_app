import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./component/Home/Home";
import Layout from "./component/hoc/Layout/Layout";

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
