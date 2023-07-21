import React from 'react'
import data from "../Atists.json"
import { ModalContent } from "./ModalContent";

export const Modal = (show, handleClose) => {

  return (
    <div className="modal-dialog modal-fullscreen-sm-down" show={show} onHide={handleClose}>
      {data.map(artists => 
        <ModalContent
          key= {artists.id}
          name = {artists.grupo_musical.nombre}
          image={artists.grupo_musical.imagen}
          description={artists.grupo_musical.descripcion}
          city={artists.ciudad}
          nameArtist={artists.interprete.nombre}
          lasNameArtist={artists.interprete.apellido}
          genero={artists.genero_musical}
        />  
      )}
    </div>
    
  )
}
