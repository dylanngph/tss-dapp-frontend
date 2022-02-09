import * as React from 'react';
import Head from 'next/head';
import Footer from "components/display/Footer";
import Header from 'components/display/Header';
import BoxProjectDetail from 'components/custom/ProjectDetail';
import { projectDetailItem } from 'constants/data/project/index';
import axios from 'axios';
import { API_URL } from 'constants/api/apiConfigs';
import { useRouter } from 'next/router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextSeo } from 'next-seo';

export default function ProjectDetail() {
  const router = useRouter();
  const [projectDetail, setprojectDetail] = React.useState(projectDetailItem);
  const [projectMeta, setprojectMeta] = React.useState(projectDetailItem);

  React.useEffect(() => {
    fetchData();
  }, [router]);

  const getStaticProps = async () => {
    const response = await fetch(`${API_URL.PROJECT_DETAIL}&projectSlug=${router.query.slug}`); // Fetch your data
    const showDataRes = await response.json();
    setprojectMeta(showDataRes);
    console.log(projectMeta);
  };

  // getStaticProps();

  const fetchData = async () => {
    if (!router.query.slug) return;
    try {
      // let abc = projectDetailItem;
      // const abc = await fetch(`${API_URL.PROJECT_DETAIL}&projectSlug=${router.query.slug}`);
      // const bdf = await abc.json();
      // console.log('bdf===>', bdf.data);
      // setprojectDetail(bdf.data);
      const response = await axios.get(`${API_URL.PROJECT_DETAIL}`, {params: {projectSlug: `${router.query.slug}`}});
      setprojectDetail(response.data.data);
    } catch (error) {}
  };

  return (
    <div>
      {/* <NextSeo
          title={ projectDetail &&  `Dự án - ${projectDetail.projectName}` }
          description={ projectDetail &&  `Dự án - ${projectDetail.description}` }
      /> */}
      <Head>
        <title>{ projectMeta &&  `Dự án - ${projectMeta.projectName}` }</title>
        <meta name="description" content={ projectMeta &&  `Dự án - ${projectMeta.description}` } />

        <meta property="og:title" content={ projectMeta &&  `Dự án - ${projectMeta.projectName}` } />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ projectMeta &&  `${projectMeta.logo}` } />

        <meta name="twitter:title" content={ projectMeta &&  `Dự án - ${projectMeta.projectName}` } />
        <meta name="twitter:description" content={ projectMeta &&  `Dự án - ${projectMeta.description}` } />
        <meta name="twitter:image" content={ projectMeta &&  `${projectMeta.logo}` } />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header theme={'black'} />
        <BoxProjectDetail project={projectDetail} />
        <Footer criteriaShown={true} disclaimerShown={false} />
      </main>

    </div>
  )
}