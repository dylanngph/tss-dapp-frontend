import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
export interface FooterProps {
}

export default function Footer(props: FooterProps) {
  const listSocial = [
    {
      id: 1,
      icon_path: '/assets/icons/ico-fb.svg',
      link: '#'
    },
    {
      id: 2,
      icon_path: '/assets/icons/ico-twitter.svg',
      link: '#'
    },
    {
      id: 3,
      icon_path: '/assets/icons/ico-telegram.svg',
      link: '#'
    }
  ];
  return (
    <WrapperNav>
      <Container>
        <Grid container spacing={4} mt={0} pt={7} pb={7}>
          <Grid item container lg={4} sm={12}>
            <Box sx={{ width: 150, height: 71, }}>
              <a href="">
                <Image src="/assets/images/logo-tss-footer.png" alt="Logo TSS Footer" width={150} height={71} />
              </a>
            </Box>
          </Grid>
          <Grid item container direction="column" lg={4} sm={6}>
            <h4>Về chúng tôi</h4>
            <p>TRUNG TÂM QUẢN LÝ TÀI SẢN SỐ - Digital Asset Management Center - gọi tắt TSS là đơn vị tiên phong tại Việt Nam được Nhà nước công nhận tư cách pháp nhân để làm nhiệm vụ thúc đẩy, tổ chức các hoạt động số hóa, quản lý tài sản số trong các hoạt động kinh tế theo định hướng KINH TẾ SỐ của Chính phủ, nhằm phát triển nền kinh tế tri thức tại Việt Nam.</p>
          </Grid>
          <Grid item container direction="column" lg={4} sm={6}>
            <h4>Trụ sở chính</h4>
            <p>124 Huỳnh Tấn Phát, Phường Tân Thuận Tây, Quận 7, Thành phố Hồ Chí Minh.</p>
            <Grid container style={{ marginTop: '20px' }}>
              {
                listSocial.map(({id, link, icon_path}) => {
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