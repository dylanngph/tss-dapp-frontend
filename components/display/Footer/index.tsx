import * as React from 'react';
import Link from "next/link";
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FooterData } from 'constants/data/footer';
import styled from 'styled-components';
export interface FooterProps {
}

export default function Footer(props: FooterProps) {
  return (
    <WrapperNav>
      <Container>
        <Grid container spacing={4} mt={0} pt={7} pb={7}>
          <Grid item container lg={4} sm={12}>
            <Box sx={{ width: 150, height: 71, }}>
              <Link href="/">
                <img src={FooterData.logoFooter} alt="LOGO TSS" />
              </Link>
            </Box>
          </Grid>
          <Grid item container direction="column" lg={4} sm={6} dangerouslySetInnerHTML={{__html: FooterData.about}} />
          <Grid item container direction="column" lg={4} sm={6}>
            <div dangerouslySetInnerHTML={{__html: FooterData.headquarters}}></div>
            <Grid container mt={4} mb={4}>
              { FooterData.listSocial.map(({id, link, iconPath}) => {
                  return (
                    <Grid item key={id} mr={2}>
                      <a href={link} target="_blank" rel="noreferrer">
                        <Image src={iconPath} alt="social" width={24} height={24} />
                      </a>
                    </Grid>
                  )
                }) }
            </Grid>
            <Box sx={{ fontWeight: 'bold' }}>
              <Link href="/criteria">Tiêu chí xét duyệt dự án</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <WrapperCopyRight>
        <Container maxWidth="lg">
          <p>© 2021 TSS. All rights reserved</p>
        </Container>
      </WrapperCopyRight>
    </WrapperNav>
  );
}

const WrapperNav = styled.footer`
  color: #ffffff;
  background: linear-gradient(286.23deg, #2A2AFF -70.7%, #000696 78.49%);
  h4 {
    font-size: 24px;
    margin: 0 0 10px;
  }
  p {
    margin: 0;
    line-height: 1.5;
  }
`;

const WrapperCopyRight = styled.div`
  padding: 8px 0;
  background: #242731;
  p {
    margin: 0;
  }
`;