import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./component/Home/Home";
import Layout from "./component/hoc/Layout/Layout";
import NewsArticle from "./component/Articles/News/Post";
import VideoArticle from "./component/Articles/Videos/Video";
import NewsMain from "./component/Articles/News/Main";
import VideosMain from "./component/Articles/Videos/Main";

class Routes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles/:id" exact component={NewsArticle} />
          <Route path="/videos/:id" exact component={VideoArticle} />
          <Route path="/news" exact component={NewsMain} />
          <Route path="/videos" exact component={VideosMain} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
