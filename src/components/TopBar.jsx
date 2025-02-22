import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function TopBar() {
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
                    <a className="nav-item nav-link d-flex align-items-center" href="#">
                      <i className="bi bi-house-door-fill"></i>&nbsp; Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center" href="#">
                      <i className="bi bi-book-fill"></i>&nbsp; Your Library
                    </a>
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

                      <Button onClick={console.log(artist)}>Go</Button>
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
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </nav>
      </aside>
    </>
  );
}
export default TopBar;
