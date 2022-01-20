import * as React from 'react';
import type { NextPage } from "next";
import Head from "next/head";
import Header from 'components/display/Header';
import Footer from "components/display/Footer";
import FunPage from "components/display/Fund";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useRouter } from 'next/router';
import axios from 'axios';
import { API_URL } from 'constants/api/apiConfigs';

const IFund: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [fundItem, setFundItem] = React.useState();

  React.useEffect(() => {
    fetchData();
  }, [router]);

  const fetchData = async () => {
    if (!router.query.id) return;
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL.FUND_DETAIL_ALL}${router.query.id}`);
      setFundItem(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>TSS - Quỹ đầu tư</title>
        <meta name="description" content="TSS - Quỹ đầu tư" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header theme={'black'} />
        {
          loading ?
          (
            <Container>
              <Box sx={{ height: 500, pt: 0.5 }}>
                <Skeleton width="50%" />
                <Skeleton width="50%" animation="wave" />
                <Skeleton width="50%" animation="wave" />
                <Skeleton width="50%" animation={false} />
              </Box>
            </Container>
          )
          :
            fundItem && (
              <FunPage fundItem={fundItem} />
            )
        }
        <Footer />
      </main>

    </div>
  );
};

export default IFund;
