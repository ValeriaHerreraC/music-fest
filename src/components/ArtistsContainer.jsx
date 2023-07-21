import React from 'react'
import "../css/artists.css"


export const ArtistsContainer = (props) => {
  return (
    <>
    <div>
      <h3 className="subtArtists">Artistas Invitados</h3>
    </div>
    <div className="artistCard">
      {props.children}
    </div>
    </>
  )
}

