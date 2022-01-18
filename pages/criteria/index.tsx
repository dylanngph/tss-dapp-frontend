import type { NextPage } from "next";
import Head from "next/head";
import Header from 'components/display/Header';
import Footer from "components/display/Footer";
import CriteriaPage from "components/display/Criteria";

const Criteria: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TSS - Tiêu chí xét duyệt dự án</title>
        <meta name="description" content="TSS - Tiêu chí xét duyệt dự án" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header theme={'black'}/>
        <CriteriaPage />
        <Footer />
      </main>

    </div>
  );
};

export default Criteria;