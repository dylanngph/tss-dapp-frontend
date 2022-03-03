import * as React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import QRCode from "react-qr-code";
import TitleSec from 'components/custom/TitleSec';
import BlockChain from 'components/custom/ProjectDetail/BlockChain';
import { verifyWebsite, minimizeAddressSmartContract } from 'utils/helper';
import { device } from 'styles/media-device';

export interface BlockChainProps {
  project: {
    logo: string,
    projectName: string,
    socialWebs: {
      name: string,
      link: string,
    }[],
    detail: {
      acceptDate: string,
      incorporationName: string,
      incorporationAddress: string,
    },
    symbol: string,
    standards: string[],
    communications: string[],
    smartContractAddress: string,
    websites: string[],
    nfts: {
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
      expiredAt: string,
    }[],
  }
}

export default function Information({ project }: BlockChainProps) {
  const getImgSocial = (name: string) => {
    if (!name) return;
    return name.replace("/ /g", "").toLowerCase();
  }

  return (
    <Grid container pt={2}>
      <Grid xs={12} md={project?.nfts.length ? 8 : 12}>
        <Box height={60}><TitleSec title="Thông tin dự án" /></Box>
        <Box sx={{ padding: '15px 20px', border: '1px solid #EFF2F5', borderRadius: '12px', minHeight: '402px' }} >
          <Box sx={{ display: {
            lg: 'flex',
            xs: 'inherit'
          }, borderBottom: '1px solid #EFF2F5'}} pb={2} mb={3}>
            <Box sx={{ display: {
              sm: 'flex',
              xs: 'inherit'
            } }}>
              <BoxWrapperImage>
                <img src={project?.logo} alt={project?.projectName}/>
                {/* <Image src={project?.logo} alt={project?.projectName} width={90} height={90}/> */}
              </BoxWrapperImage>
              <Box mr={2} mt={{sm: 0, xs: 2}}>
                <TitleProject>{project?.projectName}</TitleProject>
                <Grid container>
                  { project?.websites.length && (
                    <BoxSocial>
                      <a href={verifyWebsite(project.websites[0])} target="_blank" rel="noopener noreferrer">
                        <ImgSocial src="/assets/icons/socials-white/global.svg" alt="global" />
                      </a>
                    </BoxSocial>
                  )}
                  { project?.socialWebs.length && project?.socialWebs.map((entry, index) => (
                    <BoxSocial key={index}>
                      <a href={verifyWebsite(entry.link)} target="_blank" rel="noopener noreferrer">
                        <ImgSocial src={`/assets/icons/socials-white/${getImgSocial(entry.name)}.svg`} alt="social" />
                      </a>
                    </BoxSocial>
                  )) }
                </Grid>
              </Box>
            </Box>
            <Box sx={{
              width: 'fit-content'
            }}>
              <BoxCertified>
                <Box sx={{ width: 16, height: 16, marginRight: '6px', backgroundImage: 'url("/assets/icons/ico-shield-tick.svg")' }}/>
                Phát hành bởi
              </BoxCertified>
              <Box sx={{ background: '#EFF2F5', borderRadius: '10px', padding: '5px 10px', margin: '15px 15px 15px 0', display: 'flex', justifyContent: 'center' }}>
                <Image src="/assets/images/logo-tss-black.png" alt="TSS" width={68} height={30}/>
              </Box>
            </Box>
          </Box>

          <Grid container spacing={2}>
          <Grid item direction="column" xs={12} lg={4}>
            {typeof window !== "undefined" && (
              <BoxQrCode>
                <QRCode size={200} title="qr-code" value={window?.location.href} />
              </BoxQrCode>
            )}
          </Grid>
          <Grid item direction="column" xs={12} lg={8}>
            <WrapperInfoProject>
              <li>
                <Grid container justifyContent="space-between">
                  <Grid item>Ký hiệu token</Grid>
                  <Grid item>{project.symbol}</Grid>
                </Grid>
              </li>
              <li>
                <Grid container justifyContent="space-between">
                  <Grid item>Tiêu chuẩn</Grid>
                  <Grid item>{project.standards.join(", ")}</Grid>
                </Grid>
              </li>
              <li>
                <Grid container justifyContent="space-between">
                  <Grid item>Nền tảng</Grid>
                  <Grid item>{project.communications.join(", ")}</Grid>
                </Grid>
              </li>
              <li>
                <Grid container justifyContent="space-between">
                  <Grid item>Trụ sở</Grid>
                  <Grid item>{project.detail.incorporationAddress}</Grid>
                </Grid>
              </li>
              <li>
                <Grid container justifyContent="space-between">
                  <Grid item>Địa chỉ Smart Contract</Grid>
                  <Grid item>
                    <BoxCopy onClick={() => {navigator.clipboard.writeText(project.smartContractAddress)}}>{minimizeAddressSmartContract(project.smartContractAddress)}</BoxCopy>
                  </Grid>
                </Grid>
              </li>
            </WrapperInfoProject>
          </Grid>
        </Grid>
        </Box>
      </Grid>

      { project?.nfts && (
        <Grid xs={12} md={4}>
          { project?.nfts.map((nft, index) => (
            <BlockChain key={index} nft={nft} />
          )) }
        </Grid>
      )}
    </Grid>
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

const BoxWrapperImage = styled(Box)`
  display: flex;
  width: 90px;
  height: 90px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const ImgSocial = styled.img`
  width: 20px;
  height: 20px;
`;

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

const BoxCertified = styled.div`
  font-size: 12px;
  line-height: 14px;
  background: #EFF2F5;
  border-radius: 4px;
  padding: 6px;
  color: #58667E;
  display: flex;
  max-height: 25px;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  width: fit-content;
  @media screen and ${device.tabletL} {
    font-size: 14px;
    line-height: 17px;
    padding: 8px;
  }
`;

const WrapperInfoProject = styled.ul`
  list-style: none;
  background: #F6F8FA;
  border-radius: 12px;
  margin: 0;
  padding: 4px 15px;
  height: 100%;
  li {
    padding: 12px 0;
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    > div {
      > div:first-child {
        padding-right: 10px;
      }
      > div:last-child {
        color: #11142D;
        font-weight: 500;
      }
    }
  }
`;

const BoxQrCode = styled.div`
  padding: 10px;
  background-color: #F6F8FA;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const BoxCopy = styled(Box)`
  position: relative;
  padding-right: 20px;
  cursor: copy;
  color: #11142D;
  font-weight: 500;
  &:after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: url('/assets/icons/ico-copy.svg');
    top: 3px;
    right: 0;
  }
`;