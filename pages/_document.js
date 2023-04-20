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
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
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
