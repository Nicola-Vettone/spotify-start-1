export const SET_MUSIC = "SET_MUSIC";
export const PLAYER_MUSIC = "PLAYER_MUSIC";
export const FAV_SONG = "FAV_SONG";
export const NO_FAV_SONG = "NO_FAV_SONG";

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

export const selectSong = (song) => ({ type: PLAYER_MUSIC, payload: song });
export const favouritesSong = (fav) => ({ type: FAV_SONG, payload: fav });
export const noFavouritesSong = (noFav) => ({ type: NO_FAV_SONG, payload: noFav });
