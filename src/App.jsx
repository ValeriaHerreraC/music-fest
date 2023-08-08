import React from "react";
import { Artists } from "./components/Artists";
import { Menu } from "./components/Menu";
import "./css/app.css";

export const App = () => {
  return (
    <div className="main">
      <Menu />
      <div className="sec1">
        <div className="festName">
          <h2 className="festTitle">STEREO FEST</h2>
        </div>
      </div>
      <div className="sec3">
        <div className="artistCards" id="table">
          <Artists />
        </div>
      </div>
      <div className="sec4">
        <h3 id="place" className="subtCities">
          Ciudades y Fechas
        </h3>
        <div className="contCities">
          <div className="cities">
            <h3>Bogotá</h3>
            <h5>25 Nov.</h5>
            <img className="ubi" src="./public/ubi.avif" />
          </div>
          <div className="cities">
            <h3>Medellín</h3>
            <h5>26 Nov.</h5>
            <img className="ubi" src="./public/ubi.avif" />
          </div>
          <div className="cities">
            <h3>Cali</h3>
            <h5>27 Nov.</h5>
            <img className="ubi" src="./public/ubi.avif" />
          </div>
        </div>
      </div>
    </div>
  );
};
