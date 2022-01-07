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
    detail: {
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
  
}

const IMG_RANDOM = '/assets/images/image-slide-';
const IMG_TEAM_DEFAULT = '/assets/images/team-avatar.png';
const typeIMG = 'img';

export default function SliderSlick ({ settings, typeSettings, project }: SliderProps) {
  return (
    <Grid container>
      <CustomSlider {...settings}>
        {
          typeSettings === typeIMG ?
          project.detail.developmentPartner.map(({id, image, name}, index) => {
            return (
              <div key={index}>
                <Box sx={{padding: '0 10px'}}>
                  <img src={image?image:`${IMG_RANDOM + (Math.floor(Math.random() * 5) + 1)}.png`} alt={name}/>
                </Box>
              </div>
            )
          })
          :
          project.detail.developmentTeam.map(({id, image, name, position}, index) => {
            return (
              <div key={index}>
                <BoxTeam>
                  <div className="box-team-image">
                    <img src={image?image:IMG_TEAM_DEFAULT} alt={name}/>
                  </div>
                  <div className="box-team-content">
                    <h6>{name}</h6>
                    <span>{position}</span>
                  </div>
                </BoxTeam>
              </div>
            )
          })
        }
      </CustomSlider>
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
  .slick-slide img {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
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
  .box-team-image {
    width: 86px;
    height: 86px;
    margin: 0 auto 12px;
    img {
      border-radius: 50%;
    }
  }
  .box-team-content {
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
  }
  @media screen and ${device.tabletL} {
    margin: 12px;
    padding: 16px;
    .box-team-content {
      h6 {
        font-size: 24px;
        line-height: 29px;
      }
    }
  }
`;