import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FooterData } from './config';
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
              <a href="">
                <Image src={FooterData.img_footer_path} alt="Logo TSS Footer" width={150} height={71} />
              </a>
            </Box>
          </Grid>
          <Grid item container direction="column" lg={4} sm={6} dangerouslySetInnerHTML={{__html: FooterData.about}} />
          <Grid item container direction="column" lg={4} sm={6}>
            <div dangerouslySetInnerHTML={{__html: FooterData.headquarters}}></div>
            <Grid container style={{ marginTop: '20px' }}>
              {
                FooterData.list_social.map(({id, link, icon_path}) => {
                  return (
                    <Grid item key={id} mr={2}>
                      <a href={link} target="_blank" rel="noreferrer">
                        <Image src={icon_path} alt="social" width={24} height={24} />
                      </a>
                    </Grid>
                  )
                })
              }
            </Grid>
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