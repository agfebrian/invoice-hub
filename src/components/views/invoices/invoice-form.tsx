"use client";
import FormLabelStyled from "@/components/ui/form-label-styled";
import TextFieldStyled from "@/components/ui/text-field-styled";
import SelectStyled from "@/components/ui/select-styled";
import { Box, Grid2, InputAdornment, MenuItem } from "@mui/material";
import { ButtonPrimary } from "@/components/ui/buttons";
import { NumericFormat } from "react-number-format";

function InputAndormentAmount() {
  return (
    <TextFieldStyled
      placeholder="Enter your invoice amount"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Box
                sx={{
                  bgcolor: "rgba(217, 217, 217, 0.4)",
                  py: 1,
                  ml: -1.5,
                  borderRadius: "3px 0 0 3px",
                  color: "#64748B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80px",
                }}
              >
                Rp
              </Box>
            </InputAdornment>
          ),
        },
      }}
      sx={{ "& .MuiInputBase-input": { pl: 1 } }}
    />
  );
}

export function InvoiceForm() {
  return (
    <form>
      <Grid2 container spacing={4}>
        <Grid2 size={6}>
          <FormLabelStyled htmlFor="name" required>
            Name
          </FormLabelStyled>
          <TextFieldStyled
            id="name"
            placeholder="Enter your invoice name"
            sx={{ marginTop: 1 }}
          />
        </Grid2>
        <Grid2 size={6}>
          <FormLabelStyled htmlFor="invoiceNumber" required>
            Number
          </FormLabelStyled>
          <TextFieldStyled
            id="invoiceNumber"
            placeholder="Enter your invoice number"
            sx={{ marginTop: 1 }}
          />
        </Grid2>
        <Grid2 size={6}>
          <FormLabelStyled htmlFor="dueDate" required>
            Due Date
          </FormLabelStyled>
          <TextFieldStyled id="dueDate" type="date" sx={{ marginTop: 1 }} />
        </Grid2>
        <Grid2 size={6}>
          <FormLabelStyled htmlFor="amount" required>
            Amount
          </FormLabelStyled>
          <Box mt={1}>
            <NumericFormat
              id="amount"
              thousandSeparator=","
              decimalSeparator="."
              fixedDecimalScale
              customInput={InputAndormentAmount}
            />
          </Box>
        </Grid2>
        <Grid2 size={6}>
          <FormLabelStyled htmlFor="status" required>
            Status
          </FormLabelStyled>
          <SelectStyled id="status" sx={{ marginTop: 1 }}>
            <MenuItem value="Paid">Paid</MenuItem>
            <MenuItem value="Unpaid">Unpaid</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </SelectStyled>
        </Grid2>
      </Grid2>
      <Box display={"flex"} justifyContent={"flex-end"} mt={10}>
        <ButtonPrimary sx={{ width: "259px" }}>+ Add Invoice</ButtonPrimary>
      </Box>
    </form>
  );
}
