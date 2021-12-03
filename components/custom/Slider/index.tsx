/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

export interface SliderProps {
  settings: object,
  typeSettings: string,
  listData: {
    id: number,
    img_path: string,
    name: string,
    position: string,
  }[]
}

export default function SliderSlick ({ settings, typeSettings, listData }: SliderProps) {
  const typeIMG = 'img';
  return (
    <Grid container>
      <CustomSlider {...settings}>
        {
          typeSettings === typeIMG ?
            listData.map(({id, img_path}) => {
              return (
                <div key={id}>
                  <Box sx={{padding: '0 10px'}}>
                    <img src={img_path} alt="image slide.png"/>
                  </Box>
                </div>
              )
            })
          :
            listData.map(({id, img_path, name, position}) => {
              return (
                <div key={id}>
                  <BoxTeam>
                    <div className="box-team-image">
                      <img src={img_path} alt={name}/>
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
  padding: 16px;
  margin: 12px;
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
      font-size: 24px;
      line-height: 29px;
      color: #446DFF;
      margin: 0 auto 12px;
    }
    span {
      font-family: 'Inter-Regular';
      color: #58667E;
    }
  }
`;