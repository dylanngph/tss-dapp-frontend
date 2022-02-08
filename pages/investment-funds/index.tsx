import type { NextPage } from "next";
import Head from "next/head";
import Header from 'components/display/Header';
import Footer from "components/display/Footer";
import InvestmentFundsPage from "components/display/InvestmentFunds";

const InvestmentFunds: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TSS - Đơn vị/Tổ chức đầu tư</title>
        <meta name="description" content="TSS - Đơn vị/Tổ chức đầu tư" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header theme={'black'}/>
        <InvestmentFundsPage />
        <Footer criteriaShown={true} disclaimerShown={true} />
      </main>

    </div>
  );
};

export default InvestmentFunds;