import { TextField, TextFieldProps } from "@mui/material";

export default function TextFieldStyled({
  variant = "outlined",
  size = "small",
  sx,
  ...rest
}: TextFieldProps) {
  return (
    <TextField
      variant={variant}
      size={size}
      sx={{
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
        ...sx,
      }}
      fullWidth
      {...rest}
    />
  );
}
