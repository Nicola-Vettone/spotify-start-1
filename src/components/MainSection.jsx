/* eslint-disable react/prop-types */
import Album from "./Album";

function MainSection({ artist, genre }) {
  return (
    <>
      <main className="col-12 col-md-9 offset-md-3 mainPage">
        <div className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
        </div>

        {artist && genre && <Album artist={artist} genre={genre} />}
        <Album artist="eminem" genre="Rap " />
        <Album artist="queen" genre="Pop " />
        <Album artist="nirvana" genre="Rock" />
      </main>
    </>
  );
}
export default MainSection;
