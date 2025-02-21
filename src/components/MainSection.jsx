import Album from "./Album";

function MainSection() {
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

        <Album artist="eminem" genre="Rock Classics" />
        <Album artist="queen" genre="Pop classic" />
        {/* <Album artist="tedua" genre="Rap" /> */}
      </main>
    </>
  );
}
export default MainSection;
