import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { agregarArtista } from "../features/artistsSlice";
import "../css/modal.css";

export const AgregarModal = ({ closeModal }) => {
  const [agregar, setAgregar] = useState({
    nombreMusical: "",
    imagen: "",
    descripcion: "",
    ciudadNacimiento: "",
    nombre: "",
    apellido: "",
    generoMusical: "",
    instrumentoNombre: "",
    instrumentoTipo: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAgregar({
      ...agregar,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregar.id = new Date().getTime();
    const newArtist = {
      id: new Date().getTime(),
      grupo_musical: {
        nombre: agregar.nombreMusical,
        imagen: agregar.imagen,
        descripcion: agregar.descripcion,
      },
      ciudad: agregar.ciudadNacimiento,
      interprete: {
        nombre: agregar.nombre,
        apellido: agregar.apellido,
      },
      instrumento: {
        nombre: agregar.instrumentoNombre,
        tipo: agregar.instrumentoTipo,
      },
      genero_musical: agregar.generoMusical,
    };
    dispatch(agregarArtista(newArtist));
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content popup agregarPopUp">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Agregar un artista
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
              />
              <input
                placeholder="Apellidos"
                name="apellido"
                type="text"
                className="form-control margen"
                onChange={handleChange}
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
              />
              <input
                placeholder="Tipo de instrumento"
                name="instrumentoTipo"
                type="text"
                className="form-control margen"
                onChange={handleChange}
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
