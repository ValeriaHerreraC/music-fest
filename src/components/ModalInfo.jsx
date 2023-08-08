
export const ModalInfo = ({ closeModal, artist }) => {
  return (
    <div className="modal-dialog modal-fullscreen-sm-down modalc">
      <div className="modal-dialog">
        <div className="modal-content popup ">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {artist.grupo_musical.nombre}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            El cantante {artist.interprete.nombre} {artist.interprete.apellido},
            nacido en la ciudad de {artist.ciudad}, es un {artist.descripcion}.
          </div>
          <div>Genero musical: {artist.genero_musical}</div>
        </div>
      </div>
    </div>
  );
};
