function TopBar() {
  return (
    <>
      <aside class="col col-2">
        <nav class="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <div class="container flex-column align-items-start">
            <a class="navbar-brand" href="index.html">
              <img src="assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <ul>
                  <li>
                    <a class="nav-item nav-link d-flex align-items-center" href="#">
                      <i class="bi bi-house-door-fill"></i>&nbsp; Home
                    </a>
                  </li>
                  <li>
                    <a class="nav-item nav-link d-flex align-items-center" href="#">
                      <i class="bi bi-book-fill"></i>&nbsp; Your Library
                    </a>
                  </li>
                  <li>
                    <div class="input-group mt-3">
                      <input type="text" class="form-control" placeholder="Search" aria-label="Search" />
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary btn-sm h-100">GO</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="nav-btn">
            <button class="btn signup-btn" type="button">
              Sign Up
            </button>
            <button class="btn login-btn" type="button">
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
