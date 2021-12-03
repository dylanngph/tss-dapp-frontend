/* eslint-disable @next/next/no-img-element */
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { device } from 'styles/media-device';

export interface BoxIOTAProps {
  IOTA: {
    img: string,
    title: string,
    subtitle: string,
    description: string,
  }
}

export default function BoxIOTA ({IOTA}: BoxIOTAProps) {
  return (
    <Grid item container md={4}>
      <BoxWrapper>
        <Grid container>
          <Grid item style={{ width: '99px' }}>
            <img src={"/assets/images/" + IOTA.img} alt="IOTA nft" />
          </Grid>
          <Grid item style={{ width: 'calc(100% - 99px)' }} container direction="column">
            <h5>{IOTA.subtitle}</h5>
            <h3>{IOTA.title}</h3>
            <p>{IOTA.description}</p>
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
  margin: 0px 12px 20px;
  padding: 24px;
  @media screen and ${device.tabletL} {
    margin: 0px 12px;
  }
  h5 {
    margin: 0 0 8px;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--color-blue);
  }
  h3 {
    margin: 0 0 10px;
    font-size: 24px;
    line-height: 29px;
    color: var(--color-black-1);
  }
  p {
    margin: 0;
    color: var(--color-neutral-gray-2);
  }
`;