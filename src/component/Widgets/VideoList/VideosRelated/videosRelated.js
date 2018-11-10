import React from "react";
import style from "./../VideoList.module.css";
import VideoTemplate from "./../VideoTemplate";

const VideosRelated = props => {
  return (
    <div className={style.videoRelated}>
      <VideoTemplate data={props.data} teams={props.teams} />
    </div>
  );
};

export default VideosRelated;
