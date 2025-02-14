"use client";
import React from "react";
import { Box, Card, Snackbar, Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

type AlertType = "success" | "error";

interface Alert {
  type: AlertType;
  title: string;
  message: string;
}

type ShowAlertParams = Pick<Alert, "title" | "message"> & { type?: AlertType };

interface AlertContext {
  alert: Alert | null;
  showAlert: (params: ShowAlertParams) => void;
  hideAlert: () => void;
}

const AlertContext = React.createContext<AlertContext | undefined>(undefined);

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alert, setAlert] = React.useState<Alert | null>(null);

  const showAlert = ({ type = "success", title, message }: ShowAlertParams) => {
    setAlert({
      type,
      title,
      message,
    });
    setTimeout(() => hideAlert(), 3000);
  };

  const hideAlert = () => setAlert(null);

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = React.useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
}

export function Alert() {
  const { alert, hideAlert } = useAlert();

  if (!alert) {
    return null;
  }

  return (
    <Snackbar
      open={alert !== null}
      autoHideDuration={3000}
      onClose={hideAlert}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Card
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "start",
          gap: 2,
          backgroundColor: `${
            alert.type === "success" ? "#E1F9F0" : "#FEECEC"
          }`,
          mt: 2,
          padding: "20px 30px",
          height: "115px",
          borderLeft: `6px solid ${
            alert.type === "success" ? "#00A86B" : "#E63946"
          }`,
          borderRadius: "3px",
        }}
      >
        {alert.type === "success" ? (
          <CheckBoxIcon sx={{ color: "#00A86B" }} fontSize="large" />
        ) : (
          <DisabledByDefaultIcon sx={{ color: "#E63946" }} fontSize="large" />
        )}
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Typography
            variant={"body1"}
            fontSize={16}
            fontWeight={700}
            sx={{
              color: `${alert.type === "success" ? "#004434" : "#A71D2A"}`,
            }}
          >
            {alert.title}
          </Typography>
          <Typography
            variant={"body2"}
            fontSize={16}
            fontWeight={400}
            sx={{ color: "#637381" }}
          >
            {alert.message}
          </Typography>
        </Box>
      </Card>
    </Snackbar>
  );
}
