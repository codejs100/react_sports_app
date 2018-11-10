import React, { Component } from "react";
import axions from "axios";
import style from "./../../Article.module.css";

import { URL } from "../../../../config";
import Header from "./Header";
import VideosRelated from "./../../../Widgets/VideoList/VideosRelated/videosRelated";

class VideosArticle extends Component {
  state = {
    video: [],
    team: [],
    teams: [],
    releated: []
  };

  componentWillMount() {
    const videoId = this.props.match.params.id;
    axions.get(`${URL}/videos?id=${videoId}`).then(response => {
      const video = response.data[0];
      axions.get(`${URL}/teams?id=${video.team}`).then(response => {
        this.setState({
          video,
          team: response.data[0]
        });
        this.getRelatedVideos();
      });
    });
  }

  getRelatedVideos() {
    axions.get(`${URL}/teams`).then(response => {
      let teams = response.data;
      axions
        .get(`${URL}/videos?q=${this.state.team.city}&_limit=3`)
        .then(response => {
          this.setState({
            teams,
            releated: response.data
          });
        });
    });
  }

  render() {
    let video = this.state.video;
    let team = this.state.team;
    return (
      <div>
        <Header teamData={team} />
        <div className={style.videoWrapper}>
          <h1>{video.title}</h1>
          <iframe
            title="videoplayer"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${video.url}`}
          />
        </div>
        <VideosRelated data={this.state.releated} teams={this.state.teams} />
      </div>
    );
  }
}

export default VideosArticle;
