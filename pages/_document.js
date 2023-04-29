import TwSizeIndicator from "@components/TwSizeIndicator";
import config from "@config/config.json";
import { Head as DocumentHead, Html, NextScript } from "next/document";
import Script from 'next/script'

const CustomDocument = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <DocumentHead>

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
        {/* Google Analytics Start */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'denied',
                    'personalization_storage': 'denied'
                  });
                  gtag("set", "ads_data_redaction", true);
                }
              `
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
        {/* Google Analytics End */}
    </div>

      </DocumentHead>
      <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-MFP2RZL"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
        <main />
        <TwSizeIndicator />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
