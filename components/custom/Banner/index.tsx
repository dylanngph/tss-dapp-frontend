import Image from 'next/image';
import Header from 'components/display/Header';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BoxIOTA from 'components/custom/BoxIOTA';
import styled from 'styled-components';
import { device } from 'styles/media-device';

export default function Banner () {
  return (
    <WrapperBanner>
      <Header/>
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
            {listBoxIOTA.map((item) => {
              return <BoxIOTA key={item.id} item={item}></BoxIOTA>
            })}
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
  min-height: 676px;
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
  @media screen and ${device.tabletL} {
    position: absolute;
    left: 0;
    bottom: -80px;
    width: 100%;
  }
`;

const listBoxIOTA = [
  {
    id: 1,
    img: 'IOTA1.png',
    subtitle: 'CON DẤU NFT',
    title: 'Passport of Blockchain',
    description: 'Hồ sơ dự án Blockchain',
  },
  {
    id: 2,
    img: 'IOTA2.png',
    subtitle: 'CON DẤU NFT',
    title: 'Tài sản số',
    description: '',
  },
  {
    id: 3,
    img: 'IOTA3.png',
    subtitle: 'CON DẤU NFT',
    title: 'Tài sản nền',
    description: '',
  }
];