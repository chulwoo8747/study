import React from "react";
import styled, { css } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import Tia from "../../assets/icons/Tia.png";
import Picture from "../../assets/icons/profile.jpg";
import { ImYoutube2 } from "react-icons/im";
import { useState } from "react";

const HeaderArea = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  border-bottom: 1px solid;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 0 16px;
`;
const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderSearch = styled.div`
  display: flex;
  height: 40px;
`;

const HeaderProfile = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :hover {
  }
`;

const Menu = styled.span`
  width: 40px;
  height: 40px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.svg`
  width: 90px;
  height: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  background: #fff;
  border: 1px solid #cccccc;
  border-radius: 24px 0 0 24px;
  margin: 0 auto;
  width: 519px;
  align-items: center;
  padding: 0 8px 0 16px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 488px;
  height: 24px;
  font-size: 16px;
`;

const Keybord = styled.span`
  width: 19px;
  height: 11px;
  display: flex;
  align-items: center;
`;

const SerchIcon = styled.button`
  border-radius: 0 24px 24px 0;
  border: 1px solid #d3d3d3;
  background-color: var;
  width: 64px;
  display: block;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;

const Mic = styled.div`
  width: 35px;
  height: 35px;
  margin: auto 0 auto 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const YoutubeLogo = styled(ImYoutube2)`
  width: 90px;
  height: 20px;
`;

const VideoProduction = styled.div``;

const Header = () => {
  return (
    <HeaderArea>
      <HeaderLogo>
        <Menu id="icontuch">
          <Svg viewBox="0 0 24 24" width={20} focusable="false">
            <path
              d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
              class="style-scope yt-icon"
            />
          </Svg>
        </Menu>
        <YoutubeLogo>
          <ImYoutube2 />
        </YoutubeLogo>
      </HeaderLogo>
      <HeaderSearch>
        <SearchBox>
          <Input placeholder="검색" />
          <Keybord>
            <img src={Tia} />
          </Keybord>
        </SearchBox>
        <SerchIcon>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" />
          </Svg>
        </SerchIcon>
        <Mic title="fadfsaf" id="icontuch">
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z" />
          </Svg>
        </Mic>
      </HeaderSearch>
      <HeaderProfile>
        <VideoProduction>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z" />
          </Svg>
        </VideoProduction>
        <Svg viewBox="0 0 24 24" focusable="false">
          <path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" />
        </Svg>
        <Profile src={Picture} />
      </HeaderProfile>
    </HeaderArea>
  );
};
export default Header;
