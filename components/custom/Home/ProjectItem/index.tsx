import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LIST_IMG_NFT } from 'constants/data/nft'
import { minimizeAddressSmartContract } from 'utils/helper';
import { useRouter } from 'next/router';
export interface ProjectItemProps {
  project: {
    logo: string,
    projectName: string,
    symbol: string,
    communications: string[],
    standards: string[],
    smartContractAddress: string,
    slug: string,
  },
  index: number,
}

export default function ProjectItem ({project, index}: ProjectItemProps) {
  const router = useRouter();
  return (
    <tr onClick={() => { router.push(`/project/${project?.slug}`) }}>
      <td>{index + 1}</td>
      <td>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Box sx={{ width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', '& img': {maxWidth: '100%', height: 'auto'} }}>
            <img src={project?.logo} alt={project?.projectName}/>
          </Box>
          <span>{project?.projectName}</span>
        </Box>
      </td>
      <td>{project?.symbol.toUpperCase()}</td>
      <td>
        <Grid item container direction="row" justifyContent="flex-start" alignItems="center">
          {LIST_IMG_NFT.map((item) => (
            <Box key={item.id} sx={{ width: 34, height: 24 }}>
              <Image src={item.image} alt={item.name} width={24} height={24}/>
            </Box>
          ))}
        </Grid>
      </td>
      <td>{project?.standards.join(", ")}</td>
      <td>{project?.communications.join(", ")}</td>
      <td>{minimizeAddressSmartContract(project?.smartContractAddress)}</td>
    </tr>
  );
}