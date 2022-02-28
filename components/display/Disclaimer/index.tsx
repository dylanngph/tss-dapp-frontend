import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export default function DisclaimerPage() {
  return (
    <Container>
      <Grid mt={4} container justifyContent="center" alignItems="center">
        <Grid item md={6}>
          <TitlePage>Tuyên bố miễn trừ trách nhiệm</TitlePage>
        </Grid>
        <Grid item md={6}>
          <Image src="/assets/images/disclaimer/abc.png" alt="Disclaimer Page" />
        </Grid>
      </Grid>
      <BoxContent pt={4} pb={4}>
        <h5>Nội dung:</h5>
        <ul>
          <li>TRUNG TÂM QUẢN LÝ TÀI SẢN SỐ - Digital Asset Management Center - gọi tắt TSS là đơn vị sở hữu và vận hành website https://tss.org.vn. TSS có quyền cập nhật và chỉnh sửa nội dung trên website này vào bất cứ lúc nào và có hiệu lực ngay khi được đăng tải. Bằng cách truy cập và sử dụng website này, người dùng đồng ý với các điều khoản và điều kiện của website. </li>
          <li>Thông tin trên website này là không ràng buộc và chỉ có mục đích cung cấp thông tin tổng quát liên quan đến hoạt động khoa học và công nghệ. TSS luôn cố gắng đảm bảo tính chính xác của thông tin được liệt kê trên trang web này mặc dù nó sẽ không chịu bất kỳ trách nhiệm nào đối với bất kỳ thông tin bị thiếu hay sai hoặc hệ quả nào từ việc khách hàng/đối tác cung cấp. </li>
          <li>Theo đó, xin hiểu rằng các thông tin trên trang web này không nhằm mục đích cung cấp nội dung tư vấn đầu tư, khuyến nghị đầu tư, tư vấn giao dịch hoặc bất kỳ loại lời khuyên nào khác và người dùng không nên đối xử với bất kỳ nội dung nào của trang web như vậy. TSS sẽ không chịu trách nhiệm về các quyết định đầu tư mà người dùng đưa ra dựa trên thông tin được cung cấp trên trang web. TSS không chịu trách nhiệm cho quyết định giao dịch của người dùng hoặc bất kỳ tổn thất nào từ giao dịch trên bất kỳ nền tảng nào.</li>
          <li>Một số nội dung trên trang web này liên kết đường dẫn từ những trang web khác do các bên thứ ba quản lý, không thuộc quyền kiểm soát của TSS. TSS không đưa ra phát biểu nào về tính chính xác hoặc về bất kỳ khía cạnh nào khác của những thông tin đăng tải trên các trang web đó. </li>
        </ul>
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

const Image = styled.img`
  max-width: 240px;
  width: 100%;
  height: auto;
  display: block;
  margin: auto;

  &::after {
    content: '';

  }
`