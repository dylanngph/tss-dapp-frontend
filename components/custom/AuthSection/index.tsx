import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { device } from 'styles/media-device';

export default function AuthSection () {
  return (
    <WrapperSection>
      <TitleSection>Đơn vị xác thực</TitleSection>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item container direction="row" alignItems="center" justifyContent="center" xs={4} p={2}>
            <Image src="/assets/images/logoTSS.png" alt="LOGO TSS" width={240} height={103}/>
          </Grid>
          <Grid item container direction="row" alignItems="center" justifyContent="center" xs={4} p={2}>
            <Image src="/assets/images/logoBAS.png" alt="logoBAS" width={240} height={103}/>
          </Grid>
          <Grid item container direction="row" alignItems="center" justifyContent="center" xs={4} p={2}>
            <Image src="/assets/images/logoVBC.png" alt="logoVBC" width={240} height={103}/>
          </Grid>
        </Grid>
      </Container>
    </WrapperSection>
  );
}

const WrapperSection = styled.div`
margin: 50px 0 30px;
  @media screen and ${device.tablet} {
    margin: 150px 0 30px;
  }
`;

const TitleSection = styled.h3`
  text-align: center;
  margin: 0 auto 15px;
  font-size: 24px;
  line-height: 29px;
  color: #58667E;
`;