/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Spinner, Col, Button } from "react-bootstrap";
import { favouritesSong, getMusic, noFavouritesSong } from "../redux/action";
import { useEffect } from "react";

const Album = ({ artist, genre }) => {
  const dispatch = useDispatch();

  function handleClick(image, title) {
    dispatch({ type: "PLAYER_MUSIC", payload: { image, title } });
  }

  const songs = useSelector((state) => {
    console.log(state.music.content);
    return state.music.content.filter((song) => song.artist.name.toLowerCase() === artist.toLowerCase());
  });

  const favourites = useSelector((state) => state.favourites.content);

  useEffect(() => {
    if (artist) {
      dispatch(getMusic(artist));
      console.log(`Caricamento per l'artista: ${artist}`);
    }
  }, [dispatch, artist]);

  return (
    <Container className="my-4">
      <h3>{genre}</h3>
      <Row>
        {songs.length === 0 && <Spinner animation="border" />}
        {songs.map((song) => {
          // Verifica se il brano è nei preferiti usando l'id del brano
          const isInFavourites = favourites.some((fav) => fav.id === song.id);

          return (
            <Col key={song.id} md={3}>
              <div className="col text-center">
                <img
                  onClick={() => handleClick(song.album.cover_xl, song.title)}
                  className="img-fluid"
                  src={song.album.cover_xl}
                  alt="track"
                />
                <p>
                  Track: {song.title}
                  <br />
                  Artist: {song.artist.name}
                </p>
                {isInFavourites ? (
                  <Button
                    variant="light"
                    className="text-danger"
                    onClick={() => {
                      dispatch(noFavouritesSong(song.album.id));
                      console.log(song);
                    }}
                  >
                    <i className="bi bi-heart-fill"></i>
                  </Button>
                ) : (
                  <Button
                    variant="light"
                    className="text-danger"
                    onClick={() => {
                      dispatch(favouritesSong(song));
                      console.log(song);
                    }}
                  >
                    <i className="bi bi-heart"></i>
                  </Button>
                )}
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Album;
