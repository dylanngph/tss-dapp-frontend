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

        <meta property="og:title" content="TSS - Đơn vị/Tổ chức đầu tư" />
        <meta property="og:image" content="/assets/images/logo-tss-black.png" />

        <meta name="twitter:title" content="TSS - Đơn vị/Tổ chức đầu tư" />
        <meta name="twitter:description" content="TSS - Đơn vị/Tổ chức đầu tư" />
        <meta name="twitter:image" content="/assets/images/logo-tss-black.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <Header theme={'black'}/>
        <InvestmentFundsPage />
        <Footer criteriaShown={false} disclaimerShown={true} />
      </main>

    </div>
  );
};

export default InvestmentFunds;