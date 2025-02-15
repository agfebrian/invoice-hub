import PageWrapper from "@/components/shared/page-wrapper";
import { Title } from "@/components/ui/typography";
import { InvoiceTable } from "@/components/views/invoices";
import { Box, CardContent } from "@mui/material";
import CardStyled from "@/components/ui/card-styled";
import InvoiceSearch from "@/components/views/invoices/invoice-search";
import InvoiceFilterStatus from "@/components/views/invoices/invoice-filter-status";
import SkeletonTable from "@/components/shared/skeleton-table";
import { Suspense } from "react";

export default async function InvoiceList(props: {
  searchParams?: Promise<{
    q?: string;
    status?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const q = searchParams?.q || "";
  const statusInvoice = searchParams?.status || "";

  return (
    <PageWrapper>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Title>My Invoices</Title>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <InvoiceSearch />
          <InvoiceFilterStatus />
        </Box>
      </Box>
      <CardStyled>
        <CardContent>
          <Suspense key={q + statusInvoice} fallback={<SkeletonTable />}>
            <InvoiceTable q={q} status={statusInvoice} />
          </Suspense>
        </CardContent>
      </CardStyled>
    </PageWrapper>
  );
}
