import { z } from "zod";

export const AddInvoiceSchema = z.object({
  code: z.string().min(1, "Code is required"),
  dueDate: z.date(),
  status: z.string().min(1, "Status is required"),
  amount: z.string().min(1, "Amount is required"),
  description: z.string().min(1, "Description is required"),
});

export type FormDataInvoice = z.infer<typeof AddInvoiceSchema>;
