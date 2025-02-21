import { SET_MUSIC } from "../action";

const initialState = {
  content: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default musicReducer;
