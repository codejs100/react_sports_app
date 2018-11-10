import React, { Component } from "react";
import axions from "axios";

import { URL } from "./../../../config";
import style from "./VideoList.module.css";

import LoadButton from "./../Button/Botton";
import VideoTemplate from "./VideoTemplate";

class VideoList extends Component {
  state = {
    teams: [],
    videos: [],
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
    axions.get(`${URL}/videos?_start=${start}&_end=${end}`).then(response => {
      this.setState({
        videos: [...this.state.videos, ...response.data],
        start,
        end
      });
    });
  };

  renderTemplate = type => {
    let template = null;
    switch (type) {
      case "card": {
        template = (
          <VideoTemplate data={this.state.videos} teams={this.state.teams} />
        );
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

  renderTitle = () => {
    return this.props.title ? (
      <h3>
        <strong>NBA</strong> Videos
      </h3>
    ) : null;
  };
  renderButton = () => {
    return this.props.loadMore ? (
      <LoadButton type="loadmore" loadMore={this.loadMore} cta="Load More" />
    ) : (
      <LoadButton type="linkTo" linkTo="/videos" cta="More Videos" />
    );
  };
  render() {
    return (
      <div className={style.videoWrapper}>
        {this.renderTitle()}
        {this.renderTemplate(this.props.type)}
        {this.renderButton()}
      </div>
    );
  }
}

export default VideoList;
