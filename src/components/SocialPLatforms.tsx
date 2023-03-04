import React from "react";
import { Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { GitHub } from "@mui/icons-material";
import { useWebMediaQuery } from "../hooks/useMediaQuery";

const SocialPlatforms = () => {
  const { smallerThanMDMediaBreakPoint } = useWebMediaQuery();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={"center"}
      spacing={smallerThanMDMediaBreakPoint ? 4 : 10}
    >
      <IconButton
        color="primary"
        aria-label="Linkedin"
        size="large"
        href="https://www.linkedin.com/in/chamsumor"
        target="_blank"
      >
        <LinkedInIcon
          sx={{
            fontSize: "3.5rem",
          }}
        />
      </IconButton>
      <IconButton
        color="info"
        aria-label="Github"
        size="large"
        href="https://github.com/SamOr1014"
        target="_blank"
      >
        <GitHub
          sx={{
            fontSize: "3.5rem",
            color: "white",
          }}
        />
      </IconButton>
      <IconButton
        color="info"
        aria-label="Github"
        size="large"
        href="mailto:orchamsumsam1014@gmail.com"
        target="_blank"
      >
        <ContactMailIcon
          sx={{
            fontSize: "3.5rem",
            color: "#ec1456",
          }}
        />
      </IconButton>
    </Stack>
  );
};

export default SocialPlatforms;
