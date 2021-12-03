import * as React from 'react';
import Image from 'next/image';
import Link from "next/link";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Burger from 'components/display/Header/Burger'
import Menu from 'components/display/Header/Menu'
import styled from 'styled-components';
import { device } from 'styles/media-device';

export interface HeaderProps {
}

export default function Header(props: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <WrapperNav>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item container alignItems="center" xs={8}>
            <Box sx={{ width: 70, height: 32, cursor: 'pointer' }}>
              <Link href="/" passHref>
                <Image src="/logo-tss.svg" alt="LOGO TSS" width={70} height={32} />
              </Link>
            </Box>
            <ul>
              <li className="active">Trang chủ</li>
              <li>Listing Hồ sơ</li>
            </ul>
          </Grid>
          <Grid item container direction="row" alignItems="center" justifyContent="flex-end" xs={4}>
            <CustomButton className="btn-create" variant="contained">Tạo hồ sơ dự án</CustomButton>
            <Burger open={open} setOpen={setOpen} />
          </Grid>
        </Grid>
        <Menu open={open} />
      </Container>
    </WrapperNav>
  );
}

const WrapperNav = styled.nav`
  padding: 24px 0;
  color: #ffffff;
  ul {
    display: none;
    li {
      margin-left: 30px;
      cursor: pointer;
      font-family: 'Inter-Bold';
      color: var(--color-primary);
      &.active {
        color: var(--color-neutral-gray-1);
      }
    }
  }
  .btn-nav {
    display: block;
  }
  .btn-create {
    display: none;
  }
  @media screen and ${device.tablet} {
    ul {
      padding-left: 30px;
      list-style: none;
      position: relative;
      background-color: transparent;
      display: block;
      li {
        display: inline-block;
        color: #ffffff;
      }
    }
    .btn-nav {
      display: none;
    }
    .btn-create {
      display: block;
    }
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
  '&:hover': {
    backgroundColor: '#ffffff',
    color: '#446DFF',
    boxShadow: 'none',
  },
});