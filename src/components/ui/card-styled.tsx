import { Card, CardProps } from "@mui/material";

export default function CardStyled(props: CardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #E2E8F0",
        boxShadow: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
        ...props.sx,
      }}
      {...props}
    />
  );
}
