import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
export interface ProjectItemProps {
  project: {
    logo: string,
    projectName: string,
    symbol: string,
    communications: [],
    standards: [],
    smartContractAddress: string,
    _id: string,
  },
  index: number,
}

export default function ProjectItem ({project, index}: ProjectItemProps) {
  const router = useRouter();
  const minimizeAddress = (smartContractAddress: string) => {
    return smartContractAddress.substring(0, 8) + "..." + smartContractAddress.substring(smartContractAddress.length - 4, smartContractAddress.length);
  };
  return (
    <tr onClick={() => { router.push(`/project/${project._id}`) }}>
      <td>{index + 1}</td>
      <td>
        <Grid item container direction="row" justifyContent="flex-start" alignItems="center">
          <Box sx={{ width: 34, height: 24 }}>
            <Image src={`/assets/images/${project.logo}`} alt={project.projectName} width={24} height={24}/>
          </Box>
          <span>{project.projectName}</span>
        </Grid>
      </td>
      <td>{project.symbol}</td>
      <td>
        <Grid item container direction="row" justifyContent="flex-start" alignItems="center">
          {/* {nft.map((item) => {
            return (
              <Box key={item} sx={{ width: 34, height: 24 }}>
                <Image src={`/assets/images/IOTA${item}-small.png`} alt="iNFT" width={24} height={24}/>
              </Box>
            )
          })} */}
          <Box sx={{ width: 34, height: 24 }}>
            <Image src="/assets/images/IOTA1-small.png" alt="iNFT" width={24} height={24}/>
          </Box>
        </Grid>
      </td>
      <td>{project.standards.join(", ")}</td>
      <td>{project.communications.join(", ")}</td>
      <td>{minimizeAddress(project.smartContractAddress)}</td>
    </tr>
  );
}