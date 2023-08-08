import React, { useState } from "react";
import { AgregarModal } from "./AgregarModal";
import "../css/artists.css";

export const BtnAgregar = () => {
  const [showAgregar, setShowAgregar] = useState(false);

  const handleClose2 = () => {
    setShowAgregar(false);
  };
  const handleShow2 = () => {
    setShowAgregar(true);
  };

  return (
    <>
      <button className="agregar" onClick={handleShow2}>
        <img src="../public/agregar.png" />
        <p>Agregar artista</p>
      </button>
      {showAgregar && (
        <AgregarModal isOpen={showAgregar} closeModal={handleClose2} />
      )}
    </>
  );
};
