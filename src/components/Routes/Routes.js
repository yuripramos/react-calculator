import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Calculator from "../Calculator";

import Layout from "../common/Layout";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Layout>
          <Route>
            <Switch>
              <Route exact path="/calc" component={Calculator} />
            </Switch>
          </Route>
        </Layout>
      </Switch>
    );
  }
}

export default Routes;
