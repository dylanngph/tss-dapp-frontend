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

export default function ProjectDetail({ project }: ProjectDetailProps) {
  var dynamicColors = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

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
        backgroundColor: [],
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
    project.tokenAllocations.map(({ allocationName, rate }) => {
      tpmArrAllocationName.push(allocationName);
      tpmArrRate.push(rate);
    });
    dataTpm.labels = tpmArrAllocationName;
    dataTpm.datasets[0].data = tpmArrRate;

    project.tokenAllocations.map((item, index) => {
      dataTpm.datasets[0].backgroundColor[index] = dynamicColors();
    });

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

      {
        project.developmentPartner.length
          ?
          <Grid container>
            <TitleSec title={`Đối tác của ${project.projectName}`} />
            <SliderSlick settings={settingsPartner} typeSettings={'img'} project={project} />
          </Grid>
          :
          null
      }

      {
        project.developmentTeam.length
          ?
          <Grid container mt={2} mb={8} id="boxSlideTeam">
            <TitleSec title={`Đội ngũ của ${project.projectName}`} />
            <SliderSlick settings={settingsTeam} typeSettings={'team'} project={project} />
          </Grid>
          :
          null
      }

    </Container>
  );
}