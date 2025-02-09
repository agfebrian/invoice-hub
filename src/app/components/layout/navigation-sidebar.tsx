"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  Box,
  ListItemButton,
  List,
  Container,
  Typography,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { styled } from "@mui/system";
import { usePathname } from "next/navigation";
import NAVIGATION from "@/constants/navigation";

const ListItemStyled = styled(ListItemButton)(() => ({
  whiteSpace: "nowrap",
  color: "#9D9D9D",
  textDecoration: "none",
  padding: "10px 0",
  "&.Mui-selected": {
    color: "white",
    background: "transparent",
  },
  "&.Mui-selected:hover": {
    background: "transparent",
  },
}));

export default function NavigationSidebar() {
  const pathname = usePathname();

  return (
    <Drawer variant="permanent">
      <Box px={2} sx={{ width: 250, height: "100%", background: "#1C2434" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 100,
          }}
        >
          <Image
            src="/assets/logo.png"
            alt=""
            width={166}
            height={45}
            priority
          />
        </Box>
        <Container>
          <Typography variant="caption" mt={2} color="#9D9D9D">
            MENU
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              marginTop: 1,
            }}
          >
            {NAVIGATION.map(({ title, path, icon }, i) => (
              <List component="li" disablePadding key={i}>
                <Link href={path} style={{ textDecoration: "none" }}>
                  <ListItemStyled selected={path === pathname}>
                    <ListItemIcon sx={{ marginRight: -2 }}>
                      <Image
                        src={path === pathname ? icon.active : icon.default}
                        alt={title}
                        width={24}
                        height={24}
                      />
                    </ListItemIcon>
                    <ListItemText>{title}</ListItemText>
                  </ListItemStyled>
                </Link>
              </List>
            ))}
          </Box>
        </Container>
      </Box>
    </Drawer>
  );
}
