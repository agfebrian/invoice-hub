import Link from "next/link";
import { Box, Typography } from "@mui/material";
import PageWrapper from "@/components/shared/page-wrapper";
import { ButtonPrimary } from "@/components/ui/buttons";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Home() {
  return (
    <PageWrapper>
      <Box
        minHeight={500}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={4}
      >
        <Typography variant="h4" fontWeight={700}>
          Welcome, {"let's"} explore your dashboards
        </Typography>
        <Box width={200}>
          <ButtonPrimary
            component={Link}
            href="/invoices/list"
            endIcon={<ArrowOutwardIcon />}
            fullWidth
          >
            Explore Invoices
          </ButtonPrimary>
        </Box>
      </Box>
    </PageWrapper>
  );
}
