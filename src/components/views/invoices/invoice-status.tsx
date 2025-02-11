import { Chip } from "@mui/material";
import { StatusInvoice } from "@/lib/types";

export default function InvoiceStatus({ status }: { status: StatusInvoice }) {
  const checkStatus = () => {
    switch (status) {
      case StatusInvoice.PAID:
        return { text: "Paid", color: "#219653", backgroundColor: "#21965314" };
      case StatusInvoice.PENDING:
        return {
          text: "Pending",
          color: "#FFA70B",
          backgroundColor: "#FFA70B14",
        };
      case StatusInvoice.UNPAID:
        return {
          text: "Unpaid",
          color: "#D34053",
          backgroundColor: "#D3405314",
        };
    }
  };

  return (
    <Chip
      label={checkStatus().text}
      sx={{
        minWidth: 58,
        color: checkStatus().color,
        backgroundColor: checkStatus().backgroundColor,
      }}
    />
  );
}
