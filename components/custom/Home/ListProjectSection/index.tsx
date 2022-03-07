import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ProjectItem from 'components/custom/Home/ProjectItem';
import styled from 'styled-components';
import { device } from 'styles/media-device';
import axios from 'axios';
import { API_URL } from 'constants/api/apiConfigs';

export interface ListProjectSection {
}

export default function ListProjectSection (props: ListProjectSection) {
  const [projectList, setProjectList] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowsPerPageSelect, setRowsPerPageSelect] = React.useState('10');
  const [inputSearch, setInputSearch] = React.useState('');
  const [projectListSearch, setProjectListSearch] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL.PROJECT_ALL);
      setProjectList(response.data.data);
    } catch (error) {}
  };

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    try {
      const newValue = e.target.value;
      setInputSearch(newValue);
      const tpm = projectList.filter((item: {projectName: string, symbol: string }, index) => (item.projectName.toLowerCase().search(inputSearch.toLowerCase()) !== -1 || item.symbol.toLowerCase().search(inputSearch.toLowerCase()) !== -1));
      setProjectListSearch(tpm);
    } catch(e) {}
    
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - projectList?.length) : 0;

  const handlePrevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (inputSearch) {
      if (projectListSearch?.length > rowsPerPage && (projectListSearch?.length / rowsPerPage) > (page + 1)) setPage(page + 1);
    } else {
      if (projectList?.length > rowsPerPage && (projectList?.length / rowsPerPage) > (page + 1)) setPage(page + 1);
    }
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setRowsPerPageSelect(event.target.value as string);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <WrapperSection>
      <Container maxWidth="lg">
        <Box sx={{ width: 500, height: 60, maxWidth: '100%',}}>
          <CustomInputSearch
            fullWidth
            id="input-search"
            placeholder="Tìm dự án blockchain, mã công ty, địa chỉ ví..."
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
        </Box>
        <Grid container justifyContent="space-between">
          <Grid item mt={2}>
            <CustomButton className="active" variant="contained">Tất cả dự án</CustomButton>
            {/* <CustomButton variant="contained">Passport of Blockchain</CustomButton>
            <CustomButton variant="contained">Tài sản số</CustomButton>
            <CustomButton variant="contained">Tài sản nền</CustomButton> */}
          </Grid>
          <Grid item mt={2}>
            <Grid container justifyContent="flex-end" alignItems="center">
              <LabelSpan>Hiển thị</LabelSpan>
              <BoxCustomSelect>
                <Select
                  labelId="simple-select-show-label"
                  id="simple-select-show"
                  value={rowsPerPageSelect}
                  onChange={handleChangeSelect}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </BoxCustomSelect>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ width: '100%', height: 'auto', overflowX: 'auto'}}>
          <WrapperTable>
            <thead>
              <tr>
                <th>#</th>
                <th>Dự án</th>
                <th>Token</th>
                <th>NFT</th>
                <th>Tiêu chuẩn</th>
                <th>Nền tảng</th>
                <th>Địa chỉ Smart Contract</th>
              </tr>
            </thead>
            <tbody>
              {
                !inputSearch ?
                  (rowsPerPage > 0
                    ? projectList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : projectList
                  ).map((item, index) => {
                      return <ProjectItem key={index} project={item} index={index}></ProjectItem>
                    })
                :
                  (rowsPerPage > 0
                    ? projectListSearch.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : projectListSearch
                  ).map((item, index) => {
                      return <ProjectItem key={index} project={item} index={index}></ProjectItem>
                    })
              }
              {emptyRows > 0 && (
                <tr style={{ height: 79 * emptyRows }}>
                  <td colSpan={7} />
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                {
                  !inputSearch ?
                    <td colSpan={5}>Đang hiển thị {`${(page * rowsPerPage) === 0 ? (page * rowsPerPage) + 1 : (page * rowsPerPage)}-${(page * rowsPerPage + rowsPerPage) > projectList.length ? projectList.length : (page * rowsPerPage + rowsPerPage)}`} / {projectList.length}</td>
                  :
                    <td colSpan={5}>Đang hiển thị {projectListSearch.length} / {projectListSearch.length}</td>
                }
                
                <td colSpan={2}>
                  <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                    { page > 0 && (
                      <ButtonArrowPrev onClick={handlePrevPage}/>
                    ) }
                    <BoxContentNumberPag>{('0' + (page + 1)).slice(-2)}</BoxContentNumberPag>
                    { !inputSearch ? (
                      <>
                       {
                         (projectList?.length > rowsPerPage && (projectList?.length / rowsPerPage) > (page + 1)) && (
                          <ButtonArrowNext onClick={handleNextPage}/>
                        )
                       }
                      </>
                    ) : ( <>
                      {
                        (projectListSearch?.length > rowsPerPage && (projectListSearch?.length / rowsPerPage) > (page + 1)) && (
                         <ButtonArrowNext onClick={handleNextPage}/>
                       )
                      }
                     </> )}
                  </Grid>
                </td>
              </tr>
            </tfoot>
          </WrapperTable>
        </Box>
      </Container>
    </WrapperSection>
  );
}

const WrapperSection = styled.div`
  margin: 30px 0 20px;
  padding-top: 50px;
  @media screen and ${device.tabletL} {
    margin: 50px 0 90px;
  }
`;

const WrapperTable = styled.table`
  width: 100%;
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
    tr {
      color: #A6B0C3;
      td:last-child {
        text-align: right;
      }
    }
  }
`;

const LabelSpan = styled.span`
  font-family: 'Inter-Medium';
  margin-right: 15px;
  font-size: 18px;
  line-height: 22px;
  color: #A6B0C3;
`;

const ButtonArrowNext = styled.button`
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  background-image: url('/assets/icons/ico-table-arrow-right.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const ButtonArrowPrev = styled.button`
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  background-image: url('/assets/icons/ico-table-arrow-left.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const BoxContentNumberPag = styled.span`
  padding: 6px;
  margin: 0 8px;
  background: #FFFFFF;
  border: 1px solid #A6B0C3;
  box-sizing: border-box;
  border-radius: 8px;
`;

const CustomInputSearch = styled(TextField)({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#EFF2F5',
  },
});

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

const CustomButton = styled(Button)({
  padding: '12px 24px',
  marginRight: '10px',
  textTransform: 'none',
  boxShadow: 'none',
  lineHeight: '22px',
  fontSize: '18px',
  backgroundColor: 'transparent',
  fontFamily: 'Inter-Medium',
  border: '0',
  borderRadius: '8px',
  color: '#A6B0C3',
  '&:hover': {
    backgroundColor: '#F0F6FF',
    color: '#446DFF',
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: '#F0F6FF',
    color: '#446DFF',
    boxShadow: 'none',
  },
  '&.active': {
    backgroundColor: '#F0F6FF',
    color: '#446DFF',
    boxShadow: 'none',
  },
});