/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TabUnstyled from '@mui/base/TabUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from 'styled-components';
import { device } from 'styles/media-device';

export interface InformationProps {
  project: {
    name_company: string,
    headquarters: string,
    name: string,
    unit_token: string,
    standard: string,
    basis: string,
    address_smart_contract: string,
    website: string,
    social: {
      id: number,
      icon_path: string,
      link: string,
    }[],
    qr_img_path: string,
  }
}

export default function Information ({project}: InformationProps) {

  return (
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
                <Box className="box-passport-img" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <img src="/assets/images/IOTA.png" alt="IOTA.png" />
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
                  <h3 className="title-sec">NFT Passport of Blockchain</h3>
                  <CustomButtonDetail variant="outlined" onClick={() => console.log('onClick')} startIcon={<VisibilityIcon />}>
                    Chi tiết
                  </CustomButtonDetail>
                </Grid>
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
                    <span className="block-copy">NFT ID</span>
                    <span>153979</span>
                  </BoxMoreInfo>
                  <BoxMoreInfo>
                    <span className="block-copy">Contract ID</span>
                    <span>0xE1D7CB...647278</span>
                  </BoxMoreInfo>
                  <BoxMoreInfo>
                    <span className="block-copy">TX Hash</span>
                    <span>0xE1D7CB...647278</span>
                  </BoxMoreInfo>
                </Grid>
                <Grid container mt={0} spacing={2}>
                  <Grid item lg={6} xs={12}>
                    <BoxMoreAnalytic>
                      <h5>Pháp lý</h5>
                      <span className="green">Rủi ro thấp</span>
                    </BoxMoreAnalytic>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <BoxMoreAnalytic>
                      <h5>Công nghệ</h5>
                      <span className="yellow">Có khả năng ứng dụng</span>
                    </BoxMoreAnalytic>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <BoxMoreAnalytic>
                      <h5>Giá trị xã hội </h5>
                      <span className="yellow">Có tiềm năng đóng góp cho xã hội</span>
                    </BoxMoreAnalytic>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <BoxMoreAnalytic>
                      <h5>Uy tín cộng đồng</h5>
                      <span className="red">Có một số thông tin tiêu cực</span>
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
  );
}

const WrapperTabsUnstyled = styled(TabsUnstyled)`
  width: 100%
`;

const CustomButtonTab =  styled(TabUnstyled)`
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
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .box-passport-img,
  .box-passport-content {
    height: 46%;
    border: 1px solid #EFF2F5;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.05));
  }
  .box-passport-img {
    padding: 24px 24px 0;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom: 0;
    img {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
    }
  }
  .box-passport-content {
    border-top: 0;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 24px;
    text-align: center;
    position: relative;
    &:after {
      content: '';
      width: 80%;
      height: 1px;
      position: absolute;
      top: -10%;
      left: 10%;
      border-top: 1px dashed rgba(88, 102, 126, 0.3);
    }
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
  &:after {
    content: '';
    width: 8%;
    height: 8%;
    top: 46%;
    left: -3%;
    position: absolute;
    border-radius: 50%;
    background-color: #ffffff;
    border-right: 1px solid #EFF2F5;
    filter: drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.05));
  }
  &:before {
    content: '';
    width: 8%;
    height: 8%;
    top: 46%;
    right: -3%;
    position: absolute;
    border-radius: 50%;
    background-color: #ffffff;
    border-left: 1px solid #EFF2F5;
    filter: drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.05));
  }
  @media screen and ${device.mobileL} {
    width: fit-content;
  }
`;

const NFTCardBoxPassport = styled.div`
  padding: 24px;
  background: #FFFFFF;
  border: 1px solid #EFF2F5;
  box-sizing: border-box;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  height: 100%;
  width: 100%;
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
    &.red:after{
      background: #EA3943;
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