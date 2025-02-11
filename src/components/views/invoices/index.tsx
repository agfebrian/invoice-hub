import React from "react";
import { format } from "date-fns";
import { INVOICES_DATA } from "@/constants";
import { TableBasic, TableCellStyled } from "@/components/ui/table";
import MoreActions from "./more-action-table";
import InvoiceStatus from "./invoice-status";
import { Invoice } from "@/lib/types";
import { currencyFormat } from "@/utils";

export function InvoiceTable() {
  return (
    <TableBasic<Invoice>
      header={[
        { id: "code", label: "Invoice" },
        { id: "dueDate", label: "Due Date" },
        { id: "status", label: "Status" },
        { id: "amount", label: "Amount" },
        { id: "action", label: "Action" },
      ]}
      items={INVOICES_DATA}
      renderValue={(row) => (
        <>
          <TableCellStyled>{row?.code}</TableCellStyled>
          <TableCellStyled>
            {format(row?.dueDate, "MMM dd, yyyy")}
          </TableCellStyled>
          <TableCellStyled>
            {<InvoiceStatus status={row?.status} />}
          </TableCellStyled>
          <TableCellStyled>{currencyFormat(row?.amount)}</TableCellStyled>
          <TableCellStyled>
            <MoreActions />
          </TableCellStyled>
        </>
      )}
    />
  );
}
