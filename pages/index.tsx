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
        <title>TSS - D App</title>
        <meta name="description" content="TSS - Cấp NFT xác thực dự án Blockchain của bạn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header theme={'white'}/>
        <Banner />
        <AuthenticationSection />
        <ListProjectSection />
        <ProcessNFTSection />
        <Footer />
      </main>

    </div>
  );
};

export default Home;
