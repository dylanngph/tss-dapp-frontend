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

export default function ProjectDetail() {
  const router = useRouter();
  const [projectDetail, setprojectDetail] = React.useState(projectDetailItem);

  React.useEffect(() => {
    fetchData();
  }, [router]);

  const fetchData = async () => {
    if (!router.query.slug) return;
    try {
      const response = await axios.get(`${API_URL.PROJECT_DETAIL}`, {params: {projectSlug: `${router.query.slug}`}});
      setprojectDetail(response.data.data);
    } catch (error) {}
  };

  return (
    <div>
      <Head>
        <title>{ projectDetail &&  `Dự án - ${projectDetail.projectName}`}</title>
        <meta name="description" content={projectDetail &&  `Dự án - ${projectDetail.description}`} />
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