import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    games:[],
  },
  reducers: {
    addToFavorites: (state, action) => {
    
      const gameToAdd = action.payload;
      if (!state.games.some((game) => game.id === gameToAdd.id)) {
        state.games.push(gameToAdd);
      }
    },
    removeFromFavorites: (state, action) => {
      const gameToRemove = action.payload;
      state.games = state.games.filter((game) => game.id !== gameToRemove.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;