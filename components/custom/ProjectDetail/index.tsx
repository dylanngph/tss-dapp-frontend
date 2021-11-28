import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from 'styled-components';

export default function ProjectDetail ({project}) {
  return (
    <Container>
      <Grid container justifyContent="space-between" pt={4} pb={4}>
        <Grid item container alignItems="center" xs={6}>
          <Box sx={{ width: 40, height: 40, marginRight: '16px' }}>
            <Image src={`/assets/images/${project.img_logo_path}`} alt={project.name} width={40} height={40}/>
          </Box>
          <TitleProject>{project.name}</TitleProject>
          <BoxCertified>
            <Box sx={{ width: 16, height: 16, marginRight: '6px', backgroundImage: 'url("/assets/icons/ico-shield-tick.svg")' }}/>
            Chứng nhận: 10/13/2020
          </BoxCertified>
        </Grid>
        <Grid item container justifyContent="flex-end" xs={6}>
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
        <Grid item xs={7}>
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
        <Grid item container direction="column" xs={5}>
          <TitleSection>QR code</TitleSection>
          <WrapperQRCode>
            <Image src={`/assets/images/${project.qr_img_path}`} alt={project.name} width={375} height={375}/>
          </WrapperQRCode>
        </Grid>
      </Grid>
    </Container>
  );
}

const TitleProject = styled.h2`
  color: rgba(0, 0, 0, 0.85);
  margin: 0;
  font-size: 24px;
  line-height: 29px;
  font-family: 'Inter-Medium';
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
  margin-left: 16px;
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

const WrapperInfoProject = styled.h3`
  list-style: none;
  background: #EFF2F5;
  border-radius: 12px;
  margin: 0;
  padding: 4px 15px 4px 40px;
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