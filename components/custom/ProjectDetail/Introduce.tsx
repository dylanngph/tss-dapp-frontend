import * as React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

export interface IntroduceProps {
}

export default function Introduce (props: IntroduceProps) {
  return (
    <Grid container pt={4} pb={2}>
      <h3 className="title-sec">Giới thiệu</h3>
      <PSection>Jade Labs là một công ty nghiên cứu & phát triển blockchain tập trung vào việc tạo ra sản phẩm khác biệt nhất để đáp ứng sự hài lòng của khách hàng trong thị trường tiền điện tử. Chúng tôi có đội ngũ trẻ trung, năng động và các thành viên nòng cốt có nhiều kinh nghiệm phát triển các dự án blockchain, chúng tôi cam kết mang đến cho khách hàng những giá trị thiết thực, sự hài lòng của bạn là thành công của chúng tôi</PSection>
    </Grid>
  );
}

const PSection = styled.p`
  font-family: 'Inter-Regular';
  color: #58667E;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;