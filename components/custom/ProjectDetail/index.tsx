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
    id: string,
    detail: {
      incorporationName: string,
      incorporationAddress: string,
      acceptDate: string,
    },
    logo: string,
    projectName: string,
    symbol: string,
    standards: [],
    communications: [],
    smartContractAddress: string,
    websites: [],
    socialWebs: {
      name: string,
      link: string,
    }[],
    description: string,
    tokenAllocations: {
      allocationName: string,
      rate: number,
      amount: number,
      price: number,
      vesting: string
    }[],
    developmentPartner: {
      id: string,
      image: string,
      name: string,
      website: string,
      position: string,
    }[],
    developmentTeam: {
      id: string,
      image: string,
      name: string,
      website: string,
      position: string,
    }[]
  }
}

export default function ProjectDetail ({project}: ProjectDetailProps) {
  const dataChartDefault = {
    labels: [
      "Public sale",
      "Private sale",
      "Staking reward",
      "Community & marketing",
      "Team & Advisors",
      "Lab reservers",
      "Play to earn reward",
      "DEX liquidity",
    ],
    datasets: [
      {
        backgroundColor: [
          "#483168",
          "#00B919",
          "#685BF4",
          "#344DA3",
          "#15DAAE",
          "#AB5BF4",
          "#11B3D3",
          "#2424F4",
        ],
        data: [3, 12, 14, 27, 3, 5, 31, 5]
      }
    ]
  };

  const getDataChartDefault = () => {
    let tpmArrAllocationName: string[] = [];
    let tpmArrRate: number[] = [];
    let dataTpm: {
      labels: string[],
      datasets: {
        backgroundColor: string[],
        data: number[],
      }[]
    } = dataChartDefault;
    project.tokenAllocations.map(({allocationName, rate}) => {
      tpmArrAllocationName.push(allocationName);
      tpmArrRate.push(rate * 100);
    });
    dataTpm.labels = tpmArrAllocationName;
    dataTpm.datasets[0].data = tpmArrRate;
    return dataTpm;
  };

  return (
    <Container>

      <HeaderBox project={project} />

      <InformationProject project={project} />

      <BlockChainProject />

      <Introduce description={project.description} />

      <ChartTokenomics tokenAllocations={project.tokenAllocations} dataChart={getDataChartDefault()} />

      <Grid container>
        <h3 className="title-sec">Đối tác của Jade Labs</h3>
        <SliderSlick settings={settingsPartner} typeSettings={'img'} project={project}/>
      </Grid>

      <Grid container mt={2} mb={8}>
        <h3 className="title-sec">Đội ngũ Jadelabs</h3>
        <SliderSlick settings={settingsTeam} typeSettings={'team'} project={project}/>
      </Grid>

    </Container>
  );
}