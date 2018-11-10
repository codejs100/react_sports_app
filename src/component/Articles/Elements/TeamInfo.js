import React from "react";
import style from "./../Article.module.css";

const TeamInfo = props => {
  return (
    <div className={style.teamInfoWrapper}>
      <div
        className={style.left}
        style={{
          background: `url("/images/teams/${props.team.logo}")`
        }}
      />
      <div className={style.right}>
        <div>
          <span>
            {props.team.city} {props.team.name}
          </span>
        </div>
        <div>
          {props.team && props.team.stats && (
            <strong>
              W {props.team.stats[0].wins} - L {props.team.stats[0].defeats}
            </strong>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
