import React from "react";
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

const ContentVideo = styled.div`
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
  return (
    <ContentArea>
      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>
      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>
      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>
      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>

      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>
      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>
      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>
      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>

      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>
      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>
      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>
      <ContentBox>
        <ContentVideo />
        <Div>
          <ContentProfile />
          <ContentTitle>제목입니다.</ContentTitle>
        </Div>

        <ContentInformation>
          <ContentCreator>ContentCreator</ContentCreator>
          <Div>
            조회수 1회
            <ContentPosted>1일전</ContentPosted>
          </Div>
        </ContentInformation>
      </ContentBox>
    </ContentArea>
  );
};
export default Content;
