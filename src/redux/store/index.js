import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducers/musicReducer";
import playerReducers from "../reducers/playerReducer";
import favouritesSongReducer from "../reducers/favouritesSongReducer";

export const store = configureStore({
  reducer: {
    music: musicReducer,
    cover: playerReducers,
    favourites: favouritesSongReducer,
  },
});
