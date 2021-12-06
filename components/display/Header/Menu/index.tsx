import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonLink from 'components/custom/ButtonLink';
import styled from 'styled-components';

interface MenuProps {
  open: boolean,
  theme: string,
}

const Menu: React.FC<MenuProps> = ({ open, theme }) => {
  return (
    <StyledMenu open={open}>
      <li>
        <a href="#">Trang chủ</a>
      </li>
      <li>
        <a href="#">Listing Hồ sơ</a>
      </li>
      <li>
        <ButtonLink title={theme == 'white' ? "Tạo hồ sơ dự án" : "Tạo hồ sơ"} href={"#"} />
      </li>
    </StyledMenu>
  );
};

export default Menu;

const StyledMenu = styled.nav<MenuProps>`
  display: none;
  li {
    padding: 12px 15px;
    display: block;
    > a {
      font-size: 16px;
      line-height: 19px;
      color: #58667E;
      font-weight: bold;
      text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column wrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    display: block;
    list-style: none;
    width: 100%;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
  }
`;

const CustomButton = styled(Button)({
  padding: '12px 24px',
  textTransform: 'none',
  lineHeight: '19px',
  fontWeight: '600',
  backgroundColor: '#446DFF',
  fontFamily: 'Inter-Regular',
  borderRadius: '8px',
  boxShadow: 'none',
  marginTop: '12px',
  marginLeft: '15px',
  '&:hover': {
    backgroundColor: '#446DFF',
    color: '#ffffff',
    boxShadow: 'none',
  },
});