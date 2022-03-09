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
        <html lang="en" />
      </Head>
      <Component {...pageProps} />
    </div>
    );
}

export default BuriedSignalsMag
