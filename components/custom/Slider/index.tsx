/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { device } from 'styles/media-device';

export interface SliderProps {
  settings: object,
  typeSettings: string,
  project: {
    developmentPartner: {
      [key: string]: string
    }[],
    developmentTeam: {
      [key: string]: string
    }[]
  }
}

const IMG_TEAM_DEFAULT = '/assets/images/team-avatar.png';
const TYPE_SLICK = 'img';

export default function SliderSlick ({ settings, typeSettings, project }: SliderProps) {
  return (
    <Grid container sx={{ padding: '0 25px' }}>
      {
        typeSettings === TYPE_SLICK ?
          project.developmentPartner.length > 0 && (
            <CustomSlider className='quang-huy' {...settings}>
              {
                project.developmentPartner.map(({id, image, name, website}, index) => {
                  return (
                    <Box key={index}>
                      <Box sx={{padding: '0 10px'}}>
                        <StyledImg src={image} alt={name} />
                      </Box>
                    </Box>
                  )
                })
              }
            </CustomSlider>
          )
        :
          project.developmentTeam.length > 0 && (
            <CustomSlider {...settings}>
              {
                project.developmentTeam.map(({id, image, name, position}, index) => {
                  return (
                    <Box key={index}>
                      <BoxTeam>
                        <BoxTeamImg>
                          <img src={image?image:IMG_TEAM_DEFAULT} alt={name}/>
                        </BoxTeamImg>
                        <BoxTeamContent>
                          <h6>{name}</h6>
                          <span>{position}</span>
                        </BoxTeamContent>
                      </BoxTeam>
                    </Box>
                  )
                })
              }
            </CustomSlider>
          )
      }
    </Grid>
  );
}

const CustomSlider = styled(Slider)`
  width: 100%;
  margin-bottom: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  .slick-dots li button:before {
    color: #A6B0C3;
    font-size: 12px;
  }
  .slick-dots li.slick-active button:before {
    color: #446DFF;
  }
  .slick-prev:before, .slick-next:before {
    color: #A6B0C3;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`;

const BoxTeam = styled.div`
  background: #FFFFFF;
  border: 1px solid #EFF2F5;
  box-sizing: border-box;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 10px;
  margin: 6px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 15px;
    width: calc(100% - 30px);
    height: 100px;
    background: #FFFFFF;
    border: 1px solid #EFF2F5;
    box-sizing: border-box;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    z-index: -1;
  }
  @media screen and ${device.tabletL} {
    margin: 12px;
    padding: 16px;
  }
`;

const BoxTeamImg = styled(Box)`
  width: 86px;
  height: 86px;
  margin: 0 auto 12px;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BoxTeamContent = styled(Box)`
  text-align: center;
  h6 {
    font-size: 18px;
    line-height: 24px;
    color: #446DFF;
    margin: 0 auto 12px;
  }
  span {
    font-family: 'Inter-Regular';
    color: #58667E;
  }
  @media screen and ${device.tabletL} {
    h6 {
      font-size: 24px;
      line-height: 29px;
    }
  }
`;