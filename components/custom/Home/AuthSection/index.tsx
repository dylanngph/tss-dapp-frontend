/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { listAuthSection } from 'constants/data/nft';
import { device } from 'styles/media-device';

export default function AuthSection () {
  return (
    <WrapperSection>
      <Container maxWidth="lg">
        <h3 className="title-sec">Đơn vị xác thực</h3>
        <Grid container>
          {
            listAuthSection.map(({id, img_path, name}) => {
              return (
                <Grid key={id} item container direction="row" alignItems="center" justifyContent="center" xs={4} p={2}>
                  <img src={img_path} alt={name} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </WrapperSection>
  );
}

const WrapperSection = styled.div`
  margin: 50px 0 30px;
  h3 {
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and ${device.tablet} {
    margin: 150px 0 30px;
  }
`;