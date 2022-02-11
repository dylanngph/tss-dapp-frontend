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

export async function getServerSideProps({ params }: any) {
  try {
    const response = await axios.get(`${API_URL.PROJECT_DETAIL}`, { params: { projectSlug: `${params.slug}` } });
    const data = response.data.data;

    return {
        props: { metaTagsList: data },
    }
  } catch (error) {}
}

export default function ProjectDetail({ metaTagsList }: any) {
  const router = useRouter();
  const [projectDetail, setprojectDetail] = React.useState(projectDetailItem);
  const [projectMeta, setprojectMeta] = React.useState(projectDetailItem);

  React.useEffect(() => {
    getStaticProps();
    fetchData();
  }, [router]);

  const getStaticProps = async () => {
    const response = await fetch(`${API_URL.PROJECT_DETAIL}&projectSlug=${router.query.slug}`); // Fetch your data
    const showDataRes = await response.json();
    setprojectMeta(showDataRes);
  };

  const fetchData = async () => {
    if (!router.query.slug) return;
    try {
      const response = await axios.get(`${API_URL.PROJECT_DETAIL}`, { params: { projectSlug: `${router.query.slug}` } });
      setprojectDetail(response.data.data);
    } catch (error) { }
  };

  return (
    <div>
      <Head>
        <title>{ metaTagsList && `Dự án - ${metaTagsList.projectName}` }</title>
        <meta name="description" content={ metaTagsList && metaTagsList.description } />

        <meta property="og:title" content={ metaTagsList && `Dự án - ${metaTagsList.projectName}` } />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ metaTagsList && `${metaTagsList.logo}` } />

        <meta name="twitter:title" content={ metaTagsList && `Dự án - ${metaTagsList.projectName}` } />
        <meta name="twitter:description" content={ metaTagsList &&  metaTagsList.description } />
        <meta name="twitter:image" content={ metaTagsList && `${metaTagsList.logo}` } />
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