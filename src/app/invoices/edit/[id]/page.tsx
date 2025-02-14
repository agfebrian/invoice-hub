import PageWrapper from "@/components/shared/page-wrapper";
import CardStyled from "@/components/ui/card-styled";
import { Subtitle, Title } from "@/components/ui/typography";
import { InvoiceForm } from "@/components/views/invoices";
import { Box, CardContent } from "@mui/material";
import { getDetailInvoice } from "@/lib/actions/invoice";

export default async function InvoiceEdit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await getDetailInvoice(Number(id));

  return (
    <PageWrapper>
      <Title>Edit Invoice</Title>
      <CardStyled>
        <Box p={2} borderBottom={1} borderColor="divider">
          <Subtitle>Invoice Form</Subtitle>
        </Box>
        <CardContent>
          <InvoiceForm typeForm="edit" defaultValue={data} />
        </CardContent>
      </CardStyled>
    </PageWrapper>
  );
}
