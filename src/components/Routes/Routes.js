import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Calculator from "../Calculator";

import Layout from "../common/Layout";

const withRouteConfig = ({ tabs, contextTitle }) => Component =>
  function WrappedComponent(props) {
    return (
      <Fragment>
        {tabs && contextTitle && (
          <Subnav tabs={tabs} contextTitle={contextTitle} />
        )}
        <Component contextTitle={contextTitle} {...props} />
      </Fragment>
    );
  };

class Routes extends Component {
  render() {
    const scienceTabs = [
      {
        text: "Top Trends",
        url: "/science/hot"
      },
      {
        text: "all",
        url: "/science/all"
      }
    ];
    const technologyTabs = [
      {
        text: "Top Trends",
        url: "/technology/hot"
      },
      {
        text: "all",
        url: "/technology/all"
      }
    ];
    const healthTabs = [
      {
        text: "Top Trends",
        url: "/health/hot"
      },
      {
        text: "all",
        url: "/health/all"
      }
    ];
    const politicsTabs = [
      {
        text: "Top Trends",
        url: "/politics/hot"
      },
      {
        text: "all",
        url: "/politics/all"
      }
    ];
    const worldTabs = [
      {
        text: "Top Trends",
        url: "/world/hot"
      },
      {
        text: "all",
        url: "/world/all"
      }
    ];
    const scienceRoutes = withRouteConfig({
      tabs: scienceTabs,
      contextTitle: "science"
    });
    const technologyRoutes = withRouteConfig({
      tabs: technologyTabs,
      contextTitle: "technology"
    });
    const healthRoutes = withRouteConfig({
      tabs: healthTabs,
      contextTitle: "health"
    });
    const politicsRoutes = withRouteConfig({
      tabs: politicsTabs,
      contextTitle: "politics"
    });
    const worldRoutes = withRouteConfig({
      tabs: worldTabs,
      contextTitle: "world"
    });

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
