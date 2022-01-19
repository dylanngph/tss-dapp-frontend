import * as React from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BoxDetail from 'components/custom/Fund/BoxDetail';
import Introduce from 'components/custom/Fund/Introduce';
import Projects from 'components/custom/Fund/Projects';
import styled from 'styled-components';

const FundItemInit = {
  image: '/assets/images/IOTA.png',
  name: 'Dreamboat Capital',
  type: 'Đầu tư blockchain',
  foundedYear: '2021',
  dateInvestLastest: '12/12/2021',
  state: 'Hoạt động',
  description: 'Dreamboat Capital has made 28 investments. Their most recent investment was on Dec. 5, 2021, when raised $2.7M Dreamboat Capital has made 28 investments. Their most recent investment was on Dec. 5, 2021, when raised $2.7M Dreamboat Capital has made 28 investments. Their most recent investment was on Dec. 5, 2021, when raised $2.7M Dreamboat Capital has made 28 investments. Their most recent investment was on Dec. 5, 2021, when raised $2.7M ',
  projects: [
    {
      image: '/assets/images/IOTA2-small.png',
      name: 'NINNEKO',
      type: 'Private',
      totalAmount: 1.1,
      dateCallCapital: '22/12/2020',
    },
    {
      image: '/assets/images/IOTA2-small.png',
      name: 'NINNEKO',
      type: 'Private',
      totalAmount: 1.1,
      dateCallCapital: '22/12/2020',
    },
    {
      image: '/assets/images/IOTA2-small.png',
      name: 'NINNEKO',
      type: 'Private',
      totalAmount: 1.1,
      dateCallCapital: '22/12/2020',
    },
    {
      image: '/assets/images/IOTA2-small.png',
      name: 'NINNEKO',
      type: 'Private',
      totalAmount: 1.1,
      dateCallCapital: '22/12/2020',
    }
  ],
  socialWebs: [
    {
      name: 'Instagram',
      link: 'instagram.com',
    },
    {
      name: 'Facebook',
      link: 'facebook.com',
    }
  ]
}

export interface FunPageProps {
}

const verifyWebsite = (link: string) => {
  if (link.indexOf('http') === -1) {
    return `https://${link}`;
  }
  return link;
}

export default function FunPage(props: FunPageProps) {
  const [FundItem, setFundItem] = React.useState(FundItemInit);
  return (
    <Container sx={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Image src={FundItem?.image} alt={FundItem?.name} width={86} height={86} />
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9}>
              <TitleProject>{FundItem?.name}</TitleProject>
              <Grid container>
                { FundItem?.socialWebs.map(({name, link}, index) => (
                  <BoxSocial key={index}>
                    <a href={verifyWebsite(link)} target="_blank" rel="noopener noreferrer">
                      <ImgSocial src={`/assets/icons/socials-white/${name.replaceAll(" ", "").toLowerCase()}.svg`} alt="social" />
                    </a>
                  </BoxSocial>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={12} md={8} lg={8} spacing={2}>
          <BoxDetail title="Dạng đầu tư" content={FundItem?.type} />
          <BoxDetail title="Năm thành lập" content={FundItem?.foundedYear} />
          <BoxDetail title="Lần cuối đầu tư" content={FundItem?.dateInvestLastest} />
          <BoxDetail title="Trạng thái" content={FundItem?.state} />
        </Grid>
      </Grid>

      <Introduce description={FundItem?.description} />

      <Projects data={FundItem?.projects} />
    </Container>
  );
}

const TitleProject = styled.h2`
  color: rgba(0, 0, 0, 0.85);
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  font-family: 'Inter-Medium';
`;

const BoxSocial = styled(Box)`
  width: 36px;
  height: 36px;
  background: #446DFF;
  border-radius: 50%;
  padding: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const ImgSocial = styled.img`
  width: 20px;
  height: 20px;
`;