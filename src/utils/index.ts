export function currencyFormat(num: number) {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(num);
}

export function generateInvoiceNumber(invoice: string, uniqueNumber = 2) {
  if (!invoice.trim().length) {
    return "Invalid params invoice";
  }

  const invoiceNumber = invoice.slice(-uniqueNumber);
  const nextInvoiceNumber = Number(invoiceNumber) + 1;
  const resultNextInvoiceNumber =
    String(nextInvoiceNumber).length < uniqueNumber
      ? `0${nextInvoiceNumber}`
      : nextInvoiceNumber;

  return `${invoice.slice(
    0,
    invoice.length - uniqueNumber
  )}${resultNextInvoiceNumber}`;
}
