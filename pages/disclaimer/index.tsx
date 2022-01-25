import type { NextPage } from "next";
import Head from "next/head";
import Header from 'components/display/Header';
import Footer from "components/display/Footer";
import DisclaimerPage from "components/display/Disclaimer";

const Disclaimer: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TSS - Tuyên bố miễn trừ trách nhiệm</title>
        <meta name="description" content="TSS - Tuyên bố miễn trừ trách nhiệm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header theme={'black'}/>
        <DisclaimerPage />
        <Footer criteriaShown={true} disclaimerShown={false} />
      </main>

    </div>
  );
};

export default Disclaimer;