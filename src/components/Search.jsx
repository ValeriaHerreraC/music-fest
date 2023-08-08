import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../css/search.css";

export const Search = ({onFilter}) => {
  const [search, setSearch] = useState("");
  const dataArtists = useSelector((state) => state.artists);
  useEffect(() => {
    if (search.length > 0) {
      const filter = dataArtists.filter((artist) =>
      artist.grupo_musical.nombre.toLowerCase().includes(search.toLowerCase()),
    )
    onFilter(filter);
    }else{
      onFilter(dataArtists);
    }
  },[search])

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="contSearch">
      <img className="lupa" src="../public/lupa.png" />
      <input
        value={search}
        onChange={handleChange}
        type="search"
        className="inputSearch"
        placeholder="Search"
      />
    </div>
  );
};
