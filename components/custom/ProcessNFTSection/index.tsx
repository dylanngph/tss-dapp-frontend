import * as React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export interface ProcessNFTSection {
}

export default function ProcessNFTSection (props: ProcessNFTSection) {
  return (
    <WrapperSection>
      <Container maxWidth="lg">
        <TitleSection>Quy trình cấp NFT</TitleSection>
        <DesSection>Cùng chung tay tạo nên một cộng đồng blockchain Việt Nam minh bạch.</DesSection>
        <Grid container style={{ paddingTop: '60px' }}>
          <Grid item container md={3}>
            <Box sx={{ width: 300, height: 200, position: 'relative' }}>
              <BoxItem>
                <Image src="/assets/icons/ico-document.svg" alt="ico-document" width={64} height={64}/>
                <p>Đăng ký hồ sơ</p>
              </BoxItem>
              <BoxBg></BoxBg>
            </Box>
          </Grid>
          <Grid item container justifyContent="center" md={1.5}>
            <Image src="/assets/icons/ico-arrow-right.svg" alt="arrow-right" width={100} height={30}/>
          </Grid>
          <Grid item container md={3}>
            <Box sx={{ width: 300, height: 200, position: 'relative' }}>
              <BoxItem>
                <Image src="/assets/icons/ico-judge.svg" alt="ico-judge" width={64} height={64}/>
                <p>Tư vấn & Thẩm định</p>
              </BoxItem>
              <BoxBg></BoxBg>
            </Box>
          </Grid>
          <Grid item container justifyContent="center" md={1.5}>
            <Image src="/assets/icons/ico-arrow-right.svg" alt="arrow-right" width={100} height={30}/>
          </Grid>
          <Grid item container md={3}>
            <Box sx={{ width: 300, height: 200, position: 'relative' }}>
              <BoxItem>
                <Image src="/assets/icons/ico-bubble.svg" alt="ico-bubble" width={64} height={64}/>
                <p>Cấp NFT </p>
              </BoxItem>
              <BoxBg></BoxBg>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </WrapperSection>
  );
}

const WrapperSection = styled.div`
  position: relative;
  background-image: url('/assets/images/bg-process-nft.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 175px 0 80px;
  min-height: 676px;
  text-align: center;
`;

const TitleSection = styled.h3`
  font-size: 36px;
  line-height: 44px;
  color: var(--color-black-1);
  margin-bottom: 20px;
`;

const DesSection = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: var(--color-neutral-gray-3);
`;

const BoxItem = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFF2F5;
  box-sizing: border-box;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  height: 180px;
  position: relative;
  padding: 25px;
  text-align: center;
  z-index: 2;
  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: var(--color-blue);
  }
`;

const BoxBg = styled.div`
  height: 100px;
  width: 250px;
  max-width: 90%;
  position: absolute;
  bottom: 0;
  left: 16px;
  background: #FFFFFF;
  border: 1px solid #EFF2F5;
  box-sizing: border-box;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  z-index: 1;
`;