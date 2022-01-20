import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BoxDetail from 'components/custom/Fund/BoxDetail';
import Introduce from 'components/custom/Fund/Introduce';
import Projects from 'components/custom/Fund/Projects';
import { verifyWebsite } from 'utils/helper';
import styled from 'styled-components';

export interface FunPageProps {
  fundItem: {
    logo: string,
    name: string,
    area: string,
    establishedDate: string,
    state: string,
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
  }
}

export default function FunPage({fundItem}: FunPageProps) {
  return (
    <Container sx={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <Box sx={{ maxWidth: 86, '& img': { maxWidth: '100%', height: 'auto' } }}>
                <img src={fundItem?.logo} alt={fundItem?.name} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={10} lg={10}>
              <TitleProject>{fundItem?.name}</TitleProject>
              <Grid container>
                {/* { fundItem?.socialWebs.map(({name, link}, index) => (
                  <BoxSocial key={index}>
                    <a href={verifyWebsite(link)} target="_blank" rel="noopener noreferrer">
                      <ImgSocial src={`/assets/icons/socials-white/${name.replaceAll(" ", "").toLowerCase()}.svg`} alt="social" />
                    </a>
                  </BoxSocial>
                )) } */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={12} md={7} lg={7} spacing={2}>
          <BoxDetail title="Dạng đầu tư" content={fundItem?.area} />
          <BoxDetail title="Năm thành lập" content={new Date(fundItem?.establishedDate).getFullYear().toString()} />
          <BoxDetail title="Trạng thái" content={fundItem?.state} />
        </Grid>
      </Grid>

      <Introduce description={fundItem?.description} />

      <Projects data={fundItem?.projects} />
    </Container>
  );
}

const TitleProject = styled.h2`
  color: rgba(0, 0, 0, 0.85);
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  font-family: 'Inter-Medium';
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

const ImgSocial = styled.img`
  width: 20px;
  height: 20px;
`;