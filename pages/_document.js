import TwSizeIndicator from "@components/TwSizeIndicator";
import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script'


const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <Head>
    <div className="container">
      {/*Google Analytics*/}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W7885XHR5D"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W7885XHR5D');
        `}
      </Script>

        {/* Open Graph tags */}
        <meta property="og:title" content="My page title" />
        <meta property="og:description" content="My page description" />
        <meta property="og:image" content="https://example.com/my-image.jpg" />
        <meta property="og:url" content="https://example.com/my-page" />
        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My page title" />
        <meta name="twitter:description" content="My page description" />
        <meta name="twitter:image" content="https://example.com/my-image.jpg" />
        <meta name="twitter:url" content="https://example.com/my-page" />

    </div>
        {/* favicon */}
        <link rel="shortcut icon" href={favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="bookworm-light-nextjs" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </Head>
      <body>
        <Main />
        <TwSizeIndicator />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
