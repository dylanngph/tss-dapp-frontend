import * as React from 'react';
// import Image from 'next/image';
import { Grid, Box } from '@mui/material';
import styled from 'styled-components';
// import { device } from 'styles/media-device';

export interface HeaderBoxProps {
  project: {
    logo: string,
    detail: {
      acceptDate: string,
    },
    projectName: string,
  }
}

export default function HeaderBox ({project}: HeaderBoxProps) {
  return (
    <Grid container justifyContent="space-between" pt={3} pb={3}>
      <Grid item container alignItems="center" justifyContent="space-between" md="auto" sm={12} pt={1}>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <BoxWrapperImage>
            <img src={project?.logo} alt={project?.projectName}/>
          </BoxWrapperImage>
          <TitleProject>{project?.projectName}</TitleProject>
        </Box>
        {/* <BoxCertified>
          <Box sx={{ width: 16, height: 16, marginRight: '6px', backgroundImage: 'url("/assets/icons/ico-shield-tick.svg")' }}/>
          Chứng nhận: {project?.detail?.acceptDate}
        </BoxCertified> */}
      </Grid>
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
  width: 40px;
  height: 40px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

// const BoxCertified = styled.div`
//   font-size: 12px;
//   line-height: 14px;
//   background: #EFF2F5;
//   border-radius: 4px;
//   padding: 6px;
//   color: #58667E;
//   display: flex;
//   max-height: 25px;
//   justify-content: center;
//   align-items: center;
//   margin: 5px 0;
//   @media screen and ${device.tabletL} {
//     font-size: 14px;
//     line-height: 17px;
//     padding: 8px;
//   }
// `;