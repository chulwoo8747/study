import React from "react";
import styled from "styled-components";
import { Svg } from "../header";

const BarArea = styled.div`
  height: 657.6px;
  width: 240px;
  border: 1px solid brown;
  position: fixed;
  padding: 12px;
`;

const BarItem = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #cccccc;
  justify-content: center;
`;

const HomeButton = styled.div`
  width: 100%;
  height: 40px;
  padding: 12px;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: flex;
  :hover {
    border-radius: 10px;
    background-color: #f0f0f0;
  }
`;

const ContentList = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #cccccc;
  justify-content: center;
`;

const TextOver = styled.div`
  width: 65%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Bar = () => {
  return (
    <BarArea>
      <BarItem>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M4,10V21h6V15h4v6h6V10L12,3Z" />
          </Svg>
          홈
        </HomeButton>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" />
          </Svg>
          Shorts
        </HomeButton>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z" />
          </Svg>
          구독
        </HomeButton>
      </BarItem>
      <ContentList>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z" />
          </Svg>
          보관함
        </HomeButton>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z" />
          </Svg>
          시청 기록
        </HomeButton>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z" />
          </Svg>
          내 동영상
        </HomeButton>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z" />
          </Svg>
          나중에 볼 동영상
        </HomeButton>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" />
          </Svg>
          <TextOver>좋아요 표시한 동영상</TextOver>
        </HomeButton>
      </ContentList>
    </BarArea>
  );
};
export default Bar;
