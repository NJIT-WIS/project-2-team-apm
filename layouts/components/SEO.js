import Head from 'next/head';
import Image from 'next/image';

const SEO = ({ title, description, image, url }) => {
  const siteName = 'MyWebClass.org';

  return (
    <Head>
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* OpenGraph meta tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
    </Head>
  );
};

export default SEO;
