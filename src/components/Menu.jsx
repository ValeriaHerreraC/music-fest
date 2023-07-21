import React from 'react'
import { Search } from "./Search";
import "../css/menu.css"

export const Menu = () => {
  return (
    <div className='menu'>
      <div className='items'>
        <ul className='ul'>
          <li className='item'><a>Artistas</a></li>
          <li className='item'><a>Ciudades</a></li>
          <li className='item'><a>Fechas</a></li>
        </ul>
      </div>
      <div className='seeker'>
        <Search/>
      </div>
    </div>
  )
}

