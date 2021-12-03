import type { NextPage } from 'next';
import Head from 'next/head';
import NotFound from 'components/display/NotFound';

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Trang không tồn tại</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NotFound />
      </main>
    </div>
  )
}

export default NotFoundPage