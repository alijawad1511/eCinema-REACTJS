import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";

const Home = () => {

  return (
    <>
      <header className="d-flex flex-column justify-content-center align-items-left px-5">
        <h2 className="font-weight-bold display-4 text-white">eCinema</h2>
        <h4 className="text-white">Search and Watch your favourite movies</h4>
      </header>
      <div className="movie_container pb-5">
        <div className="bg-light top_rated_movies mb-5">
          <h3 className="text-white text-center bg-primary py-3 px-2 font-weight-bold">
            TOP RATED MOVIES
          </h3>
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  id="myCarousel1"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img1} alt="Movie" className="d-block w-75 mx-auto" />
                      <div class="carousel-caption d-none d-md-block">
                        <h2>Spiderman</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img2} alt="Movie" className="d-block w-75 mx-auto" />
                      <div class="carousel-caption d-none d-md-block">
                        <h2>Spiderman 2</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img3} alt="Movie" className="d-block w-75 mx-auto" />
                      <div class="carousel-caption d-none d-md-block">
                        <h2>Spiderman 3</h2>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#myCarousel1"
                    className="carousel-control-prev"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    href="#myCarousel1"
                    className="carousel-control-next"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light latest_movies mb-5">
          <h3 className="text-white text-center bg-primary py-3 px-2 font-weight-bold">
            LATEST MOVIES
          </h3>
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  id="myCarousel2"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img4} alt="Movie" className="d-block w-75 mx-auto" />
                      <div class="carousel-caption d-none d-md-block">
                        <h2>Avengers Endgame</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img5} alt="Movie" className="d-block w-75 mx-auto" />
                      <div class="carousel-caption d-none d-md-block">
                        <h2>Captain Americal : Civil War</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img6} alt="Movie" className="d-block w-75 mx-auto" />
                      <div class="carousel-caption d-none d-md-block">
                        <h2>Captain Americal</h2>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#myCarousel2"
                    className="carousel-control-prev"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    href="#myCarousel2"
                    className="carousel-control-next"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light upcomming_movies mb-5">
          <h3 className="text-white text-center bg-primary py-3 px-2 font-weight-bold">
            UPCOMMING MOVIES
          </h3>
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  id="myCarousel3"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img7} alt="Movie" className="d-block w-75 mx-auto" />
                      <div class="carousel-caption d-none d-md-block">
                        <h2>How to Train your Dragon</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img8} alt="Movie" className="d-block w-75 mx-auto" />
                      <div class="carousel-caption d-none d-md-block">
                        <h2>Kungfu Panda</h2>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src={img9} alt="Movie" className="d-block w-75 mx-auto" />
                      <div class="carousel-caption d-none d-md-block">
                        <h2>Ben 10</h2>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#myCarousel3"
                    className="carousel-control-prev"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    href="#myCarousel3"
                    className="carousel-control-next"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
