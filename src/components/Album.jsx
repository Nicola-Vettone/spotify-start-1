import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Spinner, Card, Col } from "react-bootstrap";
import { getMusic } from "../redux/action";

const Album = ({ artist, genre }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.music.content);

  useEffect(() => {
    dispatch(getMusic(artist));
  }, [artist]);

  return (
    <Container className="my-4">
      <h3>{genre} Music</h3>
      <Row>
        {songs.length === 0 && <Spinner animation="border" />}
        {songs.map((song) => (
          <Col key={song.id} md={3}>
            <Card>
              <Card.Img variant="top" src={song.album.cover_xl} />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
                <Card.Text>{song.artist.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Album;
