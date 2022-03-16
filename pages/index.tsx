import type { NextPage } from "next";
import Head from "next/head";
import Header from 'components/display/Header';
import Footer from "components/display/Footer";
import Banner from "components/custom//Home/Banner";
import AuthenticationSection from "components/custom/Home/AuthSection";
import ListProjectSection from "components/custom/Home/ListProjectSection";
import ProcessNFTSection from "components/custom/Home/ProcessNFTSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TSS - D-App</title>
        <meta name="description" content="TSS - Phát hành NFT xác nhận thông tin dự án Blockchain của bạn" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="TSS - D-App" />
        <meta property="og:image" content="https://tss.org.vn/wp-content/uploads/2021/11/tss.org_.vn_.jpg" />

        <meta name="twitter:title" content="TSS - D-App" />
        <meta name="twitter:description" content="TSS - Phát hành NFT xác nhận thông tin dự án Blockchain của bạn" />
        <meta name="twitter:image" content="https://tss.org.vn/wp-content/uploads/2021/11/tss.org_.vn_.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <Header theme={'white'}/>
        <Banner />
        {/* <AuthenticationSection /> */}
        <ListProjectSection />
        <ProcessNFTSection />
        <Footer criteriaShown={true} disclaimerShown={true} />
      </main>

    </div>
  );
};

export default Home;
