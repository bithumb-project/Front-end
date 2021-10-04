import { useState, ChangeEvent } from 'react';
import { Title } from '../../styles/pages/boardStyles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const Board = () => {
  interface Column {
    id: 'no' | 'name' | 'nickname' | 'createdAt' | 'view' | 'recommend';
    label: string;
    minWidth?: number;
    align?: 'center';
    format?: (value: number) => string;
  }

  const columns: readonly Column[] = [
    { id: 'no', label: 'No', minWidth: 48 },
    { id: 'name', label: '제목', minWidth: 417 },
    { id: 'nickname', label: '닉네임', minWidth: 91.75, align: 'center' },
    {
      id: 'createdAt',
      label: '등록일',
      minWidth: 91.75,
      align: 'center',
    },
    {
      id: 'view',
      label: '조회',
      minWidth: 91.75,
      align: 'center',
    },
    {
      id: 'recommend',
      label: '추천',
      minWidth: 91.75,
      align: 'center',
    },
  ];

  interface Data {
    no: number;
    name: string;
    nickname: string;
    createdAt: string;
    view: number;
    recommend: number;
  }

  function createData(
    no: number,
    name: string,
    nickname: string,
    createdAt: string,
    view: number,
    recommend: number
  ): Data {
    return { no, name, nickname, createdAt, view, recommend };
  }

  const rows = [
    createData(
      2,
      '도지 대기 성층권 뚫는 기린 모가지 장대 양봉 발생',
      'IN',
      '2021.09.30',
      16,
      21
    ),
    createData(1, '도지만 오르겠냐 ㅋㅋㅋㅋㅋㅋ ', 'IN', '2021.09.30', 21, 33),
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Title>자유게시판</Title>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.no}
                      onClick={() => alert('hi')}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[20, 50, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default Board;
