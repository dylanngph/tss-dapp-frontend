import Image from 'next/image';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { device } from 'styles/media-device';

export default function AuthSection () {
  const list = [
    {
      id: 1,
      img_path: '/assets/images/logoTSS.png',
      name: 'LOGO TSS',
    },
    {
      id: 2,
      img_path: '/assets/images/logoBAS.png',
      name: 'LOGO BAS',
    },
    {
      id: 3,
      img_path: '/assets/images/logoVBC.png',
      name: 'LOGO VBC',
    }
  ];
  return (
    <WrapperSection>
      <Container maxWidth="lg">
        <h3 className="title-sec">Đơn vị xác thực</h3>
        <Grid container>
          {
            list.map(({id, img_path, name}) => {
              return (
                <Grid key={id} item container direction="row" alignItems="center" justifyContent="center" xs={4} p={2}>
                  <Image src={img_path} alt={name} width={240} height={103}/>
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
  @media screen and ${device.tablet} {
    margin: 150px 0 30px;
  }
`;