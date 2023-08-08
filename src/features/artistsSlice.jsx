import { createSlice } from "@reduxjs/toolkit";

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const setData = (data) => {
  localStorage.setItem("data", JSON.stringify({ artists: data }));
};

export const artistsSlice = createSlice({
  name: "Artistas",
  initialState: getData().artists,
  reducers: {
    agregarArtista: (state, action) => {
      state.push(action.payload);
      setData(state);
      return state;
    },
    eliminarArtista: (state, action) => {
      state = state.filter((artist) => artist.id !== action.payload);
      setData(state);
      return state;
    },
    editarArtista: (state, action) => {
      const index = state.findIndex(
        (artist) => artist.id === action.payload.id
      );
      state[index] = action.payload;
      setData(state);
      return state;
    },
  },
});

export const { agregarArtista, eliminarArtista, editarArtista } =
  artistsSlice.actions;
export default artistsSlice.reducer;
