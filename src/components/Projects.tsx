import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Title from "./common/Title";
import ProjectCard from "./common/ProjectCard";
import nutripodLogo from "../assets/nutripodlogo.png";
import nutripodPDF from "../assets/nutripod.pdf";
import pocketmonLogo from "../assets/pocketmonlogo.png";
import pocketmonPDF from "../assets/pocketmon.pdf";

const ProjectsLayout = () => {
  return (
    <ProjectContainer>
      <div>
        <Title title={"Projects"} paddingX="1.5rem" />
        <ProjectCardWrapper>
          <ProjectCard
            title="Nutripod"
            image={nutripodLogo}
            description={`Nutripod is a healthcare web react application. It's a platform designed for a clinic that provides nutrition consultation and helps them to manage clients' diet and develop clients' diet habits and lifestyle.`}
            githubLink="https://github.com/SamOr1014/Nutripod"
            previewLink={nutripodPDF}
          />
          <ProjectCard
            title="Pocketmon"
            image={pocketmonLogo}
            description={`Pocketmon is a web application that is aimmed to allow users to record their spending by uploading their receipt. An OCR AI will read the price, venue and the date of the receipt and record it in the database as the user's expenses.`}
            githubLink="https://github.com/SamOr1014/Pocketmon"
            previewLink={pocketmonPDF}
            pictureStyling={{
              width: "180px",
              background: "white",
              borderRadius: "10%",
            }}
          />
        </ProjectCardWrapper>
      </div>
    </ProjectContainer>
  );
};

const ProjectContainer = styled(Box)`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

const ProjectCardWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px;
`;

export default ProjectsLayout;
