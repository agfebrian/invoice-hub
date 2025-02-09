import React from "react";
import { Container } from "@mui/material";
import Header from "./header";
import NavigationSidebar from "./navigation-sidebar";

export default function DashboardInvoice({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
      }}
    >
      <Header />
      <NavigationSidebar />
      <main
        style={{
          width: "calc(100vw - 250px)",
          minHeight: "100vh",
          backgroundColor: "#F1F5F9",
          padding: "100px 0",
        }}
      >
        <Container>{children}</Container>
      </main>
    </div>
  );
}
