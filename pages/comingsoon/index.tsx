import type { NextPage } from 'next';
import Head from 'next/head';
import ComingSoon from 'components/display/ComingSoon';

const ComingSoonScreen: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chức năng đang phát triển</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ComingSoon />
      </main>
    </div>
  )
}

export default ComingSoonScreen