import React from "react";
import styled from "styled-components";

const FooterSection = () => {
  return (
    <>
      <Container className="container-fluid  mt-5">
      </Container>
    </>
  );
};

export default FooterSection;

const Container = styled.div`
       background-color:#102f3e;
       width: 200%;
       transform: translateX(-45%);
       height: 200px;
       border-radius: 50% 50% 0 0;
       @media(max-width: 1170px){
        width: 135%;
        height: 150px;
        transform: translateX(-25%);
       }
  `