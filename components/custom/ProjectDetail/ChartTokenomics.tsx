// @ts-nocheck
import * as React from 'react';
import 'chart.js/auto';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
export interface ChartTokenomicsProps {
  tokenAllocations: {
    allocationName: string,
    rate: number,
    amount: number,
    price: number,
    vesting: string
  }[],
  dataChart: {
    labels: string[],
    datasets: {
      backgroundColor: string[],
      data: number[],
    }[]
  }
}

export default function ChartTokenomics ({tokenAllocations, dataChart}: ChartTokenomicsProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: true,
        formatter: (value:Number) => {
          return value + '%';
        },
        color: '#ffffff',
      },
    }
  };
  return (
    <Grid container pt={2} pb={2}>
      <h3 className="title-sec">Tokenomics</h3>
      <Grid container justifyContent="flex-end">
        <CustomButtonDetail variant="outlined" onClick={handleOpen} startIcon={<VisibilityIcon />}>
          Chi tiết
        </CustomButtonDetail>
      </Grid>
      <Grid container mb={4}>
        <Grid item container md={6} justifyContent="center" alignItems="center">
          <Box sx={{ width: '350px', height: 'auto', maxWidth: '70vw' }}>
            <Doughnut data={dataChart} plugins={[ChartDataLabels]} options={options} />
          </Box>
        </Grid>
        <Grid item container md={6} pt={2}>
          {dataChart.labels.map((label: string, index) => {
            return (
              <Grid key={index} item container alignItems="center" mb={3} xs={6} sm={12}>
                <Box sx={{
                  width: '15px',
                  height: '10px',
                  backgroundColor: dataChart.datasets[0].backgroundColor[index],
                  marginRight: '5px',
                  ["@media (min-width: 600px)"]: {
                    width: '40px',
                    height: '15px',
                    marginRight: '13px',
                    paddingLeft: '15px',
                  }
                }}></Box>
                <span>{label}</span>
              </Grid>
            )
          })}
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <BoxSTyleModal>
          <Grid container className="wrapper-header">
            <h2 id="parent-modal-title">Chi tiết tỉ lệ phân bổ token</h2>
          </Grid>
          <Grid container className="wrapper-body">
            <CustomTableContainer>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow style={{}}>
                    <TableCell>#</TableCell>
                    <TableCell>Hạng mục</TableCell>
                    <TableCell align="right">Tỉ lệ</TableCell>
                    <TableCell align="right">Giá bán</TableCell>
                    <TableCell align="right">Số lượng</TableCell>
                    <TableCell>Vesting</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tokenAllocations.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{index + 1}</TableCell>
                      <TableCell>{row.allocationName}</TableCell>
                      <TableCell align="right">{(row.rate).toFixed()}&#37;</TableCell>
                      <TableCell align="right">{new Intl.NumberFormat('de-DE').format(row.price)}</TableCell>
                      <TableCell align="right">{new Intl.NumberFormat('de-DE').format(row.amount)}</TableCell>
                      <TableCell>{row.vesting}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow style={{}}>
                    <TableCell></TableCell>
                    <TableCell>Tổng cộng</TableCell>
                    <TableCell align="right">100%</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </CustomTableContainer>
          </Grid>
          <Grid container className="wrapper-footer">
            <CustomButtonBlue variant="contained" onClick={handleClose}>Xong</CustomButtonBlue>
          </Grid>
        </BoxSTyleModal>
      </Modal>
    </Grid>
  );
}

const CustomButtonDetail = styled(Button)({
  padding: '4px 10px',
  textTransform: 'none',
  boxShadow: 'none',
  lineHeight: '22px',
  fontSize: '14px',
  backgroundColor: '#EFF2F5',
  border: '1px solid #EFF2F5',
  borderRadius: '4px',
  height: '32px',
  color: '#58667E',
  '&:hover': {
    backgroundColor: '#EFF2F5',
    color: '#58667E',
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: '#EFF2F5',
    color: '#58667E',
    boxShadow: 'none',
  },
  '&.active': {
    backgroundColor: '#EFF2F5',
    color: '#58667E',
    boxShadow: 'none',
  },
});

const BoxSTyleModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  max-width: 90%;
  max-height: 90%;
  background-color: #ffffff;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  .wrapper-header {
    padding: 24px;
    border-bottom: 1px solid #EFF2F5;
    h2 {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #11142D;
      margin: 0;
    }
  }
  .wrapper-body {
    height: 100%;
    overflow: auto;
    max-height: 70vh;
  }
  .wrapper-footer {
    padding: 12px 24px;
    border-top: 1px solid #EFF2F5;
    justify-content: flex-end;
  }
`;

const CustomButtonBlue = styled(Button)({
  padding: '12px 40px',
  textTransform: 'none',
  lineHeight: '19px',
  fontWeight: '600',
  backgroundColor: '#446DFF',
  fontFamily: 'Inter-Regular',
  borderRadius: '8px',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#446DFF',
    color: '#ffffff',
  },
});

const CustomTableContainer = styled(TableContainer)`
  padding: 15px 35px;
  td, th {
    color: #11142D;
  }
  td {
    font-family: 'Inter-Medium';
  }
  th {
    font-family: 'Inter-Bold';
  }
  thead {
    tr {
      background-color: #EFF2F5;
    }
  }
  tfoot {
    tr {
      background-color: #EFF2F5;
    }
    td {
      font-family: 'Inter-Bold';
    }
  }
`;