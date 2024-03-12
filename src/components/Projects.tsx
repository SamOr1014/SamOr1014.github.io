import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Title from "./common/Title";
import ProjectCard from "./common/ProjectCard";
import nutripodLogo from "../assets/nutripodlogo.png";
import nutripodPDF from "../assets/nutripod.pdf";
import pocketmonLogo from "../assets/pocketmonlogo.png";
import pocketmonPDF from "../assets/pocketmon.pdf";
import walletImg from "../assets/wallet_image.jpg";
import { MediaQueryProps } from "../constants/mediaQueryTypes";
import { useWebMediaQuery } from "../hooks/useMediaQuery";

const ProjectsLayout = () => {
  const {
    smallerThanMDMediaBreakPoint,
    smallerThanXLMediaBreakPoint,
    smallerThanLGMediaBreakPoint,
  } = useWebMediaQuery();

  return (
    <ProjectContainer
      md={smallerThanMDMediaBreakPoint}
      lg={smallerThanLGMediaBreakPoint}
    >
      <Title title={"Projects"} paddingX="1.5rem" />
      <Description
        md={smallerThanMDMediaBreakPoint}
        xl={smallerThanXLMediaBreakPoint}
      >
        These are the group project I have done during my time in Tecky Academy
      </Description>
      <ProjectCardWrapper md={smallerThanMDMediaBreakPoint}>
        <ProjectCard
          title="Nutripod"
          image={nutripodLogo}
          description={`Nutripod is a healthcare react application. It's a platform designed for a clinic that provides nutrition consultation and helps them to manage clients' diet and develop clients' diet habits and lifestyle.`}
          githubLink="https://github.com/SamOr1014/Nutripod"
          previewLink={nutripodPDF}
        />
        <ProjectCard
          title="Pocketmon"
          image={pocketmonLogo}
          description={`Pocketmon is a vanilla JS application that is aimmed to allow users to record their spending by uploading their receipt. An OCR AI will read the price, venue and the date of the receipt and record it in the database as the user's expenses.`}
          githubLink="https://github.com/SamOr1014/Pocketmon"
          previewLink={pocketmonPDF}
          pictureStyling={{
            width: "180px",
            background: "white",
            borderRadius: "10%",
          }}
        />
      </ProjectCardWrapper>
      <Description>These are the individual project</Description>
      <ProjectCardWrapper>
        <ProjectCard
          title="Own wallet"
          image={walletImg}
          description={`A simple expense record app that allow you to record you expenses. Built with NextJS and containerise with docker`}
          githubLink="https://github.com/SamOr1014/own-wallet"
          pictureStyling={{
            width: "180px",
            background: "white",
            borderRadius: "10%",
          }}
        />
      </ProjectCardWrapper>
    </ProjectContainer>
  );
};

const ProjectContainer = styled(Box)<MediaQueryProps>`
  min-height: max-content;
  width: 100%;
  display: grid;
  place-items: center;
  margin-bottom: ${({ md }) => (md ? "3rem" : "10px")};
`;

const ProjectCardWrapper = styled(Box)<MediaQueryProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ md }) => (md ? "center" : "space-between")};
  align-items: center;
  flex-wrap: wrap;
  ${({ md }) => (md ? "gap: 50px" : "")}
  margin: 20px 0px 20px 0px;
  width: 100%;
`;

const Description = styled(Box)<MediaQueryProps>`
  text-align: center;
  font-size: ${({ md, xl }) => (md ? "0.7rem" : xl ? " 0.8rem " : "1.1rem")};
`;

export default ProjectsLayout;
