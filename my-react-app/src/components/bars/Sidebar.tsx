import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__activity">
        <div className="sidebar__activity-icon">
          <img src="/public/yoga.svg" alt="Yoga icon" />
        </div>
        <div className="sidebar__activity-icon">
          <img src="/public/swim.svg" alt="Swim icon" />
        </div>
        <div className="sidebar__activity-icon">
          <img src="/public/bike.svg" alt="Bike icon" />
        </div>
        <div className="sidebar__activity-icon">
          <img src="/public/dumbbell.svg" alt="Dumbbell icon" />
        </div>
      </div>
      <div className="sidebar__copyright">
        <p>Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
}
