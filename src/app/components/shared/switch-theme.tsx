"use client";
import { styled } from "@mui/system";
import { Switch, SwitchProps } from "@mui/material";

const SwitchTheme = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 60,
  height: 35,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(26px)",
      color: "#fff",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#969AA1"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "#3C50E0",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 30,
    height: 30,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00004 12.6667C10.5774 12.6667 12.6667 10.5773 12.6667 8C12.6667 5.42267 10.5774 3.33333 8.00004 3.33333C5.42271 3.33333 3.33337 5.42267 3.33337 8C3.33337 10.5773 5.42271 12.6667 8.00004 12.6667Z" fill="${encodeURIComponent(
        "#969AA1"
      )}"/><path d="M7.99996 15.3067C7.63329 15.3067 7.33329 15.0333 7.33329 14.6667V14.6133C7.33329 14.2467 7.63329 13.9467 7.99996 13.9467C8.36663 13.9467 8.66663 14.2467 8.66663 14.6133C8.66663 14.98 8.36663 15.3067 7.99996 15.3067ZM12.76 13.4267C12.5866 13.4267 12.42 13.36 12.2866 13.2333L12.2 13.1467C11.94 12.8867 11.94 12.4667 12.2 12.2067C12.46 11.9467 12.88 11.9467 13.14 12.2067L13.2266 12.2933C13.4866 12.5533 13.4866 12.9733 13.2266 13.2333C13.1 13.36 12.9333 13.4267 12.76 13.4267ZM3.23996 13.4267C3.06663 13.4267 2.89996 13.36 2.76663 13.2333C2.50663 12.9733 2.50663 12.5533 2.76663 12.2933L2.85329 12.2067C3.11329 11.9467 3.53329 11.9467 3.79329 12.2067C4.05329 12.4667 4.05329 12.8867 3.79329 13.1467L3.70663 13.2333C3.57996 13.36 3.40663 13.4267 3.23996 13.4267ZM14.6666 8.66667H14.6133C14.2466 8.66667 13.9466 8.36667 13.9466 8C13.9466 7.63333 14.2466 7.33333 14.6133 7.33333C14.98 7.33333 15.3066 7.63333 15.3066 8C15.3066 8.36667 15.0333 8.66667 14.6666 8.66667ZM1.38663 8.66667H1.33329C0.966626 8.66667 0.666626 8.36667 0.666626 8C0.666626 7.63333 0.966626 7.33333 1.33329 7.33333C1.69996 7.33333 2.02663 7.63333 2.02663 8C2.02663 8.36667 1.75329 8.66667 1.38663 8.66667ZM12.6733 3.99333C12.5 3.99333 12.3333 3.92667 12.2 3.8C11.94 3.54 11.94 3.12 12.2 2.86L12.2866 2.77333C12.5466 2.51333 12.9666 2.51333 13.2266 2.77333C13.4866 3.03333 13.4866 3.45333 13.2266 3.71333L13.14 3.8C13.0133 3.92667 12.8466 3.99333 12.6733 3.99333ZM3.32663 3.99333C3.15329 3.99333 2.98663 3.92667 2.85329 3.8L2.76663 3.70667C2.50663 3.44667 2.50663 3.02667 2.76663 2.76667C3.02663 2.50667 3.44663 2.50667 3.70663 2.76667L3.79329 2.85333C4.05329 3.11333 4.05329 3.53333 3.79329 3.79333C3.66663 3.92667 3.49329 3.99333 3.32663 3.99333ZM7.99996 2.02667C7.63329 2.02667 7.33329 1.75333 7.33329 1.38667V1.33333C7.33329 0.966668 7.63329 0.666668 7.99996 0.666668C8.36663 0.666668 8.66663 0.966668 8.66663 1.33333C8.66663 1.7 8.36663 2.02667 7.99996 2.02667Z" fill="${encodeURIComponent(
        "#969AA1"
      )}"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 35 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transition: (theme.transitions as any).create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

export default SwitchTheme;
