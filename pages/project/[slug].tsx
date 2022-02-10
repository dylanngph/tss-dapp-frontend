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
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

enum MetaTagKeys {
  TITLE = 'title',
  META_TITLE = 'meta_title',
  DESCRIPTION = 'description',
  OG_TYPE = 'og:type',
  OG_TITLE = 'og:title',
  OG_URL = 'og:url',
  OG_DESC = 'og:description',
  OG_IMG = 'og:image',
  TWITTER_CARD = 'twitter:card',
  TWITTER_URL = 'twitter:url',
  TWITTER_TITLE = 'twitter:title',
  TWITTER_DESC = 'twitter:description',
  TWITTER_IMG = 'twitter:image',
}

interface MetaTag {
  property: string,
  key?: string,
  content: string,
}

// export const getServerSideProps: GetServerSideProps = async ({ req }: GetServerSidePropsContext) => {
//   try {
//     const { url = '' } = req;
//     const urlSlug = url.split('project/')[1];

//     const abc = await fetch(`${API_URL.PROJECT_DETAIL}&projectSlug=${urlSlug}`);
//     const eInfo = await abc.json();
  
//     // const eInfo = await axios.get(`${API_URL.PROJECT_DETAIL}`, { params: { projectSlug: `${urlSlug}` } });
//     // const data = eInfo?.data.data;

//     const data = eInfo?.data;
  
//     const metaTagTitle = data && `Dự án - ${data.projectName}`;
  
//     const metaTagDescription = data && data.description;
  
//     const metaTagsList: MetaTag[] = [
//       // <meta property="title ... /> has the same property as the <title name="title>...</title>, but still needs a unique key.
//       // we handle this logic while mapping over the metaTagsList prop.
//       { property: MetaTagKeys.TITLE, key: MetaTagKeys.META_TITLE, content: metaTagTitle },
//       { property: MetaTagKeys.DESCRIPTION, content: metaTagDescription },
//       // <!-- Open Graph / Facebook -->
//       { property: MetaTagKeys.OG_URL, content: url },
//       { property: MetaTagKeys.OG_TITLE, content: metaTagTitle },
//       { property: MetaTagKeys.OG_DESC, content: metaTagDescription },
//       { property: MetaTagKeys.OG_IMG, content: "https://jpt-ugc.s3.ap-southeast-1.amazonaws.com/metaTag.png" },
//       // <!-- Twitter -->
//       { property: MetaTagKeys.TWITTER_CARD, content: 'summary_large_image' },
//       { property: MetaTagKeys.TWITTER_URL, content: url },
//       { property: MetaTagKeys.TWITTER_TITLE, content: metaTagTitle },
//       { property: MetaTagKeys.TWITTER_DESC, content: metaTagDescription },
//       { property: MetaTagKeys.TWITTER_IMG, content: "https://jpt-ugc.s3.ap-southeast-1.amazonaws.com/metaTag.png" }
//     ];
//     return {
//       props: {
//         metaTagsList,
//         metaTagTitle
//       },
//     }
//   } catch (error) {
//     return {
//       props: {
//         error
//       }
//     }
//   }
// }

export async function getServerSideProps({ params }: any) {
  try {
    const response = await axios.get(`${API_URL.PROJECT_DETAIL}`, { params: { projectSlug: `${params.slug}` } });
    const data = await response.data.data;
  
    console.log('data==>', data);
  
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
    console.log(projectMeta);
  };

  const fetchData = async () => {
    if (!router.query.slug) return;
    try {
      // let abc = projectDetailItem;
      // const abc = await fetch(`${API_URL.PROJECT_DETAIL}&projectSlug=${router.query.slug}`);
      // const bdf = await abc.json();
      // console.log('bdf===>', bdf.data);
      // setprojectDetail(bdf.data);
      // console.log('eInfo==>', eInfo);
      const response = await axios.get(`${API_URL.PROJECT_DETAIL}`, { params: { projectSlug: `${router.query.slug}` } });
      setprojectDetail(response.data.data);
    } catch (error) { }
  };

  return (
    <div>
      {/* <NextSeo
          title={ projectDetail &&  `Dự án - ${projectDetail.projectName}` }
          description={ projectDetail &&  `Dự án - ${projectDetail.description}` }
      /> */}
      <Head>
        <title>{ metaTagsList &&  `Dự án - ${metaTagsList.projectName}` }</title>
        {/* <meta name="description" content={ projectMeta &&  `Dự án - ${projectMeta.description}` } />

        <meta property="og:title" content={ projectMeta &&  `Dự án - ${projectMeta.projectName}` } />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ projectMeta &&  `${projectMeta.logo}` } />

        <meta name="twitter:title" content={ projectMeta &&  `Dự án - ${projectMeta.projectName}` } />
        <meta name="twitter:description" content={ projectMeta &&  `Dự án - ${projectMeta.description}` } />
        <meta name="twitter:image" content={ projectMeta &&  `${projectMeta.logo}` } />
        <meta name="twitter:card" content="summary_large_image" /> */}

        {/* <title
          key={MetaTagKeys.TITLE}>
          {metaTagTitle}
        </title>
        {metaTagsList
          && metaTagsList.map((entry: MetaTag) => (
            <meta
              property={entry.property}
              key={entry.key ? entry.key : entry.property}
              content={entry.content}
            />
          ))} */}

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