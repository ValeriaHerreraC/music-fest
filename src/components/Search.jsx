import React, {useState} from 'react'
import data from "../Atists.json"
import "../css/search.css"
import { ArtistsContainer } from './ArtistsContainer';

export const Search = () => {

  const [search, setSearch] = useState ("");

  const handleChange = (e) => {
    setSearch (e.target.value);
    console.log(e.target.value);
  };

  const results = !search ? <ArtistsContainer/> : data.filter((artists) => artists.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='contSearch'>
      <img className="lupa" src="../public/lupa.png" />
      <input
        value = {search} 
        onChange = {handleChange}
        type="search"
        className="inputSearch"
        placeholder="Search"
      />
      {search.length > 0 && results.map((data) => (
        <ArtistsContainer/>

      ))} 
    </div>
  )
}
