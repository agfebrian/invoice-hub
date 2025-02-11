"use client";
import React from "react";
import Image from "next/image";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { RemoveRedEye, BorderColor, Delete } from "@mui/icons-material";
import MenuStyled from "@/components/ui/menu-styled";

export default function MoreActions() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="more-actions"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Image
          src="/assets/icons/paragraph.svg"
          alt=""
          width={20}
          height={20}
        />
      </IconButton>
      <MenuStyled
        id="more-actions"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "more-actions",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <RemoveRedEye color="disabled" />
          </ListItemIcon>
          <ListItemText>Detail</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BorderColor color="disabled" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Delete color="disabled" />
          </ListItemIcon>
          <ListItemText>Remove</ListItemText>
        </MenuItem>
      </MenuStyled>
    </>
  );
}
