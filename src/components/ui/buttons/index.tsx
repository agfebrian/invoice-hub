import React from "react";
import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
} from "@mui/material";

interface ButtonPrimaryProps extends ButtonProps {
  textTransform?: "capitalize" | "uppercase" | "lowercase";
}

export function ButtonPrimary({
  textTransform = "capitalize",
  size = "large",
  children,
  sx,
  ...rest
}: ButtonPrimaryProps) {
  return (
    <Button
      size={size}
      sx={{
        ".MuiLoadingButton-root": {
          color: "#FFF",
        },
        background: "#3C50E0",
        color: "#fff",
        textTransform: textTransform,
        "&:hover": {
          opacity: 0.9,
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}

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
