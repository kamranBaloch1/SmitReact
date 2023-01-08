import React from "react";
import { GiTeacher } from "react-icons/gi";
import { SiUdemy } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import styled from "styled-components"
import "./home.css"

const HomeCard = () => {
  return (
    <>
      <div className="container containe mt-5">
        <Row className="row homeCardDivs">
          <Col className="col-md-3">
            <GiTeacher  className="homeCardIcon"/>
            <h2>SKILLED INSTRUCTORS</h2>

            <p>
              his is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer
            </p>
          </Col>
          <Col className="col-md-3">
            <SiUdemy  className="homeCardIcon"/>
            <h2>ONLINE TUTORIALS</h2>

            <p>
              his is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer
            </p>
          </Col>
          <Col className="col-md-3">
            <GrProjects  className="homeCardIcon"/>
            <h2>HOME PROJECTS</h2>

            <p>
              his is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomeCard;

const Row = styled.div`
   @media (max-width: 768px){
          padding: 20px;
        }
`;

const Col = styled.div`
       
        box-shadow:2px 2px 2px 2px black;
        text-align: center;
        padding: 20px 10px;
        margin-left:30px;
        @media (max-width: 768px){
          margin-left:0px;
          box-shadow:1px 1px 1px 1px silver;
          margin-top:20px;
        }
        
        h2{
            font-size:1.3rem;
            margin-top:10px;
            font-weight:600;
          
        }
        p{
            font-size:0.9rem;
            margin-top:10px;
            color: black;

            font-weight:500;
            
          
        }
`;