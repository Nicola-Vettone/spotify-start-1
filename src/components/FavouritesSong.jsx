import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

import { favouritesSong, noFavouritesSong } from "../redux/action";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites?.content);
  const dispatch = useDispatch();
  function handleClick(image, title) {
    dispatch({ type: "PLAYER_MUSIC", payload: { image, title } });
  }
  return (
    <>
      {favourites && (
        <Container>
          <Row>
            <Col xs={10} className="mx-auto my-3">
              <h1 className="display-1">Favourites</h1>
            </Col>

            <Col xs={10} className="mx-auto mb-5">
              {favourites.length > 0 ? (
                favourites.map((song) => (
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
                      <Button
                        variant="light"
                        className="text-danger"
                        onClick={() => {
                          dispatch(noFavouritesSong(song.album.id));
                          console.log(song);
                        }}
                      >
                        <i className="bi bi-heart"></i>
                      </Button>
                    </div>
                  </Col>
                ))
              ) : (
                <>
                  <Alert variant="warning">Non ci sono preferiti</Alert>
                </>
              )}
              <Link to="/">Vai a homepage</Link>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Favourites;
