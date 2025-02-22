/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Spinner, Col } from "react-bootstrap";
import { getMusic } from "../redux/action";
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

  console.log(songs);
  useEffect(() => {
    dispatch(getMusic(artist));
    console.log(`Caricamento per l'artista: ${artist}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, artist]);
  console.log(songs);

  return (
    <Container className="my-4">
      <h3>{genre} Music</h3>
      <Row>
        {songs.length === 0 && <Spinner animation="border" />}
        {songs.map((song) => (
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
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Album;
