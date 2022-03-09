import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BoxDetail from 'components/custom/Fund/BoxDetail';
import Introduce from 'components/custom/Fund/Introduce';
import Projects from 'components/custom/Fund/Projects';
import { verifyWebsite, minimizeAddressSmartContract, formatDateVI } from 'utils/helper';
import styled from 'styled-components';
import QRCode from "react-qr-code";
import Image from 'next/image';
import { PASSPORT_BLOCKCHAIN } from 'constants/data/nft';

export interface FunPageProps {
  fundItem: {
    logo: string,
    name: string,
    area: string,
    establishedDate: string,
    status: string,
    description: string,
    socialWebs: {
      name: string,
      link: string,
    }[]
    projects: {
      logo: string,
      name: string,
      round: string,
      totalCap: number,
      fundedDate: string,
      website: string,
    }[]
    nft: {
      tokenId: string,
      txHash: string,
      issuedAt: string,
      expiredAt: string,
    }
  }
}

export default function FunPage({ fundItem }: FunPageProps) {
  return (
    <Container sx={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <InforAboutOrganization>Thông tin đơn vị / tổ chức đầu tư</InforAboutOrganization>
          <WrapPassportInvestmentInfo>
            <Grid sx={{ borderBottom: '1px solid #EFF2F5', marginBottom: '20px' }} container spacing={2}>
              <Grid item xs={12} sm={12} md={2} lg={2}>
                <Box sx={{ maxWidth: 86, '& img': { maxWidth: '100%', height: 'auto' } }}>
                  <img src={fundItem?.logo} alt={fundItem?.name} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TitleProject>{fundItem?.name}</TitleProject>
                <Grid container>
                  {fundItem.socialWebs && fundItem.socialWebs.map(({ name, link }, index) => (
                    <BoxSocial key={index}>
                      <a href={verifyWebsite(link)} target="_blank" rel="noopener noreferrer">
                        <ImgSocial src={`/assets/icons/socials-white/${name && name?.replaceAll(" ", "").toLowerCase()}.svg`} alt="social" />
                      </a>
                    </BoxSocial>
                  ))}
                </Grid>
              </Grid>
              <Grid sx={{ paddingTop: '16px' }} item xs={12} sm={12} md={4} lg={4}>
                <Box sx={{ display: "flex ", alignItems: "center", justifyContent: "center", background: '#EFF2F5', borderRadius: '10px', padding: '5px 10px', maxWidth: '160px' }}>
                  <Image src='/assets/images/shield-tick.png' alt='shield-tick' width='25' height='25' />
                  Phát hành bởi
                </Box>
                <Box>
                  {
                    PASSPORT_BLOCKCHAIN.listImg.map(({ id, imgPath, name }) => (
                      name === 'logo-tss'
                        ?
                        <Box key={id} sx={{ display: "inline-block", background: '#EFF2F5', borderRadius: '10px', padding: '5px 10px', margin: '15px 15px 15px 0' }}>
                          <Image src={imgPath} alt={name} width={68} height={30} />
                        </Box>
                        :
                        null
                    ))
                  }
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <WrapperQRCode>
                  {typeof window !== "undefined" && (
                    <QRCode title="qr-code" value={window?.location.href} size={180} />
                  )}
                </WrapperQRCode>
              </Grid>
              <Grid item container spacing={2} xs={12} sm={12} md={8} lg={8}>
                {/* <BoxDetail title="Trạng thái" content={fundItem?.status} /> */}
                <BoxDetail title="Dạng đầu tư" content={fundItem?.area} />
                <BoxDetail title="Năm thành lập" content={new Date(fundItem?.establishedDate).getFullYear().toString()} />
              </Grid>
            </Grid>
          </WrapPassportInvestmentInfo>
        </Grid>
        {
          fundItem.nft && Object.keys(fundItem.nft).length ? 
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <PassportBlockchain>Passport of Blockchain</PassportBlockchain>
              <WrapPassportInvestmentUnit>
                <Box sx={{ position: 'relative', '& img': { maxWidth: '100%', height: 'auto', width: '100%' } }}>
                  <img src='/assets/images/PassportofInvestmentUnit.png' alt='PassportofInvestmentUnit' />
                  <SealNft>SEAL NFT</SealNft>
                </Box>
                <WrapPassportContent>
                  <TitlePassport>Passport of Investment</TitlePassport>
                  <Box>
                    <PassportInfoItem>
                      <h4>Token ID</h4>
                      <p>{fundItem?.nft?.tokenId}</p>
                    </PassportInfoItem>
                    <PassportInfoItem>
                      <h4>Contract ID</h4>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p><a href={process.env.NEXT_PUBLIC_LINK_VC_BS_SCAN} target="_blank" rel="noopener noreferrer">{minimizeAddressSmartContract(process.env.NEXT_PUBLIC_CONTRACT_ID_VC)}</a></p>
                        <Image src='/assets/images/copy.svg' onClick={() => { navigator.clipboard.writeText(process.env.NEXT_PUBLIC_CONTRACT_ID_VC ? process.env.NEXT_PUBLIC_CONTRACT_ID_VC : '0xE447b22B28905d3FF1E1486E9Ba156701606e70d') }} alt='copy' width='16' height='16' />
                      </Box>
                    </PassportInfoItem>
                    <PassportInfoItem>
                      <h4>TX Hash</h4>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <p>{minimizeAddressSmartContract(fundItem?.nft?.txHash)}</p>
                        <Image src='/assets/images/copy.svg' onClick={() => { navigator.clipboard.writeText(fundItem?.nft?.txHash) }} alt='copy' width='16' height='16' />
                      </Box>
                    </PassportInfoItem>
                    <PassportInfoItem>
                      <h4>Ngày phát hành</h4>
                      <p>{formatDateVI(fundItem?.nft?.issuedAt)}</p>
                    </PassportInfoItem>
                    <PassportInfoItem>
                      <h4>Ngày hết hạn</h4>
                      <p>{formatDateVI(fundItem?.nft?.expiredAt)}</p>
                    </PassportInfoItem>
                  </Box>
                </WrapPassportContent>
              </WrapPassportInvestmentUnit>
            </Grid>
            :
            null
        }

      </Grid>

      <Introduce description={fundItem?.description} />

      <Projects data={fundItem?.projects} />
    </Container>
  );
}

const InforAboutOrganization = styled(Box)`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #11142D;
  margin: 0;
  margin-bottom: 21px;
`

const PassportBlockchain = styled(Box)`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #11142D;
  background: #EFF2F5;
  border-radius: 8px;
  padding: 9px 17px 7px;
  display: inline-block;
  margin-bottom: 6px;
`

const TitleProject = styled.h2`
  color: rgba(0, 0, 0, 0.85);
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  font-family: 'Inter-Medium';
`;

const WrapPassportInvestmentInfo = styled(Box)`
  background: #FFFFFF;
  border: 1px solid #EFF2F5;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 28px;
`

const SealNft = styled(Box)`
  position: absolute;
  font-weight: 900;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #446DFF;
  padding: 5px;
  background: #F0F6FF;
  border-radius: 4px;
  top: 12px;
  left: 20px;
`

const WrapPassportContent = styled(Box)`
  padding: 0 20px;
  background-image: url('/assets/images/TSSseal.png');
  background-repeat: no-repeat;
  background-position-x: right;
  padding-bottom: 18px;
`

const TitlePassport = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #11142D;
  margin: 0;
  margin-bottom: 16px;
`

const WrapPassportInvestmentUnit = styled(Box)`
  background-image: url('/assets/images/Subtract.png');
  background-repeat: no-repeat;
  background-size: 100%;
`

const PassportInfoItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #58667E;
    margin: 0;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #11142D;
    margin: 0;
  }

  img {
    cursor: pointer;
  }
`

const BoxSocial = styled(Box)`
  width: 36px;
  height: 36px;
  background: #446DFF;
  border-radius: 50%;
  padding: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const WrapperQRCode = styled.div`
  width: 100%;
  background: #EFF2F5;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const BoxQrCode = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: #ffffff;
`;

const ImgSocial = styled.img`
  width: 20px;
  height: 20px;
`;