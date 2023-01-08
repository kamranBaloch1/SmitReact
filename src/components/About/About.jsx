import React from "react";
import aboutImg from "../../assets/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img className="aboutImg" src={aboutImg} alt="about" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row aboutRow">
          <div className="col-md-12 mx-auto">
            <center>
              <h2 className="aboutTitle">SAYLANI MASS IT TRAINING</h2>
              <p className="aboutInfo">
                Saylani Mass IT Training Today is the age of information
                technology and we aim to equip our youth with computer
                programming skills and prepare them for the development of the
                country. In this regard, our Saylani Mass IT Training Program
                providing vocational training to more than 75,000 students in
                Web and Mobile Application Development, CCNA, Graphics
                Designing, Computer Based Accounting in Karachi, Hyderabad,
                Faisalabad, Islamabad. Our goal is to develop more than 1
                million software developers across the country, which will add
                about $100 billion annually to Pakistan's economy.
              </p>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
