import { IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface IconButtonsProps {
  color:
    | "default"
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  ariaLabel?: string;
  size: "small" | "medium" | "large";
  href: string;
  target: string;
  icon: React.ReactNode;
}

export const CustomIconButton = (props: IconButtonsProps) => {
  return (
    <ButtonWrapper>
      <IconButton
        color={props.color}
        aria-label={props.ariaLabel}
        size={props.size}
        href={props.href}
        target={props.target}
      >
        {props.icon}
      </IconButton>
      <StyledDescription>{props.ariaLabel}</StyledDescription>
    </ButtonWrapper>
  );
};

const StyledDescription = styled.div`
  text-align: center;
  font-size: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
