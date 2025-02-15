import React from "react";
import { format } from "date-fns";
import { TableBasic, TableCellStyled } from "@/components/ui/table";
import MoreActions from "./more-action-table";
import InvoiceStatus from "./invoice-status";
import { Invoice } from "@/lib/types";
import { currencyFormat, parseInvoiceStatus } from "@/utils";
import { Box, Typography } from "@mui/material";
import { getInvoices } from "@/lib/actions/invoice";

interface Props {
  q: string;
  status: string;
}

export async function InvoiceTable({ q, status }: Props) {
  const data = await getInvoices(q, parseInvoiceStatus(status));

  if (!data) {
    return (
      <Box py={12}>
        <Typography variant="h6" textAlign="center">
          Failed to load data.
        </Typography>
      </Box>
    );
  }

  return (
    <TableBasic<Invoice>
      header={[
        { id: "code", label: "Invoice" },
        { id: "dueDate", label: "Due Date" },
        { id: "status", label: "Status" },
        { id: "amount", label: "Amount" },
        { id: "action", label: "Action" },
      ]}
      items={data.data!}
      renderValue={(row) => (
        <>
          <TableCellStyled>
            <Box>
              <Typography>{row?.description}</Typography>
              <Typography variant="caption" color="textDisabled">
                {row?.code}
              </Typography>
            </Box>
          </TableCellStyled>
          <TableCellStyled>
            {format(row?.dueDate, "MMM dd, yyyy")}
          </TableCellStyled>
          <TableCellStyled>
            {<InvoiceStatus status={row?.status} />}
          </TableCellStyled>
          <TableCellStyled>{currencyFormat(row?.amount)}</TableCellStyled>
          <TableCellStyled>
            <MoreActions id={row?.id} />
          </TableCellStyled>
        </>
      )}
    />
  );
}

export * from "./invoice-form";
