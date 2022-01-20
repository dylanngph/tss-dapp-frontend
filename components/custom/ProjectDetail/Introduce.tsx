import * as React from 'react';
import Grid from '@mui/material/Grid';
import TitleSec from 'components/custom/TitleSec';
import styled from 'styled-components';

export interface IntroduceProps {
  description: string,
}

export default function Introduce ({description}: IntroduceProps) {
  return (
    <Grid container pt={4} pb={2}>
      <TitleSec title="Giới thiệu" />
      <PSection>{description}</PSection>
    </Grid>
  );
}

const PSection = styled.p`
  font-family: 'Inter-Regular';
  color: #58667E;
  width: 100%;
  white-space: pre-line;
`;