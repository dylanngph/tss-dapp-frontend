import * as React from 'react';
import Button from '@mui/material/Button';
import Link from "next/link";
import { NavMenu } from '../config';
import { useRouter } from "next/router";
import styled from 'styled-components';

interface MenuProps {
  open: boolean,
  theme: string,
}

const Menu: React.FC<MenuProps> = ({ open, theme }) => {
  const router = useRouter();
  return (
    <StyledMenu open={open}>
      {
        NavMenu.map(({title, href}) => (
          <li key={title} className={router.pathname == "/" ? "active" : ""}>
            <Link href={href} passHref>{title}</Link>
          </li>
        ))
      }
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