import type { NextPage } from "next";
import Head from "next/head";
import Header from 'components/display/Header';
import Footer from "components/display/Footer";
import CriteriaPage from "components/display/Criteria";

const Criteria: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TSS - Tiêu chí đánh giá thông tin dự án</title>
        <meta name="description" content="TSS - Tiêu chí đánh giá thông tin dự án" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header theme={'black'}/>
        <CriteriaPage />
        <Footer criteriaShown={false} disclaimerShown={true} />
      </main>

    </div>
  );
};

export default Criteria;