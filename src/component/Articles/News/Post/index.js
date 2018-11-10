import React, { Component } from "react";
import axions from "axios";
import style from "./../../Article.module.css";
import { URL } from "./../../../../config";
import Header from "./Header";
import Body from "./Body";

class NewsArticle extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    const articleId = this.props.match.params.id;
    axions.get(`${URL}/articles?id=${articleId}`).then(response => {
      const article = response.data[0];
      axions.get(`${URL}/teams?id=${article.team}`).then(response => {
        this.setState({
          article,
          team: response.data[0]
        });
      });
    });
  }

  render() {
    let article = this.state.article;
    let team = this.state.team;
    return (
      <div>
        <Header teamData={team} date={article.date} author={article.author} />
        <div className={style.articleBody}>
          <h1>{article.title}</h1>
          <div
            className={style.articleImage}
            style={{
              background: `url("/images/articles/${article.image}")`
            }}
          />
          <div className={style.articleText}>{article.body}</div>
        </div>
      </div>
    );
  }
}

export default NewsArticle;
