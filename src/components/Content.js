import React, { useState, useEffect } from "react";
import "../styles/Content.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Content = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch(
          "http://178.62.48.18/dashboard-content.json"
        );
        const result = await response.json();

        // Extract the data property containing the array of entries
        setEntries(result.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 3 seconds
    arrows: false,
    pauseOnHover: true,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-main-wrapper">
      <div className="content-page">
        <h1 className="content-content">CMS Content</h1>
        <Slider {...sliderSettings}>
          {entries.map((entry) => (
            <div key={entry.id} className="carousel-slide">
              <div className="carousel-content">
                <h2>{entry.title}</h2>
                {entry.mainTitle && <h3>{entry.mainTitle}</h3>}
                <p>{entry.mainParagraph}</p>
                <time>{entry.postDate}</time>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Content;
