import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import HeaderBox from 'components/custom/ProjectDetail/HeaderBox';
import InformationProject from 'components/custom/ProjectDetail/Information';
import BlockChainProject from 'components/custom/ProjectDetail/BlockChain';
import Introduce from 'components/custom/ProjectDetail/Introduce';
import ChartTokenomics from 'components/custom/ProjectDetail/ChartTokenomics';
import SliderSlick from 'components/custom/Slider';
import { settingsPartner, settingsTeam } from './config.slick';
export interface ProjectDetailProps {
  project: {
    id: number,
    img_logo_path: string,
    certifications_date: string,
    name_company: string,
    headquarters: string,
    name: string,
    unit_token: string,
    standard: string,
    basis: string,
    address_smart_contract: string,
    website: string,
    social: {
      id: number,
      icon_path: string,
      link: string,
    }[],
    qr_img_path: string,
    passport_of_blockchain: {
      img_path: string,
      list_img: {
        id: number,
        img_path: string,
        name: string,
      }[],
    },
    supply_date: string,
    NFT_ID: string,
    Contract_ID: string,
    TX_Hash: string,
    description: string,
    list_partner: {
      id: number,
      img_path: string,
      name: string,
      position: string,
    }[],
    list_team: {
      id: number,
      img_path: string,
      name: string,
      position: string,
    }[],
  }
}

export default function ProjectDetail ({project}: ProjectDetailProps) {
  return (
    <Container>

      <HeaderBox project={project} />

      <InformationProject project={project} />

      <BlockChainProject project={project} />

      <Introduce project={project} />

      <ChartTokenomics />

      <Grid container>
        <h3 className="title-sec">Đối tác của Jade Labs</h3>
        <SliderSlick settings={settingsPartner} typeSettings={'img'} listData={project.list_partner}/>
      </Grid>

      <Grid container mt={2} mb={8}>
        <h3 className="title-sec">Đội ngũ Jadelabs</h3>
        <SliderSlick settings={settingsTeam} typeSettings={'team'} listData={project.list_team}/>
      </Grid>

    </Container>
  );
}