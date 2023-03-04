import React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";
import LandingView from "./components/LandingView";
import "./style/global.css";
import AboutMe from "./components/AboutMe";
import ProjectsLayout from "./components/Projects";

function App() {
  return (
    <StyledContainer maxWidth={"xl"}>
      <LandingView />
      <AboutMe />
      <ProjectsLayout />
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled(Container)`
  height: 100vh;
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
