import React from "react";
import FontAwesome from "react-fontawesome";
import style from "./CardInfo.module.css";

const CardInfo = props => {
  const teamName = (teams, team) => {
    let data = teams.find(item => item.id === team);
    return data ? data.name : "";
  };
  return (
    <div className={style.CardInfo}>
      <span className={style.team}>{teamName(props.teams, props.team)}</span>
      <span className={style.date}>
        <FontAwesome name="clock-o" />
        {props.date}
      </span>
    </div>
  );
};

export default CardInfo;
