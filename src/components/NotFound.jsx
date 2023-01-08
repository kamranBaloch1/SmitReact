import React from "react";
import styled from "styled-components";
import { TfiFaceSad } from "react-icons/tfi";
import {Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <>
      <Container className="container ">
        <div className="row">
          <Col className="col-md-5 mx-auto ">
            <section>
              <span>Sorry Page Not Found</span>
            </section>

            <div>
              {/* //logo */}
              <TfiFaceSad color="red" className="mt-4 mb-3" size={50} />
              <br />
              <Link  to="/">Go to Home Page</Link>
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
};

export default PageNotFound;

const Container = styled.div`
  margin: 100px 0px 0px 0px;
  padding-left: 200px;
  @media (max-width: 768px) {
    padding-left: 0px;
    padding: 50px;
    margin: 0px 0px 0px 0px;
  }
`;

const Col = styled.div`
  box-shadow: 0px 10px 8px 10px #c4c1c1;
  height: 40vh;
  margin-top: 30px;
  section {
    background-color: red;
    padding: 10px 20px;
    font-weight: 600;
    margin-top: 10px;
    color: white;
  }
  div {
    text-align: center;
    margin-top: 40px;
    a {
      text-decoration: underline;
      color: black;
      font-weight: bold;
    }
  }
`;
