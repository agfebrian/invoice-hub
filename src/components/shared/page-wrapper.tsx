import { Box } from "@mui/material";

export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {children}
    </Box>
  );
}
