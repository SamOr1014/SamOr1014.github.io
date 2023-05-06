import React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";
import LandingView from "./components/LandingView";
import "./style/global.css";
import AboutMe from "./components/AboutMe";
import ProjectsLayout from "./components/Projects";

function App() {
  return (
    <StyledContainer maxWidth={false} id="app-container">
      <LandingView />
      <AboutMe />
      <ProjectsLayout />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled(Container)`
  height: auto;
  display: flex;
  flex-direction: column;
  min-width: min-content;
  align-items: center;
  position: relative;
`;
