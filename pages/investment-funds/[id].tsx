import type { NextPage } from "next";
import Head from "next/head";
import Header from 'components/display/Header';
import Footer from "components/display/Footer";
import FunPage from "components/display/Fund";
import { useRouter } from 'next/router';

const IFund: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>TSS - Quỹ đầu tư</title>
        <meta name="description" content="TSS - Quỹ đầu tư" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header theme={'black'} />
        <FunPage />
        <Footer />
      </main>

    </div>
  );
};

export default IFund;
