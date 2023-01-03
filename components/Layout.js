import Head from 'next/head';
import GlobalStyle from "../styles/globalStyle";
import { darkBg } from "../styles/props";

/** 
 * VERCEL URL: https://oris-frontend.vercel.app 
 * GITHUB URL: https://github.com/christopheresivwekpe/oris-frontend 
**/

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Join a community of salespeople helping brands reach their customers quickly, efficiently, and reliably" />
        <title>Oris - We sell for businesses in Africa</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>

        <meta name="theme-color" content={darkBg} />
        <meta name="msapplication-navbutton-color" content={darkBg} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content={darkBg} />

        <meta name="title" content="Oris"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://oris-frontend.vercel.com"/>
        <meta property="og:site_name" content="Oris"/>
        <meta property="og:title" content="Oris"/>
        <meta property="og:description" content="Join a community of salespeople helping brands reach their customers quickly, efficiently, and reliably"/>
        <meta property="og:image" content=""/>

        <meta property="twitter:card" content="summary"/>
        <meta property="twitter:url" content="https://oris-frontend.vercel.com"/>
        <meta property="twitter:title" content="Oris"/>
        <meta name="twitter:site" content="@oris"/>
        <meta name="twitter:creator" content="@oris"/>
        <meta property="twitter:description" content="Join a community of salespeople helping brands reach their customers quickly, efficiently, and reliably"/>
        <meta property="twitter:image" content=""/>
        <meta property="twitter:image:alt" content="Oris logo"/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Sora&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyle />
      {children}
    </>
  );
}
