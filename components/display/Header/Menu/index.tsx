import * as React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

interface MenuProps {
  open: boolean,
}

const Menu: React.FC<MenuProps> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="#">Trang chủ</a>
      <a href="#">Listing Hồ sơ</a>
      <CustomButton variant="contained">Tạo hồ sơ dự án</CustomButton>
    </StyledMenu>
  );
};

export default Menu;

const StyledMenu = styled.nav<MenuProps>`
  display: none;
  a {
    padding: 12px 15px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: block;
    color: #58667E;
  }
  @media (max-width: 768px) {
    flex-flow: column wrap;
    background-color: #E5E5E5;
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