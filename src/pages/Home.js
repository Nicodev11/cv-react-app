import React from "react";
import styled from "styled-components/macro";

const Home = () => {
  return (
    <Wrapper>
      <Left>
        <Title>
          SPORT
        </Title>
      </Left>
      <Right>
        <Title>
          DÉVELOPPEMENT WEB
        </Title>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  gap: 10px;
`;

const Left = styled.div`
  position: relative;
  background-image: url("./img/Nicolas-volley.jpg");
  filter: brightness(30%);
  cursor: pointer;
  transition: 2s ease;

  &:hover {
    filter: brightness(100%);
    transition: 2s ease;
  }
`;

const Right = styled.div`
  position: relative;
  background: red;
  cursor: pointer;
  filter: brightness(30%);
  transition: 2s ease;

  &:hover {
    filter: brightness(100%);
    transition: 2s ease;
  }
`;

const Title = styled.h2`
  position: absolute;
  z-index: 2;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

export default Home;
