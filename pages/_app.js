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
      <meta name="description" content="A publication curating visual, immersive and interactive journalism."/>
      <meta name="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
      <meta itemProp="name" content="Buried Signals" />
      <meta itemProp="description" content="A publication curating visual, immersive and interactive journalism." />
      <meta itemProp="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Buried Signals" />
      <meta name="twitter:description" content="A publication curating visual, immersive and interactive journalism." />
      <meta name="twitter:site" content="@buriedsignals" />
      <meta name="twitter:image:src" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
      <meta name="og:title" content="Buried Signals" />
      <meta name="og:description" content="A publication curating visual, immersive and interactive journalism." />
      <meta name="og:image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
      <meta name="og:url" content="https://buriedsignals.com" />
      <meta name="og:site_name" content="Buried Signals" />
      <meta name="og:type" content="website" />
      </Head>
    <Component {...pageProps} />
    </div>
    );
}

export default BuriedSignalsMag
