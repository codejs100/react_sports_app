import React from "react";
import NewsSlider from "./../../../Widgets/NewsSlider/Slider";
import NewsList from "./../../../Widgets/NewsList/NewsList";

const NewsMain = () => {
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
      <NewsList type="cardMain" loadMore={false} start={0} amount={5} />
    </div>
  );
};

export default NewsMain;
