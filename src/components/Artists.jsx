import React, { useState } from "react";
import { ModalInfo } from "./ModalInfo";
import { useSelector, useDispatch } from "react-redux";
import { eliminarArtista } from "../features/artistsSlice";
import { Edit } from "./Edit";
import { BtnAgregar } from "./BtnAgregar";
import { Search } from "./Search";
import "../css/artists.css";

export const Artists = () => {
  const [dataArtists, setDataArtists] = useState(
    useSelector((state) => state.artists)
  );
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Estas seguro de eliminar este artista?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success",
          dispatch(eliminarArtista(id))
        );
      }
    });
  };

  const onFilter = (data) => {
    setDataArtists(data);
  };

  return (
    <>
      <table className="table-dark table">
        <thead>
          <tr className="table-dark">
            <th scope="col" className="subtArtists">
              Artistas Invitados
            </th>
            <th scope="col" className="agregarDiv">
              <BtnAgregar />
            </th>
            <th scope="col" className="search">
              <Search onFilter={onFilter} />
            </th>
          </tr>
        </thead>
        <tbody className="body">
          {dataArtists.map((artist) => (
            <tr className="filas" key={artist.id}>
              <td>
                <img
                  className="image"
                  src={artist.grupo_musical.imagen}
                  onClick={handleShow}
                />
                {show && (
                  <ModalInfo
                    isOpen={show}
                    closeModal={handleClose}
                    artist={artist}
                  />
                )}
              </td>
              <td>
                <p className="name">{artist.grupo_musical.nombre}</p>
              </td>
              <td>
                <Edit artist={artist} />
                <img
                  className="delete"
                  src="../public/eliminar.png"
                  onClick={() => handleDelete(artist.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
