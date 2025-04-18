import PageWrapper from "@/components/shared/page-wrapper";
import CardStyled from "@/components/ui/card-styled";
import { Subtitle, Title } from "@/components/ui/typography";
import { InvoiceForm } from "@/components/views/invoices";
import { Box, CardContent } from "@mui/material";

export default function InvoiceAdd() {
  return (
    <PageWrapper>
      <Title>Add Invoice</Title>
      <CardStyled>
        <Box p={2} borderBottom={1} borderColor="divider">
          <Subtitle>Invoice Form</Subtitle>
        </Box>
        <CardContent>
          <InvoiceForm />
        </CardContent>
      </CardStyled>
    </PageWrapper>
  );
}
