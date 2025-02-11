import { Table, TableBody, TableContainer, TableHead } from "@mui/material";
import { TableBasicProps, TableHeadCell } from "@/lib/types";
import { TableRowStyled } from "./table-row";
import { TableCellStyled } from "./table-cell";

export function TableBasic<T>({
  header,
  items,
  renderValue,
}: TableBasicProps<T>) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRowStyled>
            {header.map((head: TableHeadCell, index: number) => (
              <TableCellStyled key={index}>{head.label}</TableCellStyled>
            ))}
          </TableRowStyled>
        </TableHead>
        <TableBody>
          {items.map((row, indexRow) => (
            <TableRowStyled key={indexRow} hover>
              {renderValue
                ? renderValue(row)
                : header.map((header: TableHeadCell, indexCell: number) => (
                    <TableCellStyled key={indexCell}>
                      {(row as never)[`${header.id}`]}
                    </TableCellStyled>
                  ))}
            </TableRowStyled>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
