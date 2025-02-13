import { Box, InputAdornment, TextField, TextFieldProps } from "@mui/material";

export function TextFieldStyled({
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

export function InputAndormentAmount({ ...rest }: TextFieldProps) {
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
      {...rest}
    />
  );
}
