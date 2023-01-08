import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <div id="contact" className="container mt-5">
        <div className="row">
          <center>
            <h2>Contact us 📱</h2> <HR />
          </center>

          <LeftCol className="col-md-6  ">
            <h3>smit@gmail.com</h3>
            <p className="cont-weight-bold">
              Gulshan Taleem Chok Near Mobile Market
            </p>
          </LeftCol>

          <Col className="col-md-6 ">
            <form>
              <div class="mb-4">
                <input
                  required
                  name="name"
                  placeholder="Name"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-4">
                <input
                  required
                  name="email"
                  placeholder="Email address"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="mb-3">
                <textarea
                  placeholder="Message"
                  required
                  class="form-control"
                  id=""
                  cols="1"
                  name="message"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" class="btn rounded-pill">
                Send
              </button>
            </form>
          </Col>
        </div>
      </div>
    </>
  );
};

export default Contact;

const Col = styled.div`
  margin: 70px 0px;
  @media (max-width: 1170px) {
    padding: 0px 30px;
    margin: 40px 0px;
  }
  input {
    border: 2px solid black;
    /* width:400px; */
    @media (max-width: 1170px) {
      width: 280px;
    }
  }
  textarea {
    border: 2px solid black;
    /* width:00px; */
    @media (max-width: 1170px) {
      width: 280px;
    }
  }
  button {
    background-color: #204658;
    color: white;
    width: 90px;
    font-size: 0.9rem;
    box-shadow: 5px 10px whitesmoke;
    margin: 0px 10px;
    &:hover {
      background-color: #102f3e;
      color: white;
    }
  }
`;

const HR = styled.div`
  margin: 30px 0px;
  border: 4px solid #102f3e;
  font-weight: 600;
  width: 300px;
  @media (max-width: 1170px) {
    width: 200px;
    margin: 25px 40px;
  }
`;

const LeftCol = styled.div`
  padding: 150px 100px;
  @media (max-width: 1170px) {
    padding: 0px 20px;
  }
  h3 {
    font-size: 1.1rem;
    @media (max-width: 1170px) {
      font-size: 1rem;
      margin: 10px 0px;
    }
  }
`;
