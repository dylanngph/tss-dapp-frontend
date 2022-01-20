import * as React from 'react';
import Container from '@mui/material/Container';
import TableInvestmentFunds from 'components/custom/TableInvestmentFunds';
import Box from '@mui/material/Box';
import TitleSec from 'components/custom/TitleSec';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import { API_URL } from 'constants/api/apiConfigs';

export interface TableInvestmentFundsProps {
}

export default function InvestmentFundsPage () {
  const [loading, setLoading] = React.useState(false);
  const [investmentFunds, setInvestmentFunds] = React.useState();

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL.FUND_ALL);
      setInvestmentFunds(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ paddingTop: '24px' }}>
      <TitleSec title="Quỹ đầu tư" />
      {
        loading ?
        (
          <Box sx={{ height: 500, pt: 0.5 }}>
            <Skeleton width="50%" />
            <Skeleton width="50%" animation="wave" />
            <Skeleton width="50%" animation="wave" />
            <Skeleton width="50%" animation={false} />
          </Box>
        )
        :
          investmentFunds && (
            <TableInvestmentFunds investmentFunds={investmentFunds}/>
          )          
      }
    </Container>
  );
}