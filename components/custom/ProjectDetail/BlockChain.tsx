/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Image from 'next/image';
import {
  Grid,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Fade,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TitleSec from 'components/custom/TitleSec';
import styled from 'styled-components';
import { formatDateVI, minimizeAddressSmartContract } from 'utils/helper';
import { LEGAL_PROP, TECH_LEVEL_PROP, SOCIAL_VALUE_PROP, COMMUN_REPU_PROP, LEGAL_PROP_COLOR, TECH_LEVEL_PROP_COLOR, SOCIAL_VALUE_PROP_COLOR, COMMUN_REPU_PROP_COLOR, PASSPORT_BLOCKCHAIN } from 'constants/data/nft';
import { device } from 'styles/media-device';

export interface InformationProps {
  nft: {
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
  }
}

export default function BlockChain ({nft}: InformationProps) {
  const [blockTitle, setBlockTitle] = React.useState('Passport of Blockchain');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // setBlockTitle()
    setAnchorEl(null);
  };

  return (
    <Grid container px={{lg: 2, xs: 0}}>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          fontSize: '18px',
          fontWeight: '700',
          textTransform: 'inherit',
          padding: '0',
          height: '40px',
          marginBottom: '20px',
          marginTop: {
            xs: '20px',
            lg: '0'
          }
        }}
      >
        <Box sx={{
          color: '#11142D',
          fontSize: '18px',
          fontWeight: '700',
          textTransform: 'inherit',
          backgroundColor: '#EFF2F5',
          borderRadius: '8px',
          padding: '8px 16px',
          lineHeight: '24px'
        }}>{blockTitle}</Box>
        <Box sx={{
          color: '#58667E',
          backgroundColor: '#EFF2F5',
          borderRadius: '8px',
          padding: '8px',
          marginLeft: '5px',
          display: 'flex',
          alignItems: 'center'
        }}><ArrowDropDownIcon /></Box>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => { setBlockTitle('Passport of Blockchain'); handleClose();}}>Passport of Blockchain</MenuItem>
        <MenuItem onClick={() => { setBlockTitle('Tài sản số'); handleClose();}}>Tài sản số</MenuItem>
        <MenuItem onClick={() => { setBlockTitle('Tài sản nền'); handleClose();}}>Tài sản nền</MenuItem>
      </Menu>
      { blockTitle === 'Passport of Blockchain' ? (
          <CardStamp>
          <Box sx={{
            position: 'relative',
            width: '100%',
            padding: '20px',
            borderTopRightRadius: '12px',
            borderTopLeftRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            backgroundImage: 'url("/assets/images/bg-stamp.png")', }}>
            <Image src={PASSPORT_BLOCKCHAIN.logo} alt="PASSPORT IMG" width={140} height={140} />
            <Box sx={{
              position: 'absolute',
              top: '15px',
              left: '20px',
              color: '#446DFF',
              textTransform: 'uppercase',
              background: '#F0F6FF',
              borderRadius: '4px',
              fontSize: '14px',
              padding: '6px',
              fontWeight: 'bold'
            }}>SEAL NFT</Box>
          </Box>
          <Box sx={{
            padding: '10px 20px'
          }}>
            <TitleSec title="Passport of Blockchain" />
            <Grid container justifyContent={'space-between'} mb={2}>
              <span className="block-copy">TOKEN ID</span>
              <Box sx={{ color: '#11142D', fontWeight: '500'}}>{nft.tokenId}</Box>
            </Grid>
            <Grid container justifyContent={'space-between'} mb={2}>
              <span className="block-copy">Contract ID</span>
              <BoxCopy onClick={() => {navigator.clipboard.writeText(PASSPORT_BLOCKCHAIN.Contract_ID)}}><a href={process.env.NEXT_PUBLIC_LINK_BS_SCAN} target="_blank" rel="noopener noreferrer">{minimizeAddressSmartContract(process.env.NEXT_PUBLIC_BS_SCAN_CODE)}</a></BoxCopy>
            </Grid>
            <Grid container justifyContent={'space-between'} mb={2}>
              <span className="block-copy">TX Hash</span>
              <BoxCopy onClick={() => {navigator.clipboard.writeText(nft.txHash)}}>{minimizeAddressSmartContract(nft.txHash)}</BoxCopy>
            </Grid>
            <Grid container justifyContent={'space-between'} mb={2}>
              <span className="block-copy">Ngày cấp</span>
              <Box sx={{ color: '#11142D', fontWeight: '500'}}>{formatDateVI(nft?.issuedAt)}</Box>
            </Grid>
            <Grid container justifyContent={'space-between'} mb={2}>
              <span className="block-copy">Ngày hết hạn:</span>
              <Box sx={{ color: '#11142D', fontWeight: '500'}}>{formatDateVI(nft?.issuedAt)}</Box>
            </Grid>
          </Box>
        </CardStamp>
      ) : (
        <Box sx={{
          boxShadow: '0px 4px 17px rgba(0, 0, 0, 0.05)',
          borderRadius: '12px',
          border: '1px solid #EFF2F5'
        }}>
          <Grid container direction="column" justifyContent="center" alignItems="center" p={6}>
            <Image src="/assets/images/updating.png" alt="updating.png" width={231} height={222}/>
            <p>Thông tin đang cập nhật và sẽ sớm xuất hiện</p>
          </Grid>
        </Box>
      )}
    </Grid>
  );
}

const CardStamp = styled(Box)`
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  width: 100%;
  background-image: url("/assets/images/TSS seal.png");
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: right bottom;
  border: 1px solid #EFF2F5;
`

const BoxCopy = styled(Box)`
  position: relative;
  padding-right: 20px;
  cursor: copy;
  color: #11142D;
  font-weight: 500;
  &:after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: url('/assets/icons/ico-copy.svg');
    top: 3px;
    right: 0;
  }
`;