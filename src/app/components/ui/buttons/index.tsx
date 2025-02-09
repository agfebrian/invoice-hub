import React from "react";
import { IconButton, IconButtonProps } from "@mui/material";

export function IconButtonBordered({ children, ...rest }: IconButtonProps) {
  return (
    <IconButton
      {...rest}
      sx={{ background: "#E2E8F0", border: "solid 0.5px #E2E8F0" }}
    >
      {children}
    </IconButton>
  );
}
