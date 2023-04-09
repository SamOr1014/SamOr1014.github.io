import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useWebMediaQuery } from "../hooks/useMediaQuery";
import { MediaQueryProps } from "../constants/mediaQueryTypes";
import { SocialPlatformsButtons } from "./SocialPlatformsButtons";

function LandingView() {
  const { smallerThanMDMediaBreakPoint, smallerThanXLMediaBreakPoint } =
    useWebMediaQuery();
  return (
    <StyledBox
      md={smallerThanMDMediaBreakPoint}
      xl={smallerThanXLMediaBreakPoint}
    >
      <WelcomeTextDiv
        id={"welcomeTextDiv"}
        md={smallerThanMDMediaBreakPoint}
        xl={smallerThanXLMediaBreakPoint}
      >
        <h2>Welcome!!!!</h2>
        <p>
          I'm <span>Sam OR</span>
        </p>
        <p>A Full Stack Web Developer</p>
        <SocialPlatformsButtons />
      </WelcomeTextDiv>
    </StyledBox>
  );
}

const StyledBox = styled(Box)<MediaQueryProps>`
  font-size: ${({ md, xl }) => (md ? "2rem" : xl ? " 2.5rem " : "3rem")};
  height: 100vh;
  width: 100%;
  display: grid;
  flex-wrap: wrap;
  place-items: center;
`;
const WelcomeTextDiv = styled.div<MediaQueryProps>`
  text-align: center; //${({ md }) => (md ? "center" : "justify")};
  > h2,
  p {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  > p > span {
    font-size: 5rem;
    background: linear-gradient(-45deg, #6bc5f8, #cf59e6, #6bc5f8, #cf59e6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400% 400%;
    -webkit-animation: gradient 3s ease infinite;
    animation: gradient 3s ease infinite;
  }
`;

export default LandingView;
