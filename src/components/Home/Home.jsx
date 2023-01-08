import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import sec from "../../assets/sec.jpg";
import "./home.css";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <>
      {/* crousel container */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={img2}
                    className="d-block w-100 crouselImg"
                    alt="images"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>WELLCOME SAYLANIMASS IT TRAINING</h5>
                    <p>
                      Saylani Mass IT Training Today is the age of information
                      technology and we aim to equip our youth with computer
                      programming skills.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={img3}
                    className="d-block w-100 crouselImg"
                    alt="images"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>CERTIFICATE DISTRIBUTION SAYLANI MASS IT TRAINING</h5>
                    <p>
                      Saylani Mass IT Training Today is the age of information
                      technology and we aim to equip our youth with computer
                      programming skills.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={img1}
                    className="d-block w-100 crouselImg"
                    alt="images"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>CERTIFICATE DISTRIBUTION SAYLANI MASS IT TRAINING</h5>
                    <p>
                      Saylani Mass IT Training Today is the age of information
                      technology and we aim to equip our youth with computer
                      programming skills.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* crousel container  end*/}

      <div className="container">
        <HomeCard />

        <div className="row secRow">
          <div className="col-md-6 ">
            <img className="secImg" src={sec} alt="" srcset="" />
          </div>
          <div className="col-md-6 secCol2 ">
            <h3>ABOUT ADMISSIONS UPDATES __</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
              tempora. Omnis officia veritatis aliquid quis ut nihil distinctio
              deserunt pariatur fuga, alias dolore animi quasi recusandae
              consectetur qui doloribus accusamus cumque commodi! In modi
              doloremque at totam eligendi delectus voluptates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
