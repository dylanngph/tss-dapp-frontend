import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

export interface BoxDetailProps {
  title: string,
  content: string,
}

export default function BoxDetail ({title, content}: BoxDetailProps) {
  return (
    <Grid item xs={6} sm={6}>
      <BoxConainer>
        <BoxTitle>{title}</BoxTitle>
        <BoxContent>{content}</BoxContent>
      </BoxConainer>
    </Grid>
  );
}

const BoxConainer = styled(Box)`
  background-color: #EFF2F5;
  border-radius: 8px;
  padding: 12px;
`;

const BoxTitle = styled(Box)`
  font-size: 16px;
  color: #A6B0C3;
  margin-bottom: 12px;
`;

const BoxContent = styled(Box)`
  font-weight: 600;
  font-size: 18px;
  color: #446DFF;
`;