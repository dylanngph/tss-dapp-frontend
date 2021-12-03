import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
export interface ProjectItemProps {
  project: {
    id: number,
    img_path: string,
    name: string,
    token: string,
    nft: Array<string>,
    standard: string,
    basis: string,
    address_smart_contract: string,
  },
  index: number,
}

export default function ProjectItem ({project: {id, img_path, name, token, nft, standard, basis, address_smart_contract}, index}: ProjectItemProps) {
  const router = useRouter();
  return (
    <tr onClick={() => { router.push(`/project/${id}`) }}>
      <td>{index}</td>
      <td>
        <Grid item container direction="row" justifyContent="flex-start" alignItems="center">
          <Box sx={{ width: 34, height: 24 }}>
            <Image src={`/assets/images/${img_path}`} alt={name} width={24} height={24}/>
          </Box>
          <span>{name}</span>
        </Grid>
      </td>
      <td>{token}</td>
      <td>
        <Grid item container direction="row" justifyContent="flex-start" alignItems="center">
          {nft.map((iNFT) => {
            return (
              <Box key={iNFT} sx={{ width: 34, height: 24 }}>
                <Image src={`/assets/images/IOTA${iNFT}-small.png`} alt="iNFT" width={24} height={24}/>
              </Box>
            )
          })}
        </Grid>
      </td>
      <td>{standard}</td>
      <td>{basis}</td>
      <td>{address_smart_contract}</td>
    </tr>
  );
}