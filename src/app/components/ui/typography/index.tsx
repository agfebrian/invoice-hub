import React from "react";
import { Typography } from "@mui/material";

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="h1" fontSize={26} fontWeight={700}>
      {children}
    </Typography>
  );
}
