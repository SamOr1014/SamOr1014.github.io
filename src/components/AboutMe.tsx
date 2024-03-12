import { Avatar, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import pic from "../assets/IMG_8288.jpg";
import { useWebMediaQuery } from "../hooks/useMediaQuery";
import Title from "./common/Title";
import { MediaQueryProps } from "../constants/mediaQueryTypes";
import nodeLogo from "../assets/nodelogo.png";
import reactLogo from "../assets/reactlogo.png";
import tsLogo from "../assets/tslogo.png";
import postgresLogo from "../assets/postgreslogo.png";
import mongoLogo from "../assets/mongologo.png";
import MainTechStack from "./common/ListOfAvatar";

function AboutMe() {
  const {
    smallerThanMDMediaBreakPoint,
    smallerThanXLMediaBreakPoint,
    smallerThanLGMediaBreakPoint,
  } = useWebMediaQuery();
  return (
    <AboutMeContainer
      md={smallerThanMDMediaBreakPoint}
      lg={smallerThanLGMediaBreakPoint}
    >
      <div>
        <Title title="About Me" paddingX="1.5rem" />
        <FlexWrapper>
          <AvatarWrapper>
            <Avatar
              alt="my profile picture"
              src={pic}
              sx={{
                width: smallerThanMDMediaBreakPoint ? 350 : 500,
                height: smallerThanMDMediaBreakPoint ? 350 : 500,
              }}
            />
          </AvatarWrapper>
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
              <p>
                I joined a web development course at{" "}
                <a href="https://tecky.io/en/">Tecky Academy</a> in June 2022,
                and I was working at a digit media company in Hong Kong as a
                Software Engineer (10/2022 - present, currently working
                remotely).
              </p>
              <p>
                I have recently moved to the UK and open to work opportunities
                (as of March 2024)!
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

const AboutMeContainer = styled(Box)<MediaQueryProps>`
  height: max-content;
  width: 100%;
  display: grid;
  place-items: center;
  margin-bottom: ${({ lg }) => (lg ? "3rem" : "1rem")};
`;
const FlexWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  gap: 50px;
`;
const AboutMeWrapper = styled(Box)<MediaQueryProps>`
  max-width: 700px;
  display: flex;
  align-items: center;
  font-size: ${({ md, xl }) => (md ? "1rem" : xl ? " 1.3rem " : "1.5rem")};
`;
const AvatarWrapper = styled(Box)`
  display: grid;
  place-items: center;
`;
const SubTitle = styled.h6`
  text-align: center;
`;

export default AboutMe;
