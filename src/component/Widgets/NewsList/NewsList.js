import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axions from "axios";

import { URL } from "./../../../config";
import style from "./NewsList.module.css";

import LoadButton from "./../Button/Botton";
import CardInfo from "./../CardInfo/CardInfo";

class NewsList extends Component {
  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length === 0) {
      axions.get(`${URL}/teams`).then(response => {
        this.setState({
          teams: response.data
        });
      });
    }
    axions.get(`${URL}/articles?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        items: [...this.state.items, ...response.data],
        start,
        end
      });
    });
  };

  renderTemplate = type => {
    let template = null;

    switch (type) {
      case "card": {
        template = this.state.items.map((item, key) => {
          return (
            <CSSTransition
              classNames={{
                enter: style.newsListWrapper,
                enterActive: style.newsListWrapperEnter
              }}
              timeout={500}
              key={key}
            >
              <div>
                <div className={style.newsListItem}>
                  <Link to={`/articles/${item.id}`}>
                    <CardInfo
                      teams={this.state.teams}
                      team={item.team}
                      date={item.date}
                    />
                    <h2>{item.title}</h2>
                  </Link>
                </div>
              </div>
            </CSSTransition>
          );
        });
        break;
      }
      case "cardMain": {
        template = this.state.items.map((item, key) => {
          return (
            <CSSTransition
              classNames={{
                enter: style.newsListWrapper,
                enterActive: style.newsListWrapperEnter
              }}
              timeout={500}
              key={key}
            >
              <Link to={`/articles/${item.id}`}>
                <div className={style.flexWrapper}>
                  <div
                    className={style.left}
                    style={{
                      background: `url("/images/articles/${item.image}")`
                    }}
                  >
                    <div />
                  </div>
                  <div className={style.right}>
                    <CardInfo
                      teams={this.state.teams}
                      team={item.team}
                      date={item.date}
                    />
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </Link>
            </CSSTransition>
          );
        });
        break;
      }
      default:
        template = null;
    }
    return template;
  };

  loadMore = () => {
    const start = this.state.end;
    const end = this.state.end + this.state.amount;
    this.request(start, end);
  };
  render() {
    return (
      <div>
        <TransitionGroup component="div" className="List">
          {this.renderTemplate(this.props.type)}
        </TransitionGroup>
        <LoadButton
          type="loadmore"
          loadMore={this.loadMore}
          cta="Load More News"
        />
      </div>
    );
  }
}

export default NewsList;
