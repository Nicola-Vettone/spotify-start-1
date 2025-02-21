import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducers/musicReducer";
import playerReducers from "../reducers/playerReducer";

export const store = configureStore({
  reducer: {
    music: musicReducer,
    cover: playerReducers,
  },
});
