"use client";
import { styled } from "@mui/system";
import { TableCell, tableCellClasses } from "@mui/material";

export const TableCellStyled = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F7F9FC",
    fontSize: 14,
    fontWeight: 600,
  },
  borderBottom: "none",
}));
