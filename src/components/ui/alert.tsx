import { Box, Card, Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function Alert() {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "start",
        gap: 2,
        backgroundColor: "#E1F9F0",
        mt: 2,
        padding: "20px 30px",
        height: "115px",
        borderLeft: "6px solid #00A86B",
        borderRadius: "3px",
      }}
    >
      <CheckBoxIcon sx={{ color: "#00A86B" }} fontSize="large" />
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Typography
          variant={"body1"}
          fontSize={16}
          fontWeight={700}
          sx={{ color: "#004434" }}
        >
          Invoice added successfully!
        </Typography>
        <Typography
          variant={"body2"}
          fontSize={16}
          fontWeight={400}
          sx={{ color: "#637381" }}
        >
          You can view and manage your invoice in the {"'My Invoices'"} section.
        </Typography>
      </Box>
    </Card>
  );
}
