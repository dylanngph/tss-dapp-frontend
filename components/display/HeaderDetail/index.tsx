import * as React from 'react';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from "next/link";
import styled from 'styled-components';
import { device } from 'styles/media-device';

export interface HeaderDetail {
}

export default function HeaderDetail (props: HeaderDetail) {
  return (
    <WrapperNav>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item container alignItems="center" xs={8}>
            <Box sx={{ width: 70, height: 32, cursor: 'pointer' }}>
              <Link href="/" passHref>
                <Image src="/logo-tss-black.svg" alt="LOGO TSS" width={70} height={32}/>
              </Link>
            </Box>
            <ListMenuNav>
              <li className="active">Trang chủ</li>
              <li>Listing Hồ sơ</li>
            </ListMenuNav>
          </Grid>
          <Grid item container direction="row" alignItems="center" justifyContent="flex-end" xs={4}>
            <CustomButton variant="contained">Tạo hồ sơ</CustomButton>
          </Grid>
        </Grid>
      </Container>
    </WrapperNav>
  );
}

const WrapperNav = styled.nav`
  padding: 24px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
`;

const ListMenuNav = styled.ul`
  list-style: none;
  padding: 0;
  li {
    display: inline-block;
    margin-left: 30px;
    cursor: pointer;
    font-family: 'Inter-Bold';
    &.active {
      color: var(--color-neutral-gray-1);
    }
    &:first-child {
      display: none;
    }
  }
  @media screen and ${device.tablet} {
    padding-left: 30px;
    list-style: none;
    li {
      &:first-child {
        display: inline-block;
      }
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
  },
});