import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { Link } from "react-router";
import MainSection from "./MainSection";

function TopBar() {
  const [artist, setArtist] = useState("");
  const [search, setSearch] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(artist); // Imposta l'artista da cercare
  };

  return (
    <>
      <aside className="col col-2">
        <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <div className="container flex-column align-items-start">
            <a className="navbar-brand" href="index.html">
              <img src="assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <Link to={"/"} className="nav-item nav-link d-flex align-items-center" href="#">
                      <i className="bi bi-house-door-fill"></i>&nbsp; Home
                    </Link>
                  </li>
                  <li>
                    <Link to={"/favourites"} className="nav-item nav-link d-flex align-items-center" href="#">
                      <i className="bi bi-book-fill"></i>&nbsp; Your Library
                    </Link>
                  </li>
                  <li>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Cerca il tuo artista preferito"
                          value={artist}
                          onChange={(e) => setArtist(e.target.value)}
                        />
                      </Form.Group>

                      <Button type="submit">Go</Button>
                    </Form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-btn">
            <button className="btn signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn login-btn" type="button">
              Login
            </button>
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </nav>
      </aside>

      {/* Mostra i risultati solo se c'è una ricerca */}
      {<MainSection artist={search} genre="La tua ricerca" />}
      {/* {search && <Album artist={search} genre="La tua ricerca" />} */}
    </>
  );
}

export default TopBar;
