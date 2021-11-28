import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export default function BoxIOTA ({item}) {
  return (
    <Grid item container xs={4}>
      <BoxWrapper>
        <Grid container>
          <Grid item container xs={4}>
            <Box sx={{ width: 87, height: 87,}}><Image src={"/assets/images/" + item.img} alt="IOTA nft" width={87} height={87}/></Box>
          </Grid>
          <Grid item container direction="column" xs={8}>
            <BoxSubTitle>{item.subtitle}</BoxSubTitle>
            <BoxTitle>{item.title}</BoxTitle>
            <BoxDes>{item.description}</BoxDes>
          </Grid>
        </Grid>
      </BoxWrapper>
    </Grid>
  );
}

const BoxWrapper = styled.div`
  width: 100%;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  background: #FFFFFF;
  margin: 0px 12px;
  padding: 24px;
`;

const BoxSubTitle = styled.h5`
  margin: 0 0 8px;
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-blue);
`;

const BoxTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 24px;
  line-height: 29px;
  color: var(--color-black-1);
`;

const BoxDes = styled.p`
  margin: 0;
  color: var(--color-neutral-gray-2);
`;