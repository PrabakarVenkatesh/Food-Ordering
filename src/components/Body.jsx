import React from "react";
import { useState } from "react";
const Banner = () => {
  let [data, setData] = useState([]);
  let link ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    .then((val) => val.json())
    .then((res) => {
      console.log(res);
      setData(
        res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    });

  return (
    <div className="body">
    <>
      <div className="sb">
        <input className="search"></input>
        <button className="btn">Search</button>
      </div>
      <div className="card_container">
        {data.map((x) => (
          <div className="card">
            <img className="carding"
            src={link + x.info.cloudinaryImageId}></img>
            <div>{x.info.name}</div>
            <div>{x.info.avgRating}</div>
            <div>{x.info.areaName}</div>
          </div>
        ))}
      </div>
    </>
    </div>
  );
};

export default Banner;