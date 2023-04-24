import TwSizeIndicator from "@components/TwSizeIndicator";
import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script'
import Document, { Head, Main, NextScript } from 'next/document';

const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link rel="shortcut icon" href="images/favicon.ico" />

        <div>
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
        </div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KNDDNWP');
              `,
            }}
          />
    <div className="container">
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-W7885XHR5D"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W7885XHR5D', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
    </div>
      </Head>
      <body>

          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-KNDDNWP"
                  height="0"
                  width="0"
                  style="display:none;visibility:hidden"
                ></iframe>
              `,
            }}
          />

        <Main />
        <TwSizeIndicator />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
