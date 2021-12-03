import * as React from 'react';
import 'chart.js/auto';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Doughnut } from "react-chartjs-2";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';

function createData(index: number, cate: string, ratio: number, price: number, quantity: number, vesting: string) {
  return { index, cate, ratio, price, quantity, vesting };
};

const rows = [
  createData(1, 'Public sale', 3, 10000, 560000, '5% unlock at TGE, 90-days cliff, 6% monthly'),
  createData(2, 'Private sale', 12, 10000, 56160000, '5% unlock at TGE, 90-days cliff, 6% monthly'),
  createData(3, 'Staking reward', 14, 10000, 56160000, '5% unlock at TGE, 90-days cliff, 6% monthly'),
  createData(4, 'Community & marketing', 27, 10000, 56160000, '5% unlock at TGE, 90-days cliff, 6% monthly'),
  createData(5, 'Team & Advisors', 3, 10000, 56160000, '5% unlock at TGE, 90-days cliff, 6% monthly'),
  createData(6, 'Lab reservers', 5, 10000, 56160000, '5% unlock at TGE, 90-days cliff, 6% monthly'),
  createData(7, 'Play to earn reward', 31, 10000, 56160000, '5% unlock at TGE, 90-days cliff, 6% monthly'),
  createData(8, 'DEX liquidity', 5, 10000, 56160000, '5% unlock at TGE, 90-days cliff, 6% monthly'),
];

export interface ChartTokenomicsProps {
}

export default function ChartTokenomics (props: ChartTokenomicsProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = {
    labels: [
      "Public sale",
      "Private sale",
      "Staking reward",
      "Community & marketing",
      "Team & Advisors",
      "Lab reservers",
      "Play to earn reward",
      "DEX liquidity",
    ],
    datasets: [
      {
        backgroundColor: [
          "#483168",
          "#00B919",
          "#685BF4",
          "#344DA3",
          "#15DAAE",
          "#AB5BF4",
          "#11B3D3",
          "#2424F4",
        ],
        data: [3, 12, 14, 27, 3, 5, 31, 5]
      }
    ]
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      // tooltip: {
      //   labels: {
      //     font: {
      //       family: "'Inter-Regular'"
      //     }
      //   }
      // }
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
          <Box sx={{ width: '350px', height: 'auto' }}>
            <Doughnut data={data} options={options} />
          </Box>
        </Grid>
        <Grid item container md={6} pl={6} pt={2}>
          {data.labels.map((label, i) => {
            return (
              <Grid key={i} container alignItems="center" mb={3}>
                <Box sx={{
                  width: '40px',
                  height: '15px',
                  backgroundColor: data.datasets[0].backgroundColor[i],
                  marginRight: '13px'
                }}></Box>
                <span className="font-20">{label}</span>
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
                  {rows.map((row) => (
                    <TableRow
                      key={row.index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{row.index}</TableCell>
                      <TableCell>{row.cate}</TableCell>
                      <TableCell align="right">{row.ratio}%</TableCell>
                      <TableCell align="right">{new Intl.NumberFormat('de-DE').format(row.price)}</TableCell>
                      <TableCell align="right">{new Intl.NumberFormat('de-DE').format(row.quantity)}</TableCell>
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