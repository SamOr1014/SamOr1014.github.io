import { Avatar, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import pic from "../assets/IMG_8288.jpg";
import { useWebMediaQuery } from "../hooks/useMediaQuery";
import Title from "./common/Title";
import { MediaQueryProps } from "../types/mediaQueryTypes";

function AboutMe() {
  const { smallerThanMDMediaBreakPoint, smallerThanXLMediaBreakPoint } =
    useWebMediaQuery();
  return (
    <AboutMeContainer>
      <Title title="About Me" paddingX="1.5rem" />
      <FlexWrapper>
        <Avatar
          src={pic}
          sx={{
            width: smallerThanMDMediaBreakPoint ? 350 : 500,
            height: smallerThanMDMediaBreakPoint ? 350 : 500,
          }}
        />
        <AboutMeWrapper
          md={smallerThanMDMediaBreakPoint}
          xl={smallerThanXLMediaBreakPoint}
        >
          <div>
            <p>
              Greetings ! I'm Sam. I am a nutrition degree graduate who became a
              web programmer. I'm passionate and wish to learn every aspect of
              web development👨🏽‍💻
            </p>
          </div>
        </AboutMeWrapper>
      </FlexWrapper>
    </AboutMeContainer>
  );
}

const AboutMeContainer = styled(Box)`
  height: 100vh;
  padding: 2vw;
  width: 100%;
`;
const FlexWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;
const AboutMeWrapper = styled(Box)<MediaQueryProps>`
  max-width: 700px;
  display: flex;
  align-items: center;
  font-size: ${({ md, xl }) => (md ? "1.3rem" : xl ? " 1.5rem " : "2rem")};
`;

export default AboutMe;
