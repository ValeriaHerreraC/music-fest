import React from 'react'
import { BtnAgregar } from "./BtnAgregar";
import "../css/artists.css"


export const ArtistsContainer = (props) => {
  return (
    <>
    {/* <div>
      <h3 className="subtArtists">Artistas Invitados</h3>
    </div>
    <div className="artistCard">
      {props.children}
    </div> */}
    <table className="table-dark table">
      <thead>
        <tr className='table-dark'>
          <th scope="col"></th>
          <th scope="col" className='subtArtists'>Artistas Invitados</th>
          <th scope="col"></th>
          <th scope="col"> <BtnAgregar/> </th>
        </tr>
      </thead>
      <tbody className='body'>
          {props.children}
      </tbody>
    </table>
    </>
  )
}

