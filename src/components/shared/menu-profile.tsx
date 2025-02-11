"use client";
import React from "react";
import { Avatar, Box, IconButton, MenuItem, Typography } from "@mui/material";
import MenuStyled from "../ui/menu-styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { deepPurple } from "@mui/material/colors";

export default function MenuProfile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ display: "flex", gap: 1, justifyItems: "center" }}>
        <IconButton
          id="basic-button"
          aria-label="menu"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          size="large"
          color="inherit"
          sx={{
            display: "flex",
            gap: 2,
            ...(typeof anchorEl === "object" && {
              borderRadius: "9px",
            }),
          }}
          onClick={handleClick}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography fontWeight={600} textAlign="right">
              John Doe
            </Typography>
            <Typography fontWeight={500} textAlign="right" color="textDisabled">
              Verified Member
            </Typography>
          </div>
          <Avatar sx={{ width: 50, height: 50, bgcolor: deepPurple[500] }} />
          <ExpandMoreIcon sx={{ marginLeft: -1 }} />
        </IconButton>
      </Box>
      <MenuStyled
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </MenuStyled>
    </div>
  );
}
