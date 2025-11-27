import React from "react";

export default function Sidebar() {
  return (
    <div className="side_container">
      <div className="side_container_actvities">
        <div className="side_container_actvities-icon">
          <img src="/public/yoga.svg" alt="Yoga icon" />
        </div>
        <div className="side_container_actvities-icon">
          <img src="/public/swim.svg" alt="Swim icon" />
        </div>
        <div className="side_container_actvities-icon">
          <img src="/public/bike.svg" alt="Bike icon" />
        </div>
        <div className="side_container_actvities-icon">
          <img src="/public/dumbbell.svg" alt="Dumbbell icon" />
        </div>
      </div>
      <div className="side_container-copyright">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
}
