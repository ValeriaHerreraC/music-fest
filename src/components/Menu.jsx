import React from "react";
import "../css/menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div className="items">
        <ul className="ul">
          <li className="item">
            <a href="#table" className="as">
              Artistas
            </a>
          </li>
          <li className="item">
            <a href="#place" className="as">
              Ciudades
            </a>
          </li>
          <li className="item">
            <a href="#place" className="as">
              Fechas
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
