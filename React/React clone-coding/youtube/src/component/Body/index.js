import React from "react";
import styled from "styled-components";
import Nav from "../Nav";
import Bar from "../bar";
import Content from "../content";

const BodyArea = styled.div`
  width: 100%;
  height: 656px;
  display: flex;
  border: 1px solid red;
  margin-top: 56px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #217af4; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;

const LeftRight = styled.div`
  width: 100%;
  margin-left: 240px;
`;

const Body = () => {
  return (
    <BodyArea>
      <Bar />
      <LeftRight>
        <Nav />
        <Content />
      </LeftRight>
    </BodyArea>
  );
};
export default Body;
