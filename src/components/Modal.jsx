import React from 'react'
import data from "../Atists.json"
import { ModalContent } from "./ModalContent";

export const Modal = ({closeModal}) => {

  return (
    <div className="modal-dialog modal-fullscreen-sm-down modalc">
      {data.artists.map(artists => 
        <ModalContent
          closeModal={closeModal}
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
