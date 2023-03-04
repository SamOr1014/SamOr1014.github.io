import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Title from "./common/Title";

const ProjectsLayout = () => {
  return (
    <ProjectContainer>
      <Title title={"Projects"} />
    </ProjectContainer>
  );
};

const ProjectContainer = styled(Box)`
  height: 100vh;
  padding: 2vw;
  width: 100%;
`;

export default ProjectsLayout;
