import Head from 'next/head';
import Footer from "components/display/Footer";
import Header from 'components/display/Header';
import BoxProjectDetail from 'components/custom/ProjectDetail';
import projectDetailItem from '../../constants/data/project';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectDetail() {
  return (
    <div>
      <Head>
        <title>Project Detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header theme={'black'}/>
        <BoxProjectDetail project={projectDetailItem}/>

        <Footer />
      </main>

    </div>
  )
}