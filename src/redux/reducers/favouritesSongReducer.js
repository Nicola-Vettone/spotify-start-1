import { FAV_SONG, NO_FAV_SONG } from "../action";

const initialState = {
  content: [],
};

const favouritesSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAV_SONG:
      // some controlla se la canzone è già nei preferiti per evitare duplicati
      if (state.content.some((fav) => fav.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case NO_FAV_SONG:
      return {
        ...state,
        content: state.content.filter((fav) => fav.album.id !== action.payload),
      };

    default:
      return state;
  }
};

export default favouritesSongReducer;
