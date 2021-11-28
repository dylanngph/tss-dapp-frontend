import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';

export default function ProjectItem ({project, index}) {
  const router = useRouter();
  return (
    <tr onClick={() => { router.push(`/project/${project.id}`) }}>
      <td>{index}</td>
      <td>
        <Grid item container direction="row" justifyContent="flex-start" alignItems="center">
          <Box sx={{ width: 34, height: 24 }}>
            <Image src={`/assets/images/${project.img_path}`} alt={project.name} width={24} height={24}/>
          </Box>
          <span>{project.name}</span>
        </Grid>
      </td>
      <td>{project.token}</td>
      <td>
        <Grid item container direction="row" justifyContent="flex-start" alignItems="center">
          {project.nft.map((item) => {
            return (
              <Box key={item} sx={{ width: 34, height: 24 }}>
                <Image src={`/assets/images/IOTA${item}-small.png`} alt="digital-currency-ogo" width={24} height={24}/>
              </Box>
            )
          })}
        </Grid>
      </td>
      <td>{project.standard}</td>
      <td>{project.basis}</td>
      <td>{project.address_smart_contract}</td>
    </tr>
  );
}