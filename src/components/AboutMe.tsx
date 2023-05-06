import { Avatar, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import pic from "../assets/IMG_8288.jpg";
import { useWebMediaQuery } from "../hooks/useMediaQuery";
import Title from "./common/Title";
import { MediaQueryProps } from "../constants/mediaQueryTypes";
import nodeLogo from "../assets/nodeLogo.png";
import reactLogo from "../assets/reactLogo.png";
import tsLogo from "../assets/tsLogo.png";
import postgresLogo from "../assets/postgresLogo.png";
import mongoLogo from "../assets/mongoLogo.png";
import MainTechStack from "./common/ListOfAvatar";

function AboutMe() {
  const { smallerThanMDMediaBreakPoint, smallerThanXLMediaBreakPoint } =
    useWebMediaQuery();
  return (
    <AboutMeContainer>
      <div>
        <Title title="About Me" paddingX="1.5rem" />
        <FlexWrapper>
          <Avatar
            alt="my profile picture"
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
                Greetings ! I'm Sam. I am a nutrition degree graduate who became
                a web developer. I'm passionate and wish to learn every aspect
                of web development👨🏽‍💻
              </p>
              <SubTitle>Main Tech Stacks</SubTitle>
              <MainTechStack
                images={[reactLogo, nodeLogo, tsLogo, postgresLogo, mongoLogo]}
              />
            </div>
          </AboutMeWrapper>
        </FlexWrapper>
      </div>
    </AboutMeContainer>
  );
}

const AboutMeContainer = styled(Box)`
  height: max-content;
  width: 100%;
  display: grid;
  place-items: center;
`;
const FlexWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  gap: 20px;
`;
const AboutMeWrapper = styled(Box)<MediaQueryProps>`
  max-width: 700px;
  display: flex;
  align-items: center;
  font-size: ${({ md, xl }) => (md ? "1.2rem" : xl ? " 1.5rem " : "1.8rem")};
`;
const SubTitle = styled.h6`
  text-align: center;
`;

export default AboutMe;
