import React from "react";
import styled from "styled-components";

const NavArea = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid green;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  background-color: white;
`;

const NavBox = styled.button`
  min-width: 13px;
  height: 32px;
  border-radius: 8px;
  background-color: #f2f2f2;
  text-align: center;
  padding-top: 5px;
  border: none;
  margin: 12px 12px 12px 0;
  padding: 0 12px;
`;

const Nav = () => {
  return (
    <NavArea>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
      <NavBox>주제</NavBox>
    </NavArea>
  );
};
export default Nav;
