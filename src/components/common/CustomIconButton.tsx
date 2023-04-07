import { IconButton } from "@mui/material";
import React from "react";

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
    <IconButton
      color={props.color}
      aria-label={props.ariaLabel}
      size={props.size}
      href={props.href}
      target={props.target}
    >
      {props.icon}
    </IconButton>
  );
};
