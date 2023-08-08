import { useState } from "react";
import { useDispatch } from "react-redux";
import { editarArtista } from "../features/artistsSlice";

export const EditModal = ({ closeEditModal, artist }) => {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState({
    id: artist.id,
    nombreMusical: artist.grupo_musical.nombre,
    imagen: artist.grupo_musical.imagen,
    descripcion: artist.grupo_musical.descripcion,
    ciudadNacimiento: artist.ciudad,
    nombre: artist.interprete.nombre,
    apellido: artist.interprete.apellido,
    generoMusical: artist.genero_musical,
    instrumentoNombre: artist.instrumento.nombre,
    instrumentoTipo: artist.instrumento.tipo,
  });

  const handleChange = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedArtist = {
      id: edit.id,
      grupo_musical: {
        nombre: edit.nombreMusical,
        imagen: edit.imagen,
        descripcion: edit.descripcion,
      },
      ciudad: edit.ciudadNacimiento,
      interprete: {
        nombre: edit.nombre,
        apellido: edit.apellido,
      },
      instrumento: {
        nombre: edit.instrumentoNombre,
        tipo: edit.instrumentoTipo,
      },
      genero_musical: edit.generoMusical,
    };
    dispatch(editarArtista(editedArtist));
  };
  return (
    <div className="modal-dialog">
      <div className="modal-content popup agregarPopUp">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Editar artista
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={closeEditModal}
          ></button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nombre Artístico
              </label>
              <input
                name="nombreMusical"
                type="text"
                className="form-control"
                onChange={handleChange}
                value={edit.nombreMusical}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Imagen
              </label>
              <input
                name="imagen"
                type="text"
                className="form-control"
                placeholder="Url"
                onChange={handleChange}
                value={edit.imagen}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Descripción
              </label>
              <input
                name="descripcion"
                type="text"
                className="form-control"
                onChange={handleChange}
                value={edit.descripcion}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Ciudad de Nacimiento
              </label>
              <input
                name="ciudadNacimiento"
                type="text"
                className="form-control"
                onChange={handleChange}
                value={edit.ciudadNacimiento}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nombre del Artista
              </label>
              <input
                placeholder="Nombres"
                name="nombre"
                type="text"
                className="form-control"
                onChange={handleChange}
                value={edit.nombre}
              />
              <input
                placeholder="Apellidos"
                name="apellido"
                type="text"
                className="form-control margen"
                onChange={handleChange}
                value={edit.apellido}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Instrumento
              </label>
              <input
                placeholder="Nombre del instrumento"
                name="instrumentoNombre"
                type="text"
                className="form-control "
                onChange={handleChange}
                value={edit.instrumentoNombre}
              />
              <input
                placeholder="Tipo de instrumento"
                name="instrumentoTipo"
                type="text"
                className="form-control margen"
                onChange={handleChange}
                value={edit.instrumentoTipo}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Género musical
              </label>
              <input
                name="generoMusical"
                type="text"
                className="form-control"
                onChange={handleChange}
                value={edit.generomusical}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
