import * as React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { device } from 'styles/media-device';

export interface BlockChainProps {
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

export default function BlockChain ({project}: BlockChainProps) {
  return (
    <Grid container spacing={3} mb={4}>
      <Grid item container direction="column" lg={7}>
        <h3 className="title-sec">Thông tin dự án</h3>
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
              <Grid item>
              {
                project.social.map(({id, link, icon_path}) => {
                  return (
                    <Box key={id} sx={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      marginLeft: '10px',
                      display: 'inline-block',
                      padding: '3px',
                    }}>
                      <a href={link} target="_blank" rel="noreferrer">
                        <Image src={icon_path} alt="social" width={18} height={18} />
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
          <Image src={project.qr_img_path} alt={project.name} width={375} height={375}/>
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