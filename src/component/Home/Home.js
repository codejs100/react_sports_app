import React from "react";
import NewsSlider from "../Widgets/NewsSlider/Slider";
import NewsList from "./../Widgets/NewsList/NewsList";
import VideoList from "./../Widgets/VideoList/VideoList";

const Home = () => {
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
      <NewsList type="card" loadMore={false} start={3} amount={5} />
      <VideoList
        type="card"
        title={true}
        loadMore={true}
        start={3}
        amount={5}
      />
    </div>
  );
};

export default Home;
