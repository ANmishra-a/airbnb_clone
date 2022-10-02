import React from "react";
import "./Home.style.css";
import Banner from "./components/banner/banner.component";

function Home() {
  return (
    <div className="home">
      <div className="home__filter-container">
        <Banner />
      </div>
    </div>
  );
}

export default Home;
