import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BoxIOTA from 'components/custom/Home/BoxIOTA';
import styled from 'styled-components';
import { LIST_BOX_IOTA } from 'constants/data/nft';
import { device } from 'styles/media-device';

export default function Banner () {
  return (
    <WrapperBanner>
      <Container>
        <Grid container>
          <Grid item container alignItems="center" md={6}>
            <TitleSection>Phát hành NFT xác nhận thông tin dự án Blockchain của bạn</TitleSection>
          </Grid>
          <Grid item md={6}>
            <Image src="/assets/images/sec-banner-image.png" alt="banner image" width={640} height={507}/>
          </Grid>
        </Grid>
      </Container>
      <WrapperListIOTA>
        <Container>
          <Grid container justifyContent="center">
            { LIST_BOX_IOTA.map((item) => {
              return <BoxIOTA key={item.id} IOTA={item}></BoxIOTA>
            }) }
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
  margin-bottom: 200px;
  padding-top: 80px;
  margin-top: -80px;
  @media screen and ${device.tablet} {
    min-height: 676px;
    margin-bottom: 0;
    padding-top: 100px;
    margin-top: -100px;
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