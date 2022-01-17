import * as React from 'react';
import Image from 'next/image';
import Link from "next/link";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Burger from 'components/display/Header/Burger';
import Menu from 'components/display/Header/Menu';
import useScrollHandler from "utils/hooks/useScrollHandler";
import { useRouter } from "next/router";
import { NavMenu } from './config';
import styled from 'styled-components';
import { device } from 'styles/media-device';

export interface HeaderProps {
  theme: string,
}

export default function Header({theme}: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const scrollPosition = useScrollHandler();
  return (
    <WrapperNav className={`${theme} ${scrollPosition ? 'nav-sticky' : ''}`}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item container alignItems="center" xs={8}>
            <Box sx={{ width: 70, height: 32, cursor: 'pointer' }}>
              {/* <Link href="/">
                <Image src={theme == 'white' ? '/logo-tss.svg' : '/logo-tss-black.svg'} alt="LOGO TSS" width={70} height={32} />
              </Link> */}
              <Image src={theme == 'white' ? '/logo-tss.svg' : '/logo-tss-black.svg'} alt="LOGO TSS" width={70} height={32} />
            </Box>
            <ul>
              {
                NavMenu.map(({title, href}) => (
                  <li key={title} className={router.pathname == "/" ? "active" : ""}>
                    <Link href={href} passHref>{title}</Link>
                  </li>
                ))
              }
            </ul>
          </Grid>
          <Grid item container direction="row" alignItems="center" justifyContent="flex-end" xs={4} className="btn-create">
            <Burger open={open} setOpen={setOpen} theme={theme} />
          </Grid>
        </Grid>
        <Menu open={open} theme={theme} />
      </Container>
    </WrapperNav>
  );
}

const WrapperNav = styled.nav`
  padding: 24px 0;
  color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: background 0.3s;
  &.white {
    background-color: transparent;
    &.nav-sticky {
      background: linear-gradient(286.23deg,#2A2AFF -70.7%,#000696 78.49%);
    }
  }
  &.black {
    background-color: #ffffff;
  }
  &.nav-sticky {
    box-shadow: 0px 4px 17px rgb(0 0 0 / 5%);
  }
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
  .btn-create > div {
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
        color: ${({ theme }) => theme == 'white' ? '#ffffff' : 'var(--color-primary)'};
      }
    }
    .btn-nav {
      display: none;
    }
    .btn-create > div {
      display: block;
    }
  }
`;