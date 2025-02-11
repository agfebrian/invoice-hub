import { TableRow, TableRowProps } from "@mui/material";

export function TableRowStyled(props: TableRowProps) {
  return (
    <TableRow
      sx={{
        "&:not(:nth-last-child(1))": {
          borderBottom: "solid 1px #EEEEEE",
        },
        ...props.sx,
      }}
      {...props}
    />
  );
}
