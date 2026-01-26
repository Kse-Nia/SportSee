import React from "react";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <img src="/yoga.svg" alt="Yoga" />
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <img src="/swim.svg" alt="Natation" />
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <img src="/bike.svg" alt="Cyclisme" />
            </a>
          </li>
          <li className="sidebar__item">
            <a href="#" className="sidebar__link">
              <img src="/dumbbell.svg" alt="Musculation" />
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="sidebar__copyright">
        <p>Copyright, SportSee 2020</p>
      </div>
    </aside>
  );
}