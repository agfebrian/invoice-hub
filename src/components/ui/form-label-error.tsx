import { FormLabel, FormLabelProps } from "@mui/material";

export default function FormLabelError({ children, ...rest }: FormLabelProps) {
  return (
    <FormLabel
      sx={{
        "&.Mui-error": {
          color: "red",
          fontSize: 12,
        },
      }}
      {...rest}
    >
      {children}
    </FormLabel>
  );
}
