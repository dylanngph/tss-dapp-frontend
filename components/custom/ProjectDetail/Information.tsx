import * as React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import QRCode from "react-qr-code";
import { device } from 'styles/media-device';

export interface BlockChainProps {
  project: {
    projectName: string,
    detail: {
      incorporationName: string,
      incorporationAddress: string,
    },
    symbol: string,
    standards: [],
    communications: [],
    smartContractAddress: string,
    websites: [],
    socialWebs: {
      name: string,
      link: string,
    }[],
  }
}

const QR_CODE = '/assets/images/qr-example.png';

export default function BlockChain ({project}: BlockChainProps) {
  return (
    <Grid container spacing={3} mb={4}>
      <Grid item container direction="column" lg={7}>
        <h3 className="title-sec">Thông tin dự án</h3>
        <WrapperInfoProject>
          <li>
            <Grid container justifyContent="space-between">
              <Grid item>Công ty chủ quản</Grid>
              <Grid item>{project.detail.incorporationName}</Grid>
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
              <Grid item>Tên gọi</Grid>
              <Grid item>{project.projectName}</Grid>
            </Grid>
          </li>
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
              <Grid item>Địa chỉ Smart Contract</Grid>
              <Grid item>{project.smartContractAddress}</Grid>
            </Grid>
          </li>
          <li>
            <Grid container justifyContent="space-between">
              <Grid item>Website</Grid>
              <Grid item>
                {
                  project.websites.map((web) => {
                    return (
                      <a style={{display: 'block'}} key={web} href={web} target="_blank">{web}</a>
                    )
                  })
                }</Grid>
            </Grid>
          </li>
          <li>
            <Grid container justifyContent="space-between">
              <Grid item>Mạng xã hội</Grid>
              <Grid item>
              {
                project.socialWebs.map(({name, link}, key) => {
                  return (
                    <Box key={key} sx={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      marginLeft: '10px',
                      display: 'inline-block',
                      padding: '3px',
                    }}>
                      <a href={link} target="_blank" rel="noreferrer">
                        <Image src={`/assets/icons/socials/${name.replaceAll(" ", "").toLowerCase()}.svg`} alt="social" width={18} height={18} />
                      </a>
                    </Box>
                  )
                })
              }
              </Grid>
            </Grid>
          </li>
        </WrapperInfoProject>
      </Grid>
      <Grid item container direction="column" lg={5}>
        <h3 className="title-sec">QR code</h3>
        <WrapperQRCode>
          {/* <Image src={QR_CODE} alt={project.projectName} width={375} height={375}/> */}
          {
            typeof window !== "undefined" &&
            <BoxQrCode>
              <QRCode value={window?.location.href} />
            </BoxQrCode>
          }
          
        </WrapperQRCode>
      </Grid>
    </Grid>
  );
}

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

const BoxQrCode = styled(Box)`
  padding: 30px;
  border-radius: 20px;
  background-color: #ffffff;
`;