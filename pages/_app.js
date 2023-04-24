import config from "@config/config.json";
import theme from "@config/theme.json";
import { JsonContext } from "context/state";
import Head from "next/head";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import "styles/style.scss";

const App = ({ Component, pageProps }) => {
  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const [fontcss, setFontcss] = useState();
  useEffect(() => {
    fetch(
      `https://fonts.googleapis.com/css2?family=${pf}${
        sf ? "&family=" + sf : ""
      }&display=swap`
    ).then((res) => res.text().then((css) => setFontcss(css)));
  }, [pf, sf]);

  // google tag manager (gtm)
  const tagManagerArgs = {
    gtmId: config.params.tag_manager_id,
  };
  useEffect(() => {
    setTimeout(() => {
      config.params.tag_manager_id && TagManager.initialize(tagManagerArgs);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <JsonContext>
      <Head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M2Q9ZN6');
            `,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M2Q9ZN6"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `${fontcss}`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </JsonContext>
  );
};

export default App;


// import config from "@config/config.json";
// import theme from "@config/theme.json";
// import { JsonContext } from "context/state";
// import Head from "next/head";
// import { useEffect, useState } from "react";
// import TagManager from "react-gtm-module";
// import "styles/style.scss";
//
// const App = ({ Component, pageProps }) => {
//   // import google font css
//   const pf = theme.fonts.font_family.primary;
//   const sf = theme.fonts.font_family.secondary;
//   const [fontcss, setFontcss] = useState();
//   useEffect(() => {
//     fetch(
//       `https://fonts.googleapis.com/css2?family=${pf}${
//         sf ? "&family=" + sf : ""
//       }&display=swap`
//     ).then((res) => res.text().then((css) => setFontcss(css)));
//   }, [pf, sf]);
//
//   // google tag manager (gtm)
//   const tagManagerArgs = {
//     gtmId: config.params.tag_manager_id,
//   };
//   useEffect(() => {
//     setTimeout(() => {
//       config.params.tag_manager_id && TagManager.initialize(tagManagerArgs);
//     }, 5000);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//
//   return (
//     <JsonContext>
//       <Head>
//         {/* google font css */}
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="true"
//         />
//         <style
//           dangerouslySetInnerHTML={{
//             __html: `${fontcss}`,
//           }}
//         />
//         {/* responsive meta */}
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, maximum-scale=5"
//         />
//       </Head>
//       <Component {...pageProps} />
//     </JsonContext>
//   );
// };
//
// export default App;
