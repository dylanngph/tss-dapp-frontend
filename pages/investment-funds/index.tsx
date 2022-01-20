import type { NextPage } from "next";
import Head from "next/head";
import Header from 'components/display/Header';
import Footer from "components/display/Footer";
import InvestmentFundsPage from "components/display/InvestmentFunds";

const InvestmentFunds: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TSS - Quỹ đầu tư</title>
        <meta name="description" content="TSS - Quỹ đầu tư" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header theme={'black'}/>
        <InvestmentFundsPage />
        <Footer />
      </main>

    </div>
  );
};

export default InvestmentFunds;