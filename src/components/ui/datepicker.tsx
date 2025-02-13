import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerX({ ...rest }: DatePickerProps<Date>) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        slotProps={{
          textField: {
            size: "small",
            sx: {
              "& .MuiInputBase-input::placeholder": {
                color: "#64748B",
                opacity: 1,
              },
              "& .MuiOutlinedInput-root": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E2E8F0",
                  borderWidth: "2px",
                },
                "&.Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1C2434",
                  },
                },
                "&:hover:not(.Mui-focused)": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc",
                  },
                },
              },
            },
            fullWidth: true,
          },
        }}
        {...rest}
      />
    </LocalizationProvider>
  );
}
