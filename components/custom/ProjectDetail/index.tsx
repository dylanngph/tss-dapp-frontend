import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import InformationProject from 'components/custom/ProjectDetail/Information';
import BlockChainProject from 'components/custom/ProjectDetail/BlockChain';
import Introduce from 'components/custom/ProjectDetail/Introduce';
import ChartTokenomics from 'components/custom/ProjectDetail/ChartTokenomics';
import SliderSlick from 'components/custom/Slider';
import { device } from 'styles/media-device';
export interface ProjectDetailProps {
  project: {
    img_logo_path: string,
    name_company: string,
    headquarters: string,
    name: string,
    unit_token: string,
    standard: string,
    basis: string,
    address_smart_contract: string,
    website: string,
    social: {
      ico_path: string,
      link: string,
    }[],
    qr_img_path: string,
  }
}

export default function ProjectDetail ({project}: ProjectDetailProps) {

  const settingsPartner = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  };
  const settingsTeam = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };
  const dataSlickPartner = [
    {
      id: 1,
      img_path: '/assets/images/image-slide-1.png',
      name: '',
      position: '',
    },
    {
      id: 2,
      img_path: '/assets/images/image-slide-5.png',
      name: '',
      position: '',
    },
    {
      id: 3,
      img_path: '/assets/images/image-slide-3.png',
      name: '',
      position: '',
    },
    {
      id: 4,
      img_path: '/assets/images/image-slide-4.png',
      name: '',
      position: '',
    },
    {
      id: 5,
      img_path: '/assets/images/image-slide-2.png',
      name: '',
      position: '',
    },
    {
      id: 6,
      img_path: '/assets/images/image-slide-4.png',
      name: '',
      position: '',
    }
  ];
  const dataSlickTeam = [
    {
      id: 1,
      img_path: '/assets/images/team-avatar.png',
      name: 'Bessie Cooper',
      position: 'Chief executive officer JadeLabs',
    },
    {
      id: 2,
      img_path: '/assets/images/team-avatar.png',
      name: 'Bessie Cooper',
      position: 'Chief executive officer JadeLabs',
    },
    {
      id: 3,
      img_path: '/assets/images/team-avatar.png',
      name: 'Bessie Cooper',
      position: 'Chief executive officer JadeLabs',
    },
    {
      id: 4,
      img_path: '/assets/images/team-avatar.png',
      name: 'Bessie Cooper',
      position: 'Chief executive officer JadeLabs',
    },
    {
      id: 5,
      img_path: '/assets/images/team-avatar.png',
      name: 'Bessie Cooper',
      position: 'Chief executive officer JadeLabs',
    },
  ];

  return (
    <Container>
      <Grid container justifyContent="space-between" pt={3} pb={3}>
        <Grid item container alignItems="center" justifyContent="space-between" md="auto" sm={12} pt={1}>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Box sx={{ width: 40, height: 40, marginRight: '16px' }}>
              <Image src={`/assets/images/${project.img_logo_path}`} alt={project.name} width={40} height={40}/>
            </Box>
            <TitleProject>{project.name}</TitleProject>
          </Box>
          <BoxCertified>
            <Box sx={{ width: 16, height: 16, marginRight: '6px', backgroundImage: 'url("/assets/icons/ico-shield-tick.svg")' }}/>
            Chứng nhận: 10/13/2020
          </BoxCertified>
        </Grid>
        <Grid item container md="auto" sm={12} pt={1}>
          <BoxButton>
            <Box sx={{ width: 24, height: 24, marginRight: '10px', backgroundImage: 'url("/assets/icons/ico-paperclip.svg")' }}/>
            Whitepaper
          </BoxButton>
          <BoxButton>
            <Box sx={{ width: 24, height: 24, marginRight: '10px', backgroundImage: 'url("/assets/icons/ico-global.svg")' }}/>
            Website
          </BoxButton>
        </Grid>
      </Grid>

      <InformationProject project={project} />

      <BlockChainProject project={project} />

      <Introduce />

      <ChartTokenomics />

      <Grid container>
        <h3 className="title-sec">Đối tác của Jade Labs</h3>
        <SliderSlick settings={settingsPartner} typeSettings={'img'} listData={dataSlickPartner}/>
      </Grid>

      <Grid container mt={2} mb={8}>
        <h3 className="title-sec">Đội ngũ Jadelabs</h3>
        <SliderSlick settings={settingsTeam} typeSettings={'team'} listData={dataSlickTeam}/>
      </Grid>

    </Container>
  );
}

const TitleProject = styled.h2`
  color: rgba(0, 0, 0, 0.85);
  margin: 0;
  font-size: 24px;
  line-height: 29px;
  font-family: 'Inter-Medium';
  margin-right: 16px;
`;

const BoxCertified = styled.div`
  font-size: 12px;
  line-height: 14px;
  background: #EFF2F5;
  border-radius: 4px;
  padding: 6px;
  color: #58667E;
  display: flex;
  max-height: 25px;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  @media screen and ${device.tabletL} {
    font-size: 14px;
    line-height: 17px;
    padding: 8px;
  }
`;

const BoxButton = styled.button`
  background: #EFF2F5;
  border-radius: 4px;
  font-size: 14px;
  line-height: 17px;
  color: #58667E;
  padding: 8px 12px;
  border: 0;
  display: flex;
  max-height: 40px;
  justify-content: center;
  align-items: center;
  font-family: 'Inter-Medium';
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 12px;
  }
`;