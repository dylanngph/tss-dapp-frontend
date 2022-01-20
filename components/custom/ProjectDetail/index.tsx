import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TitleSec from 'components/custom/TitleSec';
import HeaderBox from 'components/custom/ProjectDetail/HeaderBox';
import Information from 'components/custom/ProjectDetail/Information';
import BlockChain from 'components/custom/ProjectDetail/BlockChain';
import Introduce from 'components/custom/ProjectDetail/Introduce';
import ChartTokenomics from 'components/custom/ProjectDetail/ChartTokenomics';
import SliderSlick from 'components/custom/Slider';
import { settingsPartner, settingsTeam } from 'constants/data/slick';
export interface ProjectDetailProps {
  project: {
    id: string,
    detail: {
      incorporationName: string,
      incorporationAddress: string,
      acceptDate: string,
    },
    nfts: {
      id: string,
      tokenId: string,
      imageId: string,
      txHash: string,
      owner: string,
      issuedAt: string,
      legalId: string,
      techLevelId: string,
      socialValueId: string,
      communRepuId: string,
    }[],
    logo: string,
    projectName: string,
    symbol: string,
    standards: string[],
    communications: string[],
    smartContractAddress: string,
    websites: string[],
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
      [key: string]: string
    }[],
    developmentTeam: {
      [key: string]: string
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
      tpmArrRate.push(rate);
    });
    dataTpm.labels = tpmArrAllocationName;
    dataTpm.datasets[0].data = tpmArrRate;
    return dataTpm;
  };

  return (
    <Container>

      <HeaderBox project={project} />

      <Information project={project} />

      {
        project?.nfts.map((nft, index) => (
          <BlockChain key={index} nft={nft} />
        ))
      }

      <Introduce description={project.description} />

      <ChartTokenomics tokenAllocations={project.tokenAllocations} dataChart={getDataChartDefault()} />

      <Grid container>
        <TitleSec title={`Đối tác của ${project.projectName}`} />
        <SliderSlick settings={settingsPartner} typeSettings={'img'} project={project}/>
      </Grid>

      <Grid container mt={2} mb={8} id="boxSlideTeam">
        <TitleSec title={`Đội ngũ của ${project.projectName}`} />
        <SliderSlick settings={settingsTeam} typeSettings={'team'} project={project}/>
      </Grid>

    </Container>
  );
}