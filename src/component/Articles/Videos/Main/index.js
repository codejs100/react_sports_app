import React from "react";
import NewsSlider from "./../../../Widgets/NewsSlider/Slider";
import VideoList from "./../../../Widgets/VideoList/VideoList";

const VideosMain = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={6}
        settings={{
          dots: false
        }}
      />
      <VideoList
        type="card"
        title={false}
        loadMore={true}
        start={0}
        amount={6}
      />
    </div>
  );
};

export default VideosMain;
