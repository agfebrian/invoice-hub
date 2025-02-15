"use client";
import { Select, SelectProps, Typography } from "@mui/material";

type Props = SelectProps & {
  placeholder?: string;
};

export default function SelectStyled({
  variant = "outlined",
  size = "small",
  sx,
  placeholder,
  children,
  ...rest
}: Props) {
  return (
    <Select
      variant={variant}
      renderValue={(selected) => {
        if (!selected) {
          return <Typography color="textSecondary">{placeholder}</Typography>;
        }

        return selected.toString();
      }}
      displayEmpty={Boolean(placeholder?.length)}
      sx={{
        "& .MuiInputBase-input::placeholder": {
          color: "#64748B",
          opacity: 1,
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "#E2E8F0",
          borderWidth: "2px",
        },
        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1C2434",
          },
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ccc",
        },
        ...sx,
      }}
      size={size}
      fullWidth
      {...rest}
    >
      {children}
    </Select>
  );
}
