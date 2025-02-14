"use client";
import React from "react";
import Image from "next/image";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { BorderColor, Delete } from "@mui/icons-material";
import MenuStyled from "@/components/ui/menu-styled";
import { deleteInvoice } from "@/lib/actions/invoice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAlert } from "@/components/ui/alert";

interface Props {
  id: number;
}

export default function MoreActions({ id }: Props) {
  const router = useRouter();
  const { showAlert } = useAlert();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = async (id: number) => {
    try {
      const res = await deleteInvoice(id);
      if (res.status) {
        handleClose();
        router.refresh();
        showAlert({
          title: res.message,
          message:
            "You can view and manage your invoice in the 'My Invoices' section.",
        });
      } else {
        showAlert({
          type: "error",
          title: res.message,
          message: res.message,
        });
      }
    } catch (error) {
      console.log(error);
      showAlert({
        type: "error",
        title: "Ops, something went wrong",
        message: "Sory, we have a problem. You can try again later",
      });
    }
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
        <Link
          href={`/invoices/edit/${id}`}
          style={{ textDecoration: "none", color: "#202020" }}
        >
          <MenuItem>
            <ListItemIcon>
              <BorderColor color="disabled" />
            </ListItemIcon>
            <ListItemText>Edit</ListItemText>
          </MenuItem>
        </Link>
        <MenuItem onClick={() => handleRemove(id)}>
          <ListItemIcon>
            <Delete color="disabled" />
          </ListItemIcon>
          <ListItemText>Remove</ListItemText>
        </MenuItem>
      </MenuStyled>
    </>
  );
}
