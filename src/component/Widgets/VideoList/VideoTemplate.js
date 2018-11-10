import React from "react";
import { Link } from "react-router-dom";

import CardInfo from "./../CardInfo/CardInfo";
import style from "./VideoList.module.css";

const VideoTemplate = props => {
  return props.data.map((item, key) => {
    return (
      <Link key={key} to={`/videos/${item.id}`}>
        <div className={style.videoListWrapperItem}>
          <div
            className={style.left}
            style={{
              background: `url(/images/videos/${item.image})`
            }}
          >
            <div />
          </div>
          <div className={style.right}>
            <CardInfo teams={props.teams} team={item.team} date={item.date} />
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link>
    );
  });
};

export default VideoTemplate;
