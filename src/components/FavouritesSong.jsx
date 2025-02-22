import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

import { noFavouritesSong } from "../redux/action";

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
              <h1 className="display-1 text-white">I tuoi brani preferiti</h1>
            </Col>
            <Col xs={10} className="mx-auto mb-5 d-flex gap-4 flex-wrap">
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
                      <p className="text-white">
                        Track: {song.title}
                        <br />
                        Artist: {song.artist.name}
                      </p>
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
                    </div>
                  </Col>
                ))
              ) : (
                <>
                  <Alert variant="warning" className="w-100 text-center">
                    Al momento non hai nessun brano preferito!
                  </Alert>
                </>
              )}
            </Col>
            <Container className="d-flex justify-content-center">
              <Link className="btn btn-success" to="/">
                Ritorna alla Home
              </Link>
            </Container>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Favourites;
