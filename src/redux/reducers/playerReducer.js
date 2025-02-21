import { PLAYER_MUSIC } from "../action";

const initialState = {
  playerSong: { content: null },
};

const playerReducers = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_MUSIC:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default playerReducers;
