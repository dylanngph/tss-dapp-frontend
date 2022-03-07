import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export default function CriteriaPage () {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={6}>
          <TitlePage>Quy trình đăng ký thông tin dự án</TitlePage>
        </Grid>
        <Grid item md={6}>
          <Image src="/assets/images/criteria/NFTDecentralize.png" alt="NFT Decentralize" width={577} height={564}/>
        </Grid>
      </Grid>
      <BoxContent pt={4} pb={4}>
        <h5>Bước 1: Đăng nhập vào hệ thống</h5>
        <p>Đăng ký tài khoản trên hệ thống TSS : chọn vào <strong>“Tạo tài khoản mới”</strong>.</p>
        <ImageTutorial src="/assets/images/projectInfor/image2.png" alt="global" />
        <p>Điền thông tin tạo tài khoản.</p>
        <ImageTutorial src="/assets/images/projectInfor/image4.png" alt="global" />
        <p>Sau khi tạo tài khoản thành công quý khách điền tài khoản và mật khẩu đăng nhập, bấm nút <strong>“Đăng nhập”</strong> để đăng nhập vào hệ thống.</p>
        <ImageTutorial src="/assets/images/projectInfor/image7.png" alt="global" />
        <h5>Bước 2: Tiến hành tạo hồ sơ</h5>
        <p>Sau khi đăng nhập vào hệ thống quý khách chọn vào mục <strong>“Tạo hồ sơ”</strong> để đăng ký thông tin dự án.</p>
        <ImageTutorial src="/assets/images/projectInfor/image8.png" alt="global" />
        <h5>Bước 3: Nhập thông tin dự án</h5>
        <p>Quý khách nhập thông tin dự án bao gồm 4 phần:</p>
        <ul>
          <li>Thông tin tổ chức</li>
        </ul>
        <ImageTutorial src="/assets/images/projectInfor/image6.png" alt="global" />
        <ul>
          <li>Thông tin dự án</li>
        </ul>
        <ImageTutorial src="/assets/images/projectInfor/image9.png" alt="global" />
        <ul>
          <li>Thông tin Tokenomics</li>
        </ul>
        <ImageTutorial src="/assets/images/projectInfor/image1.png" alt="global" />
        <ul>
          <li>Đại diện pháp luật</li>
        </ul>
        <ImageTutorial src="/assets/images/projectInfor/image3.png" alt="global" />
        <h5>Bước 4: Gửi hồ sơ </h5>
        <p>Sau khi điền thông tin hoàn tất quý khách bấm gửi và chờ hệ thống TSS xác nhận.</p>
        <ImageTutorial src="/assets/images/projectInfor/image5.png" alt="global" />
      </BoxContent>
    </Container>
  );
}

const TitlePage = styled.h1`
  color: #11142D;
`;

const BoxContent = styled(Box)`
  h3, h5, strong {
    color: #11142D;
  }
  h3 {
    font-size: 24px;
  }
  h5 {
    font-size: 18px;
  }
  ul {
    li {
      line-height: 1.4;
    }
  }
`;

const ImageTutorial = styled.img`
  width: 100%;
  height: auto;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`