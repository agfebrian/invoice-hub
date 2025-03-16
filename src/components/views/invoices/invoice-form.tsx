"use client";
import React from "react";
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
import { FormDataInvoice, InvoiceSchema } from "@/lib/schemas";
import FormLabelError from "@/components/ui/form-label-error";
import DatePickerX from "@/components/ui/datepicker";
import {
  createInvoice,
  getLatestInvoice,
  updateInvoice,
} from "@/lib/actions/invoice";
import { Invoice } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useAlert } from "@/components/ui/alert";
import { generateInvoiceNumber, parseInvoiceStatus } from "@/utils";

interface Props {
  typeForm?: "add" | "edit";
  defaultValue?: Invoice;
}

export function InvoiceForm({ typeForm = "add", defaultValue }: Props) {
  const router = useRouter();
  const { showAlert } = useAlert();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormDataInvoice>({
    mode: "all",
    resolver: zodResolver(InvoiceSchema),
  });

  React.useEffect(() => {
    const fetchLatestInvoice = async () => {
      try {
        const data = await getLatestInvoice();
        console.log("res client", data?.data);
        if (data?.data?.length)
          setValue("code", generateInvoiceNumber(data?.data[0].code));
        else setValue("code", generateInvoiceNumber(""));
      } catch (error) {
        console.log(error);
      }
    };

    if (typeForm === "add") {
      fetchLatestInvoice();
    }

    if (typeForm === "edit" && defaultValue) {
      setValue("code", defaultValue.code);
      setValue("description", defaultValue.description);
      setValue("dueDate", new Date(defaultValue.dueDate));
      setValue("amount", defaultValue.amount);
      setValue(
        "status",
        defaultValue.status == 1
          ? "Paid"
          : defaultValue.status == 2
          ? "Unpaid"
          : "Pending"
      );
    }
  }, [typeForm, defaultValue, setValue]);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleCreateInvoice = async (data: FormDataInvoice) => {
    setIsLoading(true);
    try {
      const res = await createInvoice({
        code: data.code,
        amount: Number(String(data.amount).replaceAll(",", "")),
        description: data.description,
        dueDate: new Date(data.dueDate),
        status: Number(parseInvoiceStatus(String(data.status).toUpperCase())),
      } as Invoice);

      if (res.status) {
        router.push("/invoices/list");
        router.refresh();
        showAlert({
          title: res.message,
          message:
            "You can view and manage your invoice in the 'My Invoices' section.",
        });
      } else {
        showAlert({
          type: "error",
          title: res.message,
          message: res.message,
        });
      }
    } catch (error) {
      console.log(error);
      showAlert({
        type: "error",
        title: "Ops, something went wrong",
        message: "Sory, we have a problem. You can try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateInvoice = async (data: FormDataInvoice) => {
    setIsLoading(true);
    try {
      const res = await updateInvoice(Number(defaultValue?.id), {
        code: data.code,
        amount: Number(String(data.amount).replaceAll(",", "")),
        description: data.description,
        dueDate: new Date(data.dueDate),
        status: Number(parseInvoiceStatus(String(data.status).toUpperCase())),
      } as Invoice);

      if (res.status) {
        router.push("/invoices/list");
        router.refresh();
        showAlert({
          title: res.message,
          message:
            "You can view and manage your invoice in the 'My Invoices' section.",
        });
      } else {
        showAlert({
          type: "error",
          title: res.message,
          message: res.message,
        });
      }
    } catch (error) {
      console.log(error);
      showAlert({
        type: "error",
        title: "Ops, something went wrong",
        message: "Sory, we have a problem. You can try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: FormDataInvoice) => {
    if (typeForm === "add") handleCreateInvoice(data);
    else handleUpdateInvoice(data);
  };

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
            disabled
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
            defaultValue=""
            render={({ field }) => (
              <SelectStyled
                {...field}
                placeholder="Choose the status"
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
        <ButtonPrimary
          sx={{ width: "259px" }}
          loading={isLoading}
          type="submit"
        >
          + Add Invoice
        </ButtonPrimary>
      </Box>
    </form>
  );
}
