import PageWrapper from "@/components/shared/page-wrapper";
import { Title } from "@/components/ui/typography";
import { InvoiceTable } from "@/components/views/invoices";
import { CardContent } from "@mui/material";
import CardStyled from "@/components/ui/card-styled";

export default function InvoiceList() {
  return (
    <PageWrapper>
      <Title>My Invoices</Title>
      <CardStyled>
        <CardContent>
          <InvoiceTable />
        </CardContent>
      </CardStyled>
    </PageWrapper>
  );
}
