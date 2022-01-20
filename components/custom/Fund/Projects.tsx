import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export interface ProjectsProps {
  data: {
    logo: string,
    name: string,
    round: string,
    totalCap: number,
    fundedDate: string,
    website: string,
  }[]
}

const convertTotalCap = (totalCap: number) => {
  if (!totalCap || (typeof totalCap !== 'number')) return;
  const oneM = 1000000;
  return '$' + (totalCap / oneM) + 'm';
}

const verifyWebsite = (link: string) => {
  if (!link) return '#';
  if (link.indexOf('http') === -1) {
    return `https://${link}`;
  }
  return link;
}

export default function Projects ({data}: ProjectsProps) {
  return (
    <Box pt={2} pb={2}>
      <h3 className="title-sec">Danh mục đầu tư ({data.length})</h3>
      <Grid container spacing={2}>
        {data.map(({logo, name, round, totalCap, fundedDate, website}, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <BoxProject>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Box sx={{ maxWidth: 40, '& img': { maxWidth: '100%', height: 'auto' } }}>
                    <img src={logo} alt={name} />
                  </Box>
                  <TitleBox>
                    <a href={verifyWebsite(website)} target="_blank" rel="noopener noreferrer">{name}</a>
                  </TitleBox>
                </Grid>
                <Grid item>
                  <LabelBox>{round}</LabelBox>
                </Grid>
              </Grid>
              <Box sx={{ borderBottom: '1px solid #EFF2F5', margin: '16px 0' }}></Box>
              <Grid container spacing={1}>
                <Grid item container justifyContent="center" alignItems="center" xs={6}>
                  <BoxCapitalTitle>Tổng số vốn gọi</BoxCapitalTitle>
                  <BoxCapitalContent>{convertTotalCap(totalCap)}</BoxCapitalContent>
                </Grid>
                <Grid item container justifyContent="center" alignItems="center" xs={6}>
                  <BoxCapitalTitle>Ngày gọi vốn</BoxCapitalTitle>
                  <BoxCapitalContent>{fundedDate && new Date(fundedDate).toLocaleDateString('vi-VI')}</BoxCapitalContent>
                </Grid>
              </Grid>
            </BoxProject>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const BoxProject = styled(Box)`
  border: 1px solid #EFF2F5;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 16px;
`;

const TitleBox = styled.h4`
  color: #11142D;
  font-size: 18px;
  line-height: 22px;
  margin-top: 8px;
  margin-bottom: 0;
`;

const LabelBox = styled(Box)`
  color: #58667E;
  padding: 4px 12px;
  font-size: 12px;
  line-height: 15px;
  postion: absolute;
  background-color: #EFF2F5;
  border-radius: 4px;
`;

const BoxCapitalTitle = styled(Box)`
  color: #A6B0C3;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  margin-bottom: 8px;
  width: 100%;
`;

const BoxCapitalContent = styled(Box)`
  color: #11142D;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;