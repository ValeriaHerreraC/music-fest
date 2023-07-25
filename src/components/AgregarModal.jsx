import React, {useEffect} from 'react'
import "../css/modal.css"

export const AgregarModal = ({closeModal}) => {
  
  useEffect(() => {
    fetch("http://localhost:5000/artists")
      .then((response) => response.json())
      .then((artists) => console.log(artists));
  }, []);

  return (
    
    <div className="modal-dialog">
        <div className="modal-content popup agregarPopUp">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Agregar un artista</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Imagen</label>
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Url'/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Descripción</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Ciudad de Nacimiento</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Instrumento</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Género musical</label>
              <input type="text" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
    </div>
    
  )
}
