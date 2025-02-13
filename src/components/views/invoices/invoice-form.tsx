"use client";
import FormLabelStyled from "@/components/ui/form-label-styled";
import {
  TextFieldStyled,
  InputAndormentAmount,
} from "@/components/ui/text-field-styled";
import SelectStyled from "@/components/ui/select-styled";
import { Box, Grid2, MenuItem } from "@mui/material";
import { ButtonPrimary } from "@/components/ui/buttons";
import { NumericFormat } from "react-number-format";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddInvoiceSchema, FormDataInvoice } from "@/lib/schemas";
import FormLabelError from "@/components/ui/form-label-error";
import DatePickerX from "@/components/ui/datepicker";

export function InvoiceForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataInvoice>({
    mode: "all",
    resolver: zodResolver(AddInvoiceSchema),
  });

  const onSubmit = (data: FormDataInvoice) => console.log("submitted ", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid2 container spacing={4}>
        <Grid2 size={6}>
          <FormLabelStyled htmlFor="description" required>
            Name
          </FormLabelStyled>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextFieldStyled
                {...field}
                error={Boolean(errors?.description?.message)}
                placeholder="Enter your invoice name"
                sx={{
                  marginTop: 1,
                }}
              />
            )}
          />
          <FormLabelError error={Boolean(errors?.description?.message)}>
            {errors?.description?.message}
          </FormLabelError>
        </Grid2>
        <Grid2 size={6}>
          <FormLabelStyled htmlFor="code" required>
            Number
          </FormLabelStyled>
          <Controller
            name="code"
            control={control}
            render={({ field }) => (
              <TextFieldStyled
                {...field}
                error={Boolean(errors?.code?.message)}
                placeholder="Enter your invoice number"
                sx={{ marginTop: 1 }}
              />
            )}
          />
          <FormLabelError error={Boolean(errors?.code?.message)}>
            {errors?.code?.message}
          </FormLabelError>
        </Grid2>
        <Grid2 size={6}>
          <FormLabelStyled htmlFor="dueDate" required>
            Due Date
          </FormLabelStyled>
          <Box mt={1}>
            <Controller
              name="dueDate"
              control={control}
              render={({ field }) => <DatePickerX {...field} />}
            />
            <FormLabelError error={Boolean(errors?.dueDate?.message)}>
              {errors?.dueDate?.message}
            </FormLabelError>
          </Box>
        </Grid2>
        <Grid2 size={6}>
          <FormLabelStyled htmlFor="amount" required>
            Amount
          </FormLabelStyled>
          <Box mt={1}>
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <NumericFormat
                  {...field}
                  error={Boolean(errors?.amount?.message)}
                  thousandSeparator=","
                  decimalSeparator="."
                  fixedDecimalScale
                  customInput={InputAndormentAmount}
                />
              )}
            />
            <FormLabelError error={Boolean(errors?.amount?.message)}>
              {errors?.amount?.message}
            </FormLabelError>
          </Box>
        </Grid2>
        <Grid2 size={6}>
          <FormLabelStyled htmlFor="status" required>
            Status
          </FormLabelStyled>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <SelectStyled
                {...field}
                error={Boolean(errors?.status?.message)}
                sx={{ marginTop: 1 }}
              >
                <MenuItem value="Paid">Paid</MenuItem>
                <MenuItem value="Unpaid">Unpaid</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </SelectStyled>
            )}
          />
          <FormLabelError error={Boolean(errors?.status?.message)}>
            {errors?.status?.message}
          </FormLabelError>
        </Grid2>
      </Grid2>
      <Box display={"flex"} justifyContent={"flex-end"} mt={10}>
        <ButtonPrimary sx={{ width: "259px" }} type="submit">
          + Add Invoice
        </ButtonPrimary>
      </Box>
    </form>
  );
}
