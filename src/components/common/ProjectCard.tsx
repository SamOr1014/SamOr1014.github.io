import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import * as React from "react";
import { useWebMediaQuery } from "../../hooks/useMediaQuery";

type ProjectCardProps = {
  title: string;
  titleAction?: React.ReactNode;
  image: string;
  description?: string;
  githubLink?: string;
  previewLink?: string;
  pictureStyling?: React.CSSProperties;
};

const ProjectCard = ({
  image,
  description,
  title,
  githubLink,
  previewLink,
  pictureStyling,
}: ProjectCardProps) => {
  const { smallerThanMDMediaBreakPoint } = useWebMediaQuery();

  const OpenLinkInANewTab = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <StyledCard md={smallerThanMDMediaBreakPoint}>
      <StyledCardHeader title={title} />
      <StyledMediaDiv>
        <img
          src={image}
          style={{ ...pictureStyling, height: "180px", objectFit: "contain" }}
        ></img>
      </StyledMediaDiv>
      <CardContent>
        <Typography variant="body2">{description}</Typography>
        <ButtonGroupDiv>
          {githubLink && (
            <LinkButton
              startIcon={<GitHub />}
              onClick={() => {
                OpenLinkInANewTab(githubLink);
              }}
            >
              GitHub Link
            </LinkButton>
          )}
          {previewLink && (
            <LinkButton
              startIcon={<GitHub />}
              onClick={() => {
                OpenLinkInANewTab(previewLink);
              }}
            >
              Portfolio
            </LinkButton>
          )}
        </ButtonGroupDiv>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)<{ md: boolean }>`
  width: ${({ md }) => (md ? "300px" : "350px")};
  min-height: 200px;
  border-radius: 30%;
  padding: 20px;
  background: #141420;
  box-shadow: 0 0 0.5rem 0.5rem #1a1a2e;
  border-radius: 12%;
  color: white;
  margin: 20px;
`;

const StyledCardHeader = styled(CardHeader)`
  text-align: center;
`;

const StyledMediaDiv = styled("div")`
  width: 100%;
  display: grid;
  place-items: center;
`;

const LinkButton = styled(Button)`
  margin-top: 15px;
  color: white;
  &:hover {
    box-shadow: none;
  }
`;

const ButtonGroupDiv = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default ProjectCard;
