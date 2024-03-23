import React from "react";
import Bike from "../assets/bike.svg";
import Dumbbel from "../assets/dumbbel.svg";
import Swim from "../assets/swim.svg";
import Yoga from "../assets/yoga.svg";

function Sidebar() {
  return (
    <div>
      <div className="container">
        <div className="container-icon">
          <img src={Bike} alt="bike" />
        </div>
        <div className="container-icon">
          <img src={Dumbbel} alt="dumbbel" />
        </div>
        <div className="container-icon">
          <img src={Swim} alt="swim" />
        </div>
        <div className="container-icon">
          <img src={Yoga} alt="yoga" />
        </div>
      </div>
      <p className="copiryght">Copiryght, SportSee 2020</p>
    </div>
  );
}

export default Sidebar;
