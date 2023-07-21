import React, {useState} from 'react'
import data from "../Atists.json"
import "../css/search.css"

export const Search = () => {

  const [search, setSearch] = useState ("");

  const handleChange = (event) => {
    setSearch (event.target.value);
  };

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
      {search.length > 0 && data.map((artists) => (
        <div>
          <div className="card" key={artists?.id}>
            <img src={artists?.image} className="card-img-top image" />
            <div className="card-body">
              <p className="card-text name">{artists?.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
