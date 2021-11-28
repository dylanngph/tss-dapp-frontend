import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
export interface FooterProps {
}

export default function Footer (props: FooterProps) {
  return (
    <WrapperNav>
      <Container maxWidth="lg" style={{padding: '70px 0'}}>
        <Grid container >
          <Grid item container sm={4} style={{padding: '0 35px'}}>
            <Box sx={{ width: 150, height: 71,}}>
              <a href="">
                <Image src="/assets/images/logo-tss-footer.png" alt="Logo TSS Footer" width={150} height={71}/>
              </a>
            </Box>
          </Grid>
          <Grid item container direction="column" sm={4} style={{padding: '0 35px'}}>
            <h4>Về chúng tôi</h4>
            <p>TRUNG TÂM QUẢN LÝ TÀI SẢN SỐ - Digital Asset Management Center - gọi tắt TSS là đơn vị tiên phong tại Việt Nam được Nhà nước công nhận tư cách pháp nhân để làm nhiệm vụ thúc đẩy, tổ chức các hoạt động số hóa, quản lý tài sản số trong các hoạt động kinh tế theo định hướng KINH TẾ SỐ của Chính phủ, nhằm phát triển nền kinh tế tri thức tại Việt Nam.</p>
          </Grid>
          <Grid item container direction="column" sm={4} style={{padding: '0 35px'}}>
            <h4>Trụ sở chính</h4>
            <p>124 Huỳnh Tấn Phát, Phường Tân Thuận Tây, Quận 7, Thành phố Hồ Chí Minh.</p>
            <Grid container style={{marginTop: '20px'}}>
              <Grid item>
                <a href="#" target="_blank">
                  <Image src="/assets/icons/ico-fb.svg" alt="FB" width={24} height={24}/>
                </a>
              </Grid>
              <Grid item style={{marginLeft: '20px'}}>
                <a href="#" target="_blank">
                <Image src="/assets/icons/ico-twitter.svg" alt="TW" width={24} height={24}/>
                </a>
              </Grid>
              <Grid item style={{marginLeft: '20px'}}>
                <a href="#" target="_blank">
                <Image src="/assets/icons/ico-telegram.svg" alt="TE" width={24} height={24}/>
                </a>
              </Grid>
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