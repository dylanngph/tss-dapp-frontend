import * as React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

export interface IntroduceProps {
  project: {
    description: string,
  }
}

export default function Introduce ({project}: IntroduceProps) {
  return (
    <Grid container pt={4} pb={2}>
      <h3 className="title-sec">Giới thiệu</h3>
      <PSection>{project.description}</PSection>
    </Grid>
  );
}

const PSection = styled.p`
  font-family: 'Inter-Regular';
  color: #58667E;
`;