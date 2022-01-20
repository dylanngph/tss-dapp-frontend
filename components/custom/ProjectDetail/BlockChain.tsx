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
import styled from 'styled-components';
import { formatDateVI, minimizeAddressSmartContract } from 'utils/helper';
import { LegalProp, TechLevelProp, SocialValueProp, CommunRepuProp, LegalPropColor, TechLevelPropColor, SocialValuePropColor, CommunRepuPropColor } from 'constants/data/nft';
import { device } from 'styles/media-device';

export interface InformationProps {
  nft: {
    id: string,
    tokenId: string,
    imageId: string,
    txHash: string,
    owner: string,
    issuedAt: string,
    legalId: string,
    techLevelId: string,
    socialValueId: string,
    communRepuId: string,
  }
}

const PASSPORT_BLOCKCHAIN = {
  logo: '/assets/images/IOTA.png',
  supplyDate: '24/12/2020',
  listImg: [
    {
      id: 1,
      imgPath: '/assets/images/logo-tss-black.png',
      name: 'logo-tss',
    },
    {
      id: 2,
      imgPath: '/assets/images/logo-bas.png',
      name: 'logo-bas',
    },
    {
      id: 3,
      imgPath: '/assets/images/logo-vcb.png',
      name: 'logo-vcb',
    }
  ],
  NFT_ID: '153979',
  Contract_ID: '0xc1346f105791ff91578737377b65f98de1025fa4',
  TX_Hash: '0xE1D7CB5791FF9157873DW3F377B65647278',
}

export default function BlockChain ({nft}: InformationProps) {

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
                  <img src={PASSPORT_BLOCKCHAIN.logo} alt="PASSPORT IMG" />
                </Box>
                <div className="box-passport-content">
                  <h3>SEAL NFT</h3>
                  <h4>Passport of Blockchain</h4>
                  <div className="date">Ngày cấp: {formatDateVI(nft?.issuedAt)}</div>
                </div>
              </CardBoxPassport>
            </Grid>
            <Grid item container lg={9} justifyContent="center">
              <NFTCardBoxPassport>
                <Grid container>
                  <h3 className="title-sec">NFT Passport of Blockchain</h3>
                </Grid>
                <Grid container>
                  {
                    PASSPORT_BLOCKCHAIN.listImg.map(({id, imgPath, name}) => (
                      <Box key={id} sx={{ background: '#EFF2F5', borderRadius: '10px', padding: '5px 10px', margin: '15px 15px 15px 0' }}>
                        <Image src={imgPath} alt={name} width={68} height={30}/>
                      </Box>
                    ))
                  }
                  <BoxMoreInfo onClick={() => {navigator.clipboard.writeText(nft.tokenId)}}>
                    <span className="block-copy">TOKEN ID</span>
                    <span>{nft.tokenId}</span>
                  </BoxMoreInfo>
                  <BoxMoreInfo>
                    <span onClick={() => {navigator.clipboard.writeText(PASSPORT_BLOCKCHAIN.Contract_ID)}} className="block-copy">Contract ID</span>
                    <span><a href="https://testnet.bscscan.com/token/0xc1346f105791ff91578737377b65f98de1025fa4" target="_blank" rel="noopener noreferrer">{minimizeAddressSmartContract(PASSPORT_BLOCKCHAIN.Contract_ID)}</a></span>
                  </BoxMoreInfo>
                  <BoxMoreInfo onClick={() => {navigator.clipboard.writeText(nft.txHash)}}>
                    <span className="block-copy">TX Hash</span>
                    <span>{minimizeAddressSmartContract(nft.txHash)}</span>
                  </BoxMoreInfo>
                </Grid>
                <Grid container mt={0} spacing={2}>
                  <Grid item lg={6} xs={12}>
                    <BoxMoreAnalytic>
                      <h5>Pháp lý</h5>
                      <span className={LegalPropColor[nft.legalId]}>{ LegalProp[nft.legalId] }</span>
                    </BoxMoreAnalytic>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <BoxMoreAnalytic>
                      <h5>Công nghệ</h5>
                      <span className={TechLevelPropColor[nft.techLevelId]}>{ TechLevelProp[nft.techLevelId] }</span>
                    </BoxMoreAnalytic>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <BoxMoreAnalytic>
                      <h5>Giá trị xã hội </h5>
                      <span className={SocialValuePropColor[nft.socialValueId]}>{ SocialValueProp[nft.socialValueId] }</span>
                    </BoxMoreAnalytic>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <BoxMoreAnalytic>
                      <h5>Uy tín cộng đồng</h5>
                      <span className={CommunRepuPropColor[nft.communRepuId]}>{ CommunRepuProp[nft.communRepuId] }</span>
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
    font-weight: 700;
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
    height: 50%;
    background: #FFFFFF;
    border: 1px solid #EFF2F5;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.05));
  }
  .box-passport-img {
    padding: 24px;
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
      top: 0;
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
      margin-top: 30px;
    }
  }
  // &:after {
  //   content: '';
  //   width: 8%;
  //   height: 8%;
  //   top: 46%;
  //   left: -3%;
  //   position: absolute;
  //   border-radius: 50%;
  //   background-color: #ffffff;
  //   border-right: 1px solid #EFF2F5;
  //   filter: drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.05));
  // }
  // &:before {
  //   content: '';
  //   width: 8%;
  //   height: 8%;
  //   top: 46%;
  //   right: -3%;
  //   position: absolute;
  //   border-radius: 50%;
  //   background-color: #ffffff;
  //   border-left: 1px solid #EFF2F5;
  //   filter: drop-shadow(0px 4px 17px rgba(0, 0, 0, 0.05));
  // }
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
  cursor: copy;
  .block-copy {
    position: relative;
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
    min-width: 80px;
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