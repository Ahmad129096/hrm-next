"use client";
import {
  Paper,
  Table,
  styled,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  TableContainer,
  tableCellClasses,
} from "@mui/material";
import { TableProps } from "./Interface";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export const TableX = ({ headingTitle, TableData }: TableProps) => {
  return (
    <TableContainer
      component={Paper}
      style={{ width: "100%", marginTop: "30px" }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {headingTitle.map((title) => (
              <StyledTableCell align="left">{title.label}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData?.map((data: any, i) => (
            <StyledTableRow key={i}>
              {headingTitle.map((column) => (
                <StyledTableCell component="th" scope="row">
                  {data[column.id]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
