import Image from 'next/image';
import Header from 'components/display/Header';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BoxIOTA from 'components/custom/Home/BoxIOTA';
import styled from 'styled-components';
import { listBoxIOTA } from '../../config.nft';
import { device } from 'styles/media-device';

export default function Banner () {
  return (
    <WrapperBanner>
      <Header theme={'white'}/>
      <Container>
        <Grid container>
          <Grid item container alignItems="center" md={6}>
            <TitleSection>Cấp NFT xác thực dự án Blockchain của bạn</TitleSection>
          </Grid>
          <Grid item md={6}>
            <Image src="/assets/images/sec-banner-image.png" alt="banner image" width={640} height={507}/>
          </Grid>
        </Grid>
      </Container>
      <WrapperListIOTA>
        <Container>
          <Grid container>
            {
              listBoxIOTA.map((item) => {
                return <BoxIOTA key={item.id} IOTA={item}></BoxIOTA>
              })
            }
          </Grid>
        </Container>
      </WrapperListIOTA>
    </WrapperBanner>
  );
}

const WrapperBanner = styled.div`
  position: relative;
  background-image: url('/assets/images/hero-img-banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: inherit;
  margin-bottom: 500px;
  @media screen and ${device.tabletL} {
    min-height: 676px;
    margin-bottom: 0;
  }
`;

const TitleSection = styled.h2`
  color: #ffffff;
  font-size: 36px;
  @media screen and ${device.tabletL} {
    font-size: 48px;
    line-height: 58px;
  }
`;

const WrapperListIOTA = styled.div`
  position: absolute;
  left: inherit;
  bottom: inherit;
  margin-top: -40px;
  @media screen and ${device.tablet} {
    left: inherit;
    bottom: inherit;
    margin-top: -40px;
  }
  @media screen and ${device.tabletL} {
    left: 0;
    bottom: -40px;
    width: 100%;
    margin-top: 0;
  }
`;