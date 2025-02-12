import { FormLabel, FormLabelProps } from "@mui/material";

export default function FormLabelStyled(props: FormLabelProps) {
  return (
    <FormLabel
      sx={{
        fontSize: "14px",
        lineHeight: "22px",
        fontWeight: 600,
        color: "#212121",
        "& .MuiFormLabel-asterisk": { color: "red" },
      }}
      {...props}
    />
  );
}
