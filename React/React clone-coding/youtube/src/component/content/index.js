import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ContentArea = styled.div`
  width: 100%;
  border: 1px solid blue;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  display: grid;
  margin-top: 80px;
`;

const ContentBox = styled.div`
  width: 295px;
  height: 264px;
  border: 1px soild pink;
  margin-left: 12px;
`;

const ContentVideo = styled.img`
  width: 291px;
  height: 164px;
  border: 1px solid;
  background-color: red;
  border-radius: 12px;
`;

const ContentProfile = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid blue;
`;

const ContentTitle = styled.div`
  width: 220px;
  height: 40px;
  margin-left: 10px;
  font-family: "Roboto", "Arial", sans-serif;
`;

const ContentPosted = styled.div`
  content: "•";
  margin: 0 4px;
`;

const ContentCreator = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentInformation = styled.div`
  width: 219px;
  height: 36px;
  display: flex;
  flex-direction: column;
  margin-left: 46px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const Content = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            part: "snippet",
            maxResults: 100,
            q: "Korea",
            type: "video",
            key: process.env.REACT_APP_API_KEY,
          },
        })
        .then((res) => {
          setVideos(res.data.items);
        });
    };
    fetchData();
  }, []);

  return (
    <ContentArea>
      {videos.map((video) => {
        console.log(video);
        return (
          <ContentBox key={video.id.videold}>
            <ContentVideo
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <Div>
              <ContentProfile />
              <ContentTitle>{video.snippet.title}</ContentTitle>
            </Div>
            <ContentInformation>
              <ContentCreator>{video.snippet.channelTitle}</ContentCreator>
              <Div>
                조회수 1회
                <ContentPosted>1일전</ContentPosted>
              </Div>
            </ContentInformation>
          </ContentBox>
        );
      })}
    </ContentArea>
  );
};
export default Content;
