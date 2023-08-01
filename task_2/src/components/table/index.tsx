import * as React from "react";
import styled from "styled-components";

export interface TableColumn<T> {
  label: string;
  key: keyof T;
  render?: (value: T[keyof T]) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

export const Table: <T extends object>(props: TableProps<T>) => JSX.Element = ({
  data,
  columns,
}) => {
  return (
    <TableWrapper>
      <TableElement>
        <TableHead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.label}</th>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.render
                    ? column.render(item[column.key])
                    : item[column.key]}
                </td>
              ))}
            </TableRow>
          ))}
        </tbody>
      </TableElement>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  margin: 2rem auto;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  th {
    padding: 1rem;
    background: lavender;
    text-align: left;
  }
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;

  td {
    padding: 1rem;
  }
`;
