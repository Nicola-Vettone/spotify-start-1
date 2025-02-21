export const SET_MUSIC = "SET_MUSIC";

export const getMusic = (artist) => {
  return async (dispatch, getState) => {
    console.log("getState()", getState());

    try {
      let resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
      if (resp.ok) {
        let { data } = await resp.json(); //Prende solo l'array delle canzoni
        console.log(data);
        dispatch({ type: SET_MUSIC, payload: data.slice(0, 4) });
      } else {
        console.log("Errore nel fetch");
      }
    } catch (error) {
      console.log("Errore:", error);
    }
  };
};
