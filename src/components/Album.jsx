/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Spinner, Col } from "react-bootstrap";
import { getMusic } from "../redux/action";
import { useEffect } from "react";

const Album = ({ artist, genre }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.music.content);

  useEffect(() => {
    dispatch(getMusic(artist));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist]);

  return (
    <Container className="my-4">
      <h3>{genre} Music</h3>
      <Row>
        {songs.length === 0 && <Spinner animation="border" />}
        {songs.map((song) => (
          <Col key={song.id} md={3}>
            <div className="col text-center">
              <img className="img-fluid" src={song.album.cover_xl} alt="track" />
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
