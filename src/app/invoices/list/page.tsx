import PageWrapper from "@/components/shared/page-wrapper";
import { Title } from "@/components/ui/typography";
import { InvoiceTable } from "@/components/views/invoices";
import { CardContent } from "@mui/material";
import CardStyled from "@/components/ui/card-styled";
import { getInvoices } from "@/lib/actions/invoice";

export default async function InvoiceList() {
  const { data } = await getInvoices();

  return (
    <PageWrapper>
      <Title>My Invoices</Title>
      <CardStyled>
        <CardContent>
          <InvoiceTable data={data!} />
        </CardContent>
      </CardStyled>
    </PageWrapper>
  );
}
