import React from "react";
import styled from "styled-components";
const FooterArea = styled.div`
  background: #f2f2f2;
`;

const Country = styled.div`
  padding: 15px 30px;
  border-bottom: 1px solid #dadce0;
  font-size: 15px;
  color: #70757a;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 0;
`;

const Information = styled.div`
  padding: 15px 30px;
  color: #70757a;
`;

const TermsSettings = styled.div`
  padding: 15px 0;
  color: #70757a;
`;

const Advertisement = styled.span`
  padding: 15px 15px 15px 0;
`;

const Business = styled.span`
  padding: 15px;
`;

const Footer = () => {
  return (
    <FooterArea>
      <Country>대한민국</Country>
      <FooterBottom>
        <Information>
          <Advertisement>
            <a
              id="footer"
              href="https://www.google.com/intl/ko_kr/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
            >
              광고
            </a>
          </Advertisement>
          <Business>
            <a
              id="footer"
              href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"
            >
              비즈니스
            </a>
          </Business>
          <Business>
            <a
              id="footer"
              href="https://google.com/search/howsearchworks/?fg=1"
            >
              검색의 원리
            </a>
          </Business>
        </Information>
        <TermsSettings>
          <Advertisement>
            <a
              id="footer"
              href="https://policies.google.com/privacy?hl=ko&fg=1"
            >
              개인정보처리방침
            </a>
          </Advertisement>
          <Business>
            <a id="footer" href="https://policies.google.com/terms?hl=ko&fg=1">
              약관
            </a>
          </Business>
          <Business>
            <a id="footer" href="">
              설정
            </a>
          </Business>
        </TermsSettings>
      </FooterBottom>
    </FooterArea>
  );
};

export default Footer;
