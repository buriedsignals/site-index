import '../styles/globals.css'
import Head from "next/head";
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function BuriedSignalsMag({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {

        if (window && window._paq) {
            _paq.push(['setCustomUrl', url]);
            _paq.push(['trackPageView']);
        }
    }


    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
}, [router.events])

  return (
    <div>
      <Head>
      <title>Buried Signals</title>
        <meta charset="utf-8" />
        <meta name="description" content="A publication curating visual, interactive and investigative stories." key="meta_description" />
        <meta name="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="meta_image" />
        <meta itemProp="name" content="Buried Signals" />
        <meta itemProp="description" content="A publication curating visual, interactive and investigative stories.." />
        <meta itemProp="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta name="twitter:card" content="summary_large_image" key="twitter_card" />
        <meta name="twitter:title" content="Buried Signals" key="twitter_title" />
        <meta name="twitter:description" content="A publication curating visual, immersive and interactive journalism." key="twitter_description" />
        <meta name="twitter:site" content="@buriedsignals" key="twitter_site" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="twitter_image" />
        <meta name="title" property="og:title" content="Buried Signals" key="title" />
        <meta name="description" property="og:description" content="A publication curating visual, interactive and investigative stories."  key="description" />
        <meta name="image" property="og:image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="image"></meta>
        <meta name="url" property="og:url" content="https://buriedsignals.com" key="url" />
        <meta name="site_name" property="og:site_name" content="Buried Signals" key="site_name" />
        <meta name="type" property="og:type" content="website" key="type" />
      </Head>
    <Component {...pageProps} />
    </div>
    );
}

export default BuriedSignalsMag
