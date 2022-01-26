import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';
import styled from 'styled-components';

export default function CriteriaPage () {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={6}>
          <TitlePage>Tiêu chí đánh giá thông tin dự án</TitlePage>
        </Grid>
        <Grid item md={6}>
          <Image src="/assets/images/criteria/NFTDecentralize.png" alt="NFT Decentralize" width={577} height={564}/>
        </Grid>
      </Grid>
      <BoxContent pt={4} pb={4}>
        <h3>A. TSS: PHÁP LÝ</h3>
        <h5>Tiêu chí 1: Pháp lý doanh nghiệp</h5>
        <ul>
          <li>Pháp lý dự án đánh giá trên các Giấy chứng nhận đăng ký doanh nghiệp, giấy phép kinh doanh, điều lệ, phạm vi kinh doanh….</li>
          <li>Kiểm tra chéo bằng phương pháp riêng.</li>
        </ul>
        <h5>Tiêu chí 2: Tuân thủ cơ bản theo luật</h5>
        <ul>
          <li>Kiểm tra điều lệ Công ty</li>
          <li>Kiểm tra Sổ cổ đông, Sổ đăng ký thành viên.</li>
        </ul>
        <h5>Tiêu chí 3: Hoạt động hiện tại của doanh nghiệp</h5>
        <ul>
          <li>Kiểm tra tình trạng hoạt động của doanh nghiệp trên Cổng thông tin quốc gia về đăng ký doanh nghiệp và Hệ thống thuế.</li>
          <li>Trường hợp đặc biệt: Kiểm tra CIC (thông tin tín dụng)</li>
        </ul>
        <h5>Tiêu chí 4:  Địa điểm hoạt động kinh doanh</h5>
        <ul>
          <li>Kiểm tra Hợp đồng thuê văn phòng / Giấy tờ sở hữu văn phòng của trụ sở, chi nhánh, văn phòng đại diện, địa điểm kinh doanh</li>
        </ul>
        <h5>Tiêu chí 5: Nghĩa vụ trả nợ tiềm ẩn </h5>
        <ul>
          <li>Kiểm tra các khoản cầm cố, thế chấp liên quan đến cổ phần của Công ty</li>
          <li>Kiểm tra các hợp đồng, các khoản đảm bảo, Quyền chọn, quyền chuyển đổi  chưa đáo hạn, chưa hoàn thành hoặc chưa thi hành liên quan đến việc gọi vốn hiện có.</li>
        </ul>
        <h5>Tiêu chí 6: Quản lý nội bộ </h5>
        <ul>
          <li>Kiểm tra xem có Nội quy lao động và các quy chế nội bộ hay không: ISO hay quy trình</li>
          <li>Ứng dụng phần mềm quản lý như ERP, CRM</li>
        </ul>
        <h5>Tiêu chí 7: Tài sản cố định / Khoản phải trả </h5>
        <ul>
          <li>Kiểm tra Báo cáo tài chính năm gần nhất</li>
          <li>Danh mục tài sản thực tế nếu không được ghi nhận trên sổ sách kế toán</li>
        </ul>
        <h5>Tiêu chí 8: Truyền thông, danh tiếng</h5>
        <ul>
          <li>Kiểm tra các website, ứng dụng.</li>
          <li>Kiểm tra trên Internet.</li>
        </ul>
        <h5>Tiêu chí 9: Tài sản Sở hữu trí tuệ</h5>
        <ul>
          <li>Xem xét các tài sản trí tuệ được sử dụng trong Công ty, do Công ty sở hữu hoặc thuộc sở hữu hoặc đã được trao lại cho bên thứ ba.</li>
          <li>Xem xét về việc sử  dụng tất cả các tên và tên thương mại.</li>
        </ul>
        <h5>Tiêu chí 10: Tuân thủ theo pháp luật và quy trình tố tụng</h5>
        <ul>
          <li>Xem xét tất cả các lệnh, quyết định hoặc phán quyết của tòa, cơ quan chính phủ hoặc có thẩm quyền mà Công ty là một bên liên quan hoặc bị ràng buộc.</li>
          <li>Xem xét về các vụ kiện đang diễn ra hoặc các vụ kiện hoặc tranh chấp khác (bao gồm tranh chấp về sức khỏe nhân viên, an toàn lao động và các quy định khác) mà Công ty đang hoặc sẽ liên quan.</li>
        </ul>
        <h5>Có 4 mức đánh giá cho mỗi tiêu chí</h5>
        <ul>
          <li><strong>Rủi ro thấp:</strong> là mức độ an toàn, đáng tin cậy nhất</li>
          <li><strong>Rủi ro:</strong> có rủi ro, nhưng ở mức chấp nhận được</li>
          <li><strong>Rủi ro cao:</strong> Rất rủi ro </li>
          <li><strong>Chưa đánh giá được:</strong> chưa đủ dữ liệu để đánh giá</li>
        </ul>
        <h5>Tổng thể đánh giá sau 10 tiêu chí</h5>
        <ul>
          <li><strong>Rủi ro thấp:</strong> khi có từ 7 tiêu chí đạt “Rủi ro thấp” trở lên</li>
          <li><strong>Rủi ro:</strong> khi có từ 5 - 7 tiêu chí là mức “Rủi ro”</li>
          <li><strong>Rủi ro cao:</strong> khi có từ 7 tiêu chí ở mức “Rủi ro” trở lên </li>
          <li><strong>Chưa đánh giá được:</strong> khi có từ 5 tiêu chí ở mức “Chưa đủ dữ liệu để đánh giá”</li>
        </ul>

        <h3>B. BAS (DTS): HÀM LƯỢNG, MỨC ĐỘ CÔNG NGHỆ</h3>
        <p>Dựa trên hàm lượng, mức độ công nghệ của Dự án, sản phẩm để đánh giá. Khách hàng cần cung cấp thuyết minh về giải pháp công nghệ, biện pháp, bản mẫu (nếu có) để TSS đánh giá</p>
        <p>Có 4 mức đánh giá sau:</p>
        <ul>
          <li><strong>Có khả năng ứng dụng rất cao:</strong> Dự án có thể đưa vào ứng dụng, sản xuất hay triển khai hàng loạt, trên diện rộng trong thời gian rất nhanh và hiệu quả rất cao.</li>
          <li><strong>Có khả năng ứng dụng cao:</strong> Dự án có thể đưa vào ứng dụng, sản xuất hay triển khai hàng loạt trên diện rộng một cách khả thi với thời gian và quy mô phù hợp.</li>
          <li><strong>Có khả năng ứng dụng:</strong> Dự án có thể đưa vào ứng dụng, sản xuất hay triển khai, nhưng chưa xác định được trên diện rộng hay chưa xác định được thời gian và quy mô, cần triển khai thực tế để đánh giá. </li>
          <li><strong>Chưa nhận thấy khả năng ứng dụng:</strong> Dự án thuần về lý thuyết, khó có thể ứng dụng trên thực tiễn hoặc có thể ứng dụng nhưng quy mô nhỏ, không tạo ra giá trị lớn.</li>
        </ul>
        
        <h3>C. VBC (VECOM): GIÁ TRỊ XÃ HỘI VÀ UY TÍN CỘNG ĐỒNG</h3>
        <p>Khách hàng cần cung cấp thuyết minh về giá trị xã hội và uy tín cộng đồng để TSS đánh giá. TSS cũng tự đánh giá bằng việc kiểm tra chéo bằng dữ liệu riêng</p>
        <h5>1. Giá trị xã hội</h5>
        <ul>
          <li><strong>Giá trị vật chất:</strong> Như tạo ra tài sản, thu nhập, đóng thuế …</li>
          <li><strong>Giá trị tinh thần:</strong> Giúp nâng cao đời sống tinh thần, tri thức, ý nghĩa cuộc sống, văn hoá …</li>
        </ul>
        <p><strong>Có 3 mức đánh giá sau:</strong></p>
        <ul>
          <li><strong>Có giá trị xã hội cao:</strong> Dự án có kỳ vọng đem lại lợi ích cao hoặc rất cao về giá trị vật chất, giá trị tinh thần cho xã hội.</li>
          <li><strong>Có giá trị xã hội:</strong> Dự án có kỳ vọng đem lại lợi ích về giá trị vật chất, giá trị tinh thần cho xã hội</li>
          <li><strong>Có giá trị xã hội thấp:</strong> Dự án có chưa xác định được mức độ lợi ích về giá trị vật chất, giá trị tinh thần cho xã hội.</li>
        </ul>
        <h5>2. Uy tín cộng đồng</h5>
        <ul>
          <li>Dự án không có tai tiếng về mặt truyền thông, xã hội tại thời điểm đánh giá</li>
          <li>Các Người sáng lập, cố vấn, đội ngũ chính không có tai tiếng về mặt truyền thông, xã hội tại thời điểm đánh giá.</li>
          <li>Dự án được truyền thông, xã hội đánh giá cao hoặc rất cao tại thời điểm đánh giá</li>
          <li>Tất cả, một hoặc nhiều người trong đội ngũ người sáng lập, cố vấn, đội ngũ chính có uy tín cao trong xã hội tại thời điểm đánh giá.</li>
        </ul>
        <p><strong>Có 4 mức đánh giá sau:</strong></p>
        <ul>
          <li><strong>Có uy tín cộng đồng cao:</strong> Dự án, Người sáng lập, cố vấn, đội ngũ chính có uy tín cao trên truyền thông, xã hội.</li>
          <li><strong>Có uy tín cộng đồng:</strong> Dự án, Người sáng lập, cố vấn, đội ngũ chính có uy tín trên truyền thông, xã hội.</li>
          <li><strong>Chưa xác định được uy tín cộng đồng cao:</strong> chưa xuất hiện nhiều trên truyền thông, xã hội và không có tai tiếng.</li>
          <li><strong>Không có uy tín cộng đồng cao:</strong> Dự án, Người sáng lập, cố vấn, đội ngũ chính có nhiều tai tiếng trên truyền thông, xã hội.</li>
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