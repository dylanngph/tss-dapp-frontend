/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Header from 'components/display/Header';
import Grid from '@mui/material/Grid';
import Link from "next/link";
import Box from '@mui/material/Box';
import styled from 'styled-components';

export interface ComingSoonProps {
}

export default function ComingSoon(props: ComingSoonProps) {
  return (
    <div>
      <Header theme={'black'} />
      <Grid container direction="column" justifyContent="center" alignItems="center" mt={16} mb={16}>
        <Box sx={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <img src="/assets/images/comingsoon.png" alt="comingsoon" />
          <h1>Chức năng đang phát triển</h1>
          <p>Chức năng đang phát triển, hay quay lại sau nhé.</p>
          <BoxLink>
            <Link href="/" passHref>Trở về trang chủ</Link>
          </BoxLink>
        </Box>
      </Grid>
    </div>
  );
}

const BoxLink = styled.div`
  margin-top: 25px;
  a {
    padding: 12px 24px;
    text-transform: none;
    line-height: 19px;
    font-weight: 600;
    background-color: #446DFF;
    font-family: 'Inter-Regular';
    border-radius: 8px;
    color: #fff;
    display: inline-block;
  }
`;