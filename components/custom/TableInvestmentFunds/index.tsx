import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import { formatDateVI } from 'utils/helper';
import { device } from 'styles/media-device';
import styled from 'styled-components';

export interface TableInvestmentFundsProps {
  investmentFunds: {
    id: string,
    logo: string,
    name: string,
    area: string,
    establishedDate: string,
    projects: {
      logo: string, 
      name: string,
      fundedDate: string,
    }[],
  }[]
}

export default function TableInvestmentFunds ({investmentFunds}: TableInvestmentFundsProps) {
  const router = useRouter();
  const [rows, setRows] = React.useState(investmentFunds);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowsPerPageSelect, setRowsPerPageSelect] = React.useState('10');
  const [inputSearch, setInputSearch] = React.useState('');

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputSearch(newValue);
    if (event.target.value) {
      const tpm = investmentFunds.filter((item: {name: string}) => (item.name.toLowerCase().search(inputSearch) !== -1));
      setRows(tpm);
    } else {
      setRows(investmentFunds);
    }
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = ( event: React.MouseEvent<HTMLButtonElement> | null, newPage: number, ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    setRowsPerPageSelect(event.target.value as string);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setRowsPerPageSelect(event.target.value as string);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box mb={6}>
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomInputSearch
            fullWidth
            id="input-search"
            placeholder="Tìm kiếm quỹ đầu tư"
            InputProps={{
              style: {
                backgroundColor: '#EFF2F5',
                borderRadius: 12,
                fontFamily: 'Inter-Regular',
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: 'var(--color-neutral-gray-1)' }}/>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            value={inputSearch}
            onChange={handleInputSearch}
          />
        </Grid>
        <Grid item container xs={12} sm={6}>
          <Grid container justifyContent="flex-end" alignItems="center">
            <LabelSpan>Hiển thị</LabelSpan>
            <BoxCustomSelect>
              <Select
                labelId="simple-select-show-label"
                id="simple-select-show"
                value={rowsPerPageSelect}
                onChange={handleChange}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </BoxCustomSelect>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        <WrapperTable aria-label="custom pagination table">
          <thead>
            <tr>
              <th>#</th>
              <th>Quỹ đầu tư</th>
              <th>Dạng đầu tư</th>
              <th style={{ textAlign: "center" }}>Năm thành lập</th>
              <th style={{ textAlign: "center", minWidth: '300px' }}>Dự án đầu tư tiêu biểu</th>
            </tr>
          </thead>
          <tbody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <tr key={row.id} onClick={() => { router.push(`/investment-funds/${row.id}`) }}>
                <td>{index + 1}</td>
                <td>
                  <Grid container alignItems="center">
                    <Box sx={{ width: 20, height: 20, '& img': { objectFit: 'contain', width: '100%', height: '100%' } }}>
                      <img src={row?.logo} alt={row?.name} />
                    </Box>
                    <Box sx={{ fontWeight: 'bold', marginLeft: '5px' }}>{row?.name}</Box>
                  </Grid>
                </td>
                <td>{row?.area}</td>
                <td style={{ textAlign: "center" }}>{formatDateVI(row?.establishedDate)}</td>
                <td>
                  <Grid container justifyContent="center" spacing={1}>
                    { row?.projects.map(({logo, name, fundedDate}, index) => (
                      <Grid key={index} item container direction="column" justifyContent="center" alignItems="center" xs={4}>
                        <Box sx={{ width: 32, height: 32, '& img': { objectFit: 'contain', width: '100%', height: '100%' } }}>
                          <img src={logo} alt={name} />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>{name}</Box>
                        <Box sx={{ color: '#58667E' }}>{formatDateVI(fundedDate)}</Box>
                      </Grid>
                    )) }
                  </Grid>
                </td>
              </tr>
            ))}
            {emptyRows > 0 && (
              <tr style={{ height: 41 * emptyRows }}>
                <td colSpan={3} />
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <CustomTablePagination
                rowsPerPageOptions={[10, 20, 30]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                componentsProps={{
                  select: {
                    'aria-label': 'rows per page',
                  },
                  actions: {
                    showFirstButton: true,
                    showLastButton: true,
                  } as any,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </tr>
          </tfoot>
        </WrapperTable>
      </Box>
    </Box>
  );
}

const LabelSpan = styled.span`
  font-family: 'Inter-Medium';
  margin-right: 15px;
  font-size: 18px;
  line-height: 22px;
  color: #A6B0C3;
`;

const BoxCustomSelect = styled(Box)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#EFF2F5',
    borderRadius: '8px',
    borderColor: '#EFF2F5',
    color: '#58667E',
    fontFamily: 'Inter-Medium',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#EFF2F5',
  },
  '& .MuiSelect-select': {
    padding: '13px 32px 9px 24px',
    lineHeight: '22px',
  },
  '& div': {
    fontFamily: 'Inter-Medium',
  }
});

const CustomInputSearch = styled(TextField)({
  width: '400px',
  maxWidth: '100%',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#EFF2F5',
  },
});

const CustomTablePagination = styled(TablePaginationUnstyled)`
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }

  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }

  & .MuiTablePaginationUnstyled-actions {
    display: flex;
    gap: 0.25rem;
  }
`;

const WrapperTable = styled.table`
  width: 100%;
  max-width: 100%;
  margin: 15px 0;
  border-collapse: collapse;
  border: 1px solid #EAEAEA;
  box-sizing: border-box;
  border-radius: 8px;
  color: #11142D;
  td, th {
    text-align: left;
    padding: 10px;
    @media screen and ${device.tablet} {
      padding: 20px;
    }
  }
  tr {
    border-bottom: 1px solid #EAEAEA;
  }
  thead {
    tr {
      th:nth-child(2) {
        min-width: 150px;
      }
      th:nth-child(4) {
        min-width: 125px;
      }
    }
  }
  thead, tfoot {
    background: #F7F8FA;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    td {
      padding: 12px 20px;
    }
  }
  tbody {
    tr {
      cursor: pointer;
      font-size: 16px;
      line-height: 19px;
      &:hover {
        background: #EFF2F5;
      }
    }
  }
  tfoot {
    display: none;
    tr {
      color: #A6B0C3;
      td:last-child {
        text-align: right;
      }
    }
  }
`;