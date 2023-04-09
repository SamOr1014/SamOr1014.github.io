import React from "react";
import { Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { GitHub } from "@mui/icons-material";
import { useWebMediaQuery } from "../hooks/useMediaQuery";
import { CustomIconButton } from "./common/CustomIconButton";
import { SocialContactEnum } from "../constants/socialContactEnum";

export const SocialPlatformsButtons = () => {
  const { smallerThanMDMediaBreakPoint } = useWebMediaQuery();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={"center"}
      spacing={smallerThanMDMediaBreakPoint ? 4 : 10}
    >
      <CustomIconButton
        color="primary"
        ariaLabel="Linkedin"
        size="large"
        href={SocialContactEnum.LINKEDIN}
        target="_blank"
        icon={
          <LinkedInIcon
            sx={{
              fontSize: "3.5rem",
            }}
          />
        }
      />
      <CustomIconButton
        color="info"
        ariaLabel="Github"
        size="large"
        href={SocialContactEnum.GITHUB}
        target="_blank"
        icon={
          <GitHub
            sx={{
              fontSize: "3.5rem",
              color: "white",
            }}
          />
        }
      />

      <CustomIconButton
        color="info"
        ariaLabel="Email"
        size="large"
        href={SocialContactEnum.MAIL}
        target="_blank"
        icon={
          <ContactMailIcon
            sx={{
              fontSize: "3.5rem",
              color: "#ec1456",
            }}
          />
        }
      />
    </Stack>
  );
};
