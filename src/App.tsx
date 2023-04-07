import React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";
import LandingView from "./components/LandingView";
import "./style/global.css";
import AboutMe from "./components/AboutMe";
import ProjectsLayout from "./components/Projects";
import { CanvasBackground } from "./components/common/CanvasBackground";

function App() {
  return (
    <StyledContainer maxWidth={"xl"} id="app-container">
      <CanvasBackground id={"moving-canvas"} />
      <LandingView />
      <AboutMe />
      <ProjectsLayout />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
