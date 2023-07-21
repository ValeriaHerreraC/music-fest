import React from 'react'
import "../css/modal.css"

export const ModalContent = (props, handleClose) => {
  return (
    <div className="modal-dialog">
        <div className="modal-content popup">
          <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            El cantante {props.nameArtist}, nacido en la ciudad de {props.city}, es un {props.description}.
          </div>
          <div>
            Genero musical: {props.genero}
          </div>
        </div>
    </div>
  )
}

