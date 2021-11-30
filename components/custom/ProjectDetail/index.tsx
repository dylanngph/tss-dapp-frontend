import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import Slider from "react-slick";
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { device } from 'styles/media-device';

function createData(index, cate, ratio, price, quantity, vesting) {
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

export default function ProjectDetail ({project}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  var settingsTeam = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
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
      tooltip: {
        labels: {
          font: {
            family: "'Inter-Regular'"
          }
        }
      }
    }
  };
  return (
    <Container>
      <Grid container justifyContent="space-between" pt={4} pb={4}>
        <Grid item container alignItems="center" sm={6}>
          <Box sx={{ width: 40, height: 40, marginRight: '16px' }}>
            <Image src={`/assets/images/${project.img_logo_path}`} alt={project.name} width={40} height={40}/>
          </Box>
          <TitleProject>{project.name}</TitleProject>
          <BoxCertified>
            <Box sx={{ width: 16, height: 16, marginRight: '6px', backgroundImage: 'url("/assets/icons/ico-shield-tick.svg")' }}/>
            Chứng nhận: 10/13/2020
          </BoxCertified>
        </Grid>
        <Grid item container justifyContent="flex-end" sm={6}>
          <BoxButton>
            <Box sx={{ width: 24, height: 24, marginRight: '10px', backgroundImage: 'url("/assets/icons/ico-paperclip.svg")' }}/>
            Whitepaper
          </BoxButton>
          <BoxButton>
            <Box sx={{ width: 24, height: 24, marginRight: '10px', backgroundImage: 'url("/assets/icons/ico-global.svg")' }}/>
            Website
          </BoxButton>
        </Grid>
      </Grid>
      <Grid container spacing={3} mb={4}>
        <Grid item container direction="column" lg={7}>
          <TitleSection>Thông tin dự án</TitleSection>
          <WrapperInfoProject>
            <li>
              <Grid container justifyContent="space-between">
                <Grid item>Công ty chủ quản</Grid>
                <Grid item>{project.name_company}</Grid>
              </Grid>
            </li>
            <li>
              <Grid container justifyContent="space-between">
                <Grid item>Trụ sở</Grid>
                <Grid item>{project.headquarters}</Grid>
              </Grid>
            </li>
            <li>
              <Grid container justifyContent="space-between">
                <Grid item>Tên gọi</Grid>
                <Grid item>{project.name}</Grid>
              </Grid>
            </li>
            <li>
              <Grid container justifyContent="space-between">
                <Grid item>Ký hiệu token</Grid>
                <Grid item>{project.unit_token}</Grid>
              </Grid>
            </li>
            <li>
              <Grid container justifyContent="space-between">
                <Grid item>Tiêu chuẩn</Grid>
                <Grid item>{project.standard}</Grid>
              </Grid>
            </li>
            <li>
              <Grid container justifyContent="space-between">
                <Grid item>Nền tảng</Grid>
                <Grid item>{project.basis}</Grid>
              </Grid>
            </li>
            <li>
              <Grid container justifyContent="space-between">
                <Grid item>Địa chỉ Smart Contract</Grid>
                <Grid item>{project.address_smart_contract}</Grid>
              </Grid>
            </li>
            <li>
              <Grid container justifyContent="space-between">
                <Grid item>Website</Grid>
                <Grid item><a href="project.website" target="_blank">{project.website}</a></Grid>
              </Grid>
            </li>
            <li>
              <Grid container justifyContent="space-between">
                <Grid item>Mạng xã hội</Grid>
                <Grid item>{project.website}</Grid>
              </Grid>
            </li>
          </WrapperInfoProject>
        </Grid>
        <Grid item container direction="column" lg={5}>
          <TitleSection>QR code</TitleSection>
          <WrapperQRCode>
            <Image src={`/assets/images/${project.qr_img_path}`} alt={project.name} width={375} height={375}/>
          </WrapperQRCode>
        </Grid>
      </Grid>
      <Grid container>
        <WrapperTabsUnstyled defaultValue={0}>
          <TabsListUnstyled>
            <CustomButtonTab>Passport of Blockchain</CustomButtonTab>
            <CustomButtonTab>Tài sản số</CustomButtonTab>
            <CustomButtonTab>Tài sản nền</CustomButtonTab>
          </TabsListUnstyled>
          <TabPanelUnstyled value={0}>
            <Grid container mt={0} spacing={2}>
              <Grid item container lg={3} justifyContent="center">
                <CardBoxPassport>
                  <Box sx={{ width: '100%', height: 172, display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
                    <Image src="/assets/images/IOTA.png" alt="IOTA.png" width={172} height={172}/>
                  </Box>
                  <div className="box-passport-content">
                    <h3>SEAL NFT</h3>
                    <h4>Passport of Blockchain</h4>
                    <p>Blockchain project profile</p>
                    <div className="date">Ngày cấp: 24/12/2022</div>
                  </div>
                </CardBoxPassport>
              </Grid>
              <Grid item container lg={9} justifyContent="center">
                <NFTCardBoxPassport>
                  <Grid container justifyContent="space-between">
                    <TitleSection>NFT Passport of Blockchain</TitleSection>
                    <CustomButtonDetail variant="outlined" onClick={handleOpen} startIcon={<VisibilityIcon />}>
                      Chi tiết
                    </CustomButtonDetail>
                  </Grid>
                  <div className="wrapper-analytic">
                    <span>Phân tích số liệu</span>
                    <span>Đánh giá</span>
                  </div>
                  <Grid container>
                    <Box sx={{ background: '#EFF2F5', borderRadius: '10px', padding: '5px 10px', margin: '15px 15px 15px 0' }}>
                      <Image src="/assets/images/logo-tss.png" alt="logo-tss.png" width={68} height={30}/>
                    </Box>
                    <Box sx={{ background: '#EFF2F5', borderRadius: '10px', padding: '5px 10px', margin: '15px 15px 15px 0' }}>
                      <Image src="/assets/images/logo-bas.png" alt="logo-bas.png" width={68} height={30}/>
                    </Box>
                    <Box sx={{ background: '#EFF2F5', borderRadius: '10px', padding: '5px 10px', margin: '15px 15px 15px 0' }}>
                      <Image src="/assets/images/logo-vcb.png" alt="logo-vcb.png" width={68} height={30}/>
                    </Box>
                    <BoxMoreInfo>
                      <span>Ngày cấp</span>
                      <span>06/05/2022</span>
                    </BoxMoreInfo>
                    <BoxMoreInfo>
                      <span className="block-copy">NFT ID</span>
                      <span>153979</span>
                    </BoxMoreInfo>
                    <BoxMoreInfo>
                      <span className="block-copy">Contract ID</span>
                      <span>0xE1D7CB...647278</span>
                    </BoxMoreInfo>
                  </Grid>
                  <Grid container mt={0} spacing={2}>
                    <Grid item lg={4} xs={12}>
                      <BoxMoreAnalytic>
                        <h5>Pháp lý</h5>
                        <span className="green">Rủi ro thấp</span>
                      </BoxMoreAnalytic>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                      <BoxMoreAnalytic>
                        <h5>Công nghệ</h5>
                        <span className="yellow">Có khả năng ứng dụng</span>
                      </BoxMoreAnalytic>
                    </Grid>
                    <Grid item lg={4} xs={12}>
                      <BoxMoreAnalytic>
                        <h5>Giá trị xã hội </h5>
                        <span className="green">Có tiềm năng đóng góp cho xã hội</span>
                        <h5>Uy tín cộng đồng</h5>
                        <span className="yellow">Có một số thông tin tiêu cực</span>
                      </BoxMoreAnalytic>
                    </Grid>
                  </Grid>
                </NFTCardBoxPassport>
              </Grid>
            </Grid>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={1}>
            <BoxUpdating>
              <Grid container direction="column" justifyContent="center" alignItems="center" p={6}>
                <Image src="/assets/images/updating.png" alt="updating.png" width={231} height={222}/>
                <p>Thông tin đang cập nhật và sẽ sớm xuất hiện</p>
              </Grid>
            </BoxUpdating>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={2}>
            <BoxUpdating>
              <Grid container direction="column" justifyContent="center" alignItems="center" p={6}>
                <Image src="/assets/images/updating.png" alt="updating.png" width={231} height={222}/>
                <p>Thông tin đang cập nhật và sẽ sớm xuất hiện</p>
              </Grid>
            </BoxUpdating>
          </TabPanelUnstyled>
        </WrapperTabsUnstyled>
      </Grid>
      <Grid container pt={2} pb={2}>
        <TitleSection>Giới thiệu</TitleSection>
        <PSection>Jade Labs là một công ty nghiên cứu & phát triển blockchain tập trung vào việc tạo ra sản phẩm khác biệt nhất để đáp ứng sự hài lòng của khách hàng trong thị trường tiền điện tử. Chúng tôi có đội ngũ trẻ trung, năng động và các thành viên nòng cốt có nhiều kinh nghiệm phát triển các dự án blockchain, chúng tôi cam kết mang đến cho khách hàng những giá trị thiết thực, sự hài lòng của bạn là thành công của chúng tôi</PSection>
      </Grid>
      <Grid container pt={2} pb={2}>
        <TitleSection>Tokenomics</TitleSection>
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
                <Grid container alignItems="center" mb={3}>
                  <Box sx={{ width: '40px', height: '15px', backgroundColor: data.datasets[0].backgroundColor[i], marginRight: '13px' }}></Box>
                  <span className="font-20">{label}</span>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <TitleSection>Đối tác của Jade Labs</TitleSection>
        <CustomSlider {...settings}>
          <div>
            <Box sx={{padding: '0 10px'}}>
              <img src="/assets/images/image-slide-1.png" alt="image-slide-1.png"/>
            </Box>
          </div>
          <div>
            <Box sx={{padding: '0 10px'}}>
              <img src="/assets/images/image-slide-5.png" alt="image-slide-1.png"/>
            </Box>
          </div>
          <div>
            <Box sx={{padding: '0 10px'}}>
              <img src="/assets/images/image-slide-3.png" alt="image-slide-1.png"/>
            </Box>
          </div>
          <div>
            <Box sx={{padding: '0 10px'}}>
              <img src="/assets/images/image-slide-4.png" alt="image-slide-1.png"/>
            </Box>
          </div>
          <div>
            <Box sx={{padding: '0 10px'}}>
              <img src="/assets/images/image-slide-2.png" alt="image-slide-1.png"/>
            </Box>
          </div>
          <div>
            <Box sx={{padding: '0 10px'}}>
              <img src="/assets/images/image-slide-4.png" alt="image-slide-1.png"/>
            </Box>
          </div>
        </CustomSlider>
      </Grid>
      <Grid container mt={2} mb={8}>
        <TitleSection>Đội ngũ Jadelabs</TitleSection>
        <CustomSlider {...settingsTeam}>
          <div>
            <BoxTeam>
              <div className="box-team-image">
                <img src="/assets/images/team-avatar.png" alt="team-avatar.png"/>
              </div>
              <div className="box-team-content">
                <h6>Bessie Cooper</h6>
                <span>Chief executive officer JadeLabs</span>
              </div>
            </BoxTeam>
          </div>
          <div>
            <BoxTeam>
              <div className="box-team-image">
                <img src="/assets/images/team-avatar.png" alt="team-avatar.png"/>
              </div>
              <div className="box-team-content">
                <h6>Bessie Cooper</h6>
                <span>Chief executive officer JadeLabs</span>
              </div>
            </BoxTeam>
          </div>
          <div>
            <BoxTeam>
              <div className="box-team-image">
                <img src="/assets/images/team-avatar.png" alt="team-avatar.png"/>
              </div>
              <div className="box-team-content">
                <h6>Bessie Cooper</h6>
                <span>Chief executive officer JadeLabs</span>
              </div>
            </BoxTeam>
          </div>
          <div>
            <BoxTeam>
              <div className="box-team-image">
                <img src="/assets/images/team-avatar.png" alt="team-avatar.png"/>
              </div>
              <div className="box-team-content">
                <h6>Bessie Cooper</h6>
                <span>Chief executive officer JadeLabs</span>
              </div>
            </BoxTeam>
          </div>
          <div>
            <BoxTeam>
              <div className="box-team-image">
                <img src="/assets/images/team-avatar.png" alt="team-avatar.png"/>
              </div>
              <div className="box-team-content">
                <h6>Bessie Cooper</h6>
                <span>Chief executive officer JadeLabs</span>
              </div>
            </BoxTeam>
          </div>
          <div>
            <BoxTeam>
              <div className="box-team-image">
                <img src="/assets/images/team-avatar.png" alt="team-avatar.png"/>
              </div>
              <div className="box-team-content">
                <h6>Bessie Cooper</h6>
                <span>Chief executive officer JadeLabs</span>
              </div>
            </BoxTeam>
          </div>
        </CustomSlider>
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
            <CustomTableContainer component={Paper}>
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
    </Container>
  );
}

const TitleProject = styled.h2`
  color: rgba(0, 0, 0, 0.85);
  margin: 0;
  font-size: 24px;
  line-height: 29px;
  font-family: 'Inter-Medium';
  margin-right: 16px;
`;

const BoxCertified = styled.div`
  font-size: 14px;
  line-height: 17px;
  background: #EFF2F5;
  border-radius: 4px;
  padding: 8px;
  color: #58667E;
  display: flex;
  max-height: 25px;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

const BoxButton = styled.button`
  background: #EFF2F5;
  border-radius: 4px;
  font-size: 14px;
  line-height: 17px;
  color: #58667E;
  padding: 8px 12px;
  border: 0;
  display: flex;
  max-height: 40px;
  justify-content: center;
  align-items: center;
  font-family: 'Inter-Medium';
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const TitleSection = styled.h3`
  font-size: 24px;
  line-height: 29px;
  color: #11142D;
  margin: 0 0 15px;
`;

const WrapperInfoProject = styled.ul`
  list-style: none;
  background: #EFF2F5;
  border-radius: 12px;
  margin: 0;
  padding: 4px 15px;
  li {
    padding: 20px 0;
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    > div {
      > div:last-child {
        color: #11142D;
      }
    }
    &:not(:last-child) {
      border-bottom: 1px solid #A6B0C3;
    }
  }
  @media screen and ${device.laptopM} {
    padding: 4px 15px 4px 40px;
  }
`;

const WrapperQRCode = styled.div`
  flex: 1;
  background: #EFF2F5;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const WrapperTabsUnstyled = styled(TabsUnstyled)`
  width: 100%
`;

const CustomButtonTab =  styled(TabUnstyled)`\
  color: #58667E;
  font-size: 18px;
  margin: 0;
  line-height: 29px;
  font-family: 'Inter-Medium';
  background: transparent;
  border-radius: 8px;
  border: 0;
  padding: 12px 24px;
  cursor: pointer;
  &.Mui-selected {
    font-size: 24px;
    color: rgba(0, 0, 0, 0.85);
    background: #EFF2F5;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const CardBoxPassport = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFF2F5;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 24px;
  filter: drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.05));
  position: relative;
  height: 100%;
  .box-passport-content {
    padding-top: 45px;
    border-top: 1px dashed rgba(88, 102, 126, 0.3);
    text-align: center;
    h3 {
      font-weight: 900;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      color: #446DFF;
      margin: 0 0 6px;
    }
    h4 {
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      color: #11142D;
      margin: 0;
    }
    p {
      color: #58667E;
      font-family: 'Inter-Regular';
    }
    .date {
      font-family: 'Inter-Regular';
      background: #EFF2F5;
      border-radius: 4px;
      font-size: 14px;
      padding: 4px 8px;
      display: inline-block;
    }
  }
  // &:after {
  //   content: '';
  //   width: 36px;
  //   height: 36px;
  //   top: 196px;
  //   left: -18px;
  //   position: absolute;
  //   border-radius: 50%;
  //   background-color: #ffffff;
  //   border-right: 1px solid #EFF2F5;
  // }
  // &:before {
  //   content: '';
  //   width: 36px;
  //   height: 36px;
  //   top: 196px;
  //   right: -18px;
  //   position: absolute;
  //   border-radius: 50%;
  //   background-color: #ffffff;
  //   border-left: 1px solid #EFF2F5;
  // }
`;

const NFTCardBoxPassport = styled.div`
  padding: 24px;
  background: #FFFFFF;
  border: 1px solid #EFF2F5;
  box-sizing: border-box;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  height: 100%;
  .wrapper-analytic {
    margin-top: 10px;
    @media screen and ${device.laptopM} {
      margin-top: 0;
    }
    span {
      font-family: 'Inter-Regular';
      background: #EFF2F5;
      border-radius: 4px;
      font-size: 14px;
      padding: 4px 8px;
      display: inline-block;
      margin-right: 12px;
    }
  }
`;

const BoxMoreInfo = styled(Box)`
  border-left: 1px solid #D4D4D5;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px 0;
  .block-copy {
    position: relative;
    cursor: copy;
    min-width: 60px;
    &:after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background-image: url('/assets/icons/ico-copy.svg');
      margin-left: 3px;
    }
  }
  span:first-child {
    font-size: 14px;
    line-height: 17px;
    color: #58667E;
  }
  span:last-child {
    color: #11142D;
  }
`;

const BoxMoreAnalytic = styled.div`
  background: #EFF2F5;
  border-radius: 12px;
  padding: 15px;
  height: 100%;
  h5 {
    padding-left: 20px;
    position: relative;
    margin: 0 0 20px;
    font-size: 18px;
    line-height: 22px;
    color: #58667E;
    &:after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 2px;
      left: 0;
      background-image: url('/assets/icons/ico-info-circle.svg');
    }
  }
  span {
    padding-left: 24px;
    margin-bottom: 24px;
    line-height: 24px;
    display: block;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 16px;
      height: 24px;
      top: 0;
      left: 0;
      border-radius: 4px;
    }
    &.green:after{
      background: #16C784;
    }
    &.yellow:after{
      background: #EED344;
    }
  }
`;

const BoxUpdating =styled.div`
  margin-top: 15px;
  padding: 24px;
  background: #FFFFFF;
  border: 1px solid #EFF2F5;
  box-sizing: border-box;
  box-shadow: 0px 4px 17px rgb(0 0 0 / 5%);
  border-radius: 12px;
  min-height: 440px;
  p {
    color: #A6B0C3;
  }
`;

const PSection = styled.p`
  font-family: 'Inter-Regular';
  color: #58667E;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

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

const CustomSlider = styled(Slider)`
  width: 100%;
  margin-bottom: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  .slick-dots li button:before {
    color: #A6B0C3;
    font-size: 12px;
  }
  .slick-dots li.slick-active button:before {
    color: #446DFF;
  }
  .slick-slide img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
`;

const BoxTeam = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFF2F5;
  box-sizing: border-box;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 16px;
  margin: 12px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 15px;
    width: calc(100% - 30px);
    height: 100px;
    background: #FFFFFF;
    border: 1px solid #EFF2F5;
    box-sizing: border-box;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    z-index: -1;
  }
  .box-team-image {
    width: 86px;
    height: 86px;
    margin: 0 auto 12px;
    img {
      border-radius: 50%;
    }
  }
  .box-team-content {
    text-align: center;
    h6 {
      font-size: 24px;
      line-height: 29px;
      color: #446DFF;
      margin: 0 auto 12px;
    }
    span {
      font-family: 'Inter-Regular';
      color: #58667E;
    }
  }
`;

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