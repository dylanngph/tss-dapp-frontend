import * as React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export interface ProjectsProps {
  data: {
    image: string,
    name: string,
    type: string,
    totalAmount: number,
    dateCallCapital: string,
  }[]
}

export default function Projects ({data}: ProjectsProps) {
  return (
    <Box pt={2} pb={2}>
      <h3 className="title-sec">Danh mục đầu tư ({data.length})</h3>
      <Grid container spacing={2}>
        {data.map(({image, name, type, totalAmount, dateCallCapital}, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <BoxProject>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Image src={image} alt={name} width={40} height={40} />
                  <TitleBox>{name}</TitleBox>
                </Grid>
                <Grid item>
                  <LabelBox>{type}</LabelBox>
                </Grid>
              </Grid>
              <Box sx={{ borderBottom: '1px solid #EFF2F5', margin: '16px 0' }}></Box>
              <Grid container spacing={1}>
                <Grid item container justifyContent="center" alignItems="center" xs={6}>
                  <BoxCapitalTitle>Tổng số vốn gọi</BoxCapitalTitle>
                  <BoxCapitalContent>{'$' + totalAmount + 'm'}</BoxCapitalContent>
                </Grid>
                <Grid item container justifyContent="center" alignItems="center" xs={6}>
                  <BoxCapitalTitle>Ngày gọi vốn</BoxCapitalTitle>
                  <BoxCapitalContent>{dateCallCapital}</BoxCapitalContent>
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