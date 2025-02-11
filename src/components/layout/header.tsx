import { AppBar, Toolbar } from "@mui/material";
import MenuProfile from "../shared/menu-profile";
import SwitchTheme from "../shared/switch-theme";
import { IconButtonBordered } from "../ui/buttons";
import Image from "next/image";

export default function Header() {
  return (
    <AppBar
      color="default"
      elevation={0}
      sx={{ width: "calc(100vw - 250px)", backgroundColor: "white" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
        <SwitchTheme size="medium" sx={{ marginRight: 1 }} />
        <IconButtonBordered size="medium">
          <Image
            src="/assets/icons/notification.svg"
            alt=""
            width={20}
            height={20}
          />
        </IconButtonBordered>
        <IconButtonBordered size="medium">
          <Image src="/assets/icons/chat.svg" alt="" width={20} height={20} />
        </IconButtonBordered>
        <MenuProfile />
      </Toolbar>
    </AppBar>
  );
}
