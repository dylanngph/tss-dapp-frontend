import * as React from 'react';
import Link from "next/link";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Burger from 'components/display/Header/Burger';
import Menu from 'components/display/Header/Menu';
import useWindowScrollPosition from "utils/hooks/useScrollHandler";
import { useRouter } from "next/router";
import { NavMenu } from 'constants/data/menu';
import { WrapperNav } from './Header.styled';
export interface HeaderProps {
  theme: string,
}

export default function Header({theme}: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const scrollPosition = useWindowScrollPosition();

  return (
    <WrapperNav theme={theme} scrollPosition={scrollPosition}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item container alignItems="center" xs={8}>
            <Box sx={{ width: 70, height: 32, cursor: 'pointer' }}>
              <Link href="/" passHref>
                <a>
                  <img src={(theme == 'white' && !scrollPosition) ? '/logo-tss.svg' : '/logo-tss-black.svg'} alt="LOGO TSS" />
                </a>
              </Link>
            </Box>
            <ul>
              { NavMenu.map(({title, href}) => (
                <li key={title} className={router.pathname === href ? "active" : ""}>
                  <Link href={href} passHref>{title}</Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item container direction="row" alignItems="center" justifyContent="flex-end" xs={4} className="btn-create">
            <Burger open={open} setOpen={setOpen} theme={theme} scrollPosition={scrollPosition} />
          </Grid>
        </Grid>
        <Menu open={open} theme={theme} />
      </Container>
    </WrapperNav>
  );
}