import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

type TTitle = {
  title: string;
  paddingX?: string;
};

function Title({ title, paddingX = "none" }: TTitle) {
  return (
    <TitleWrapper>
      <StyledBox px={paddingX}>
        <h2>{title}</h2>
      </StyledBox>
    </TitleWrapper>
  );
}

const StyledBox = styled(Box)`
  border: 1px solid white;
  width: max-content;
  margin: 1rem 0 1rem 0;
`;

const TitleWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;

export default Title;
