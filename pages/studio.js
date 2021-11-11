import NavigationPages from '../components/navigation-pages';
import ContactBox from '../components/contact-box';
import Clients from '../components/clients';
import Footer from '../components/footer';
import Head from 'next/head';
import HeaderPages from '../components/header-pages';
import NewsletterBox from '../components/newsletter-box';

const Studio = () => {

  return (
    <div className="global-wrapper">
      <NavigationPages />
      <Head>
        <title>Studio | Buried Signals</title>
        <meta title="Studio | Buried Signals" />
        <meta description="Creative studio specialised in visual essays and web documentaries." />
        <meta image src="../static/img/meta.png" />
      </Head>
      <HeaderPages title="Experiments in visual journalism. Curating and crafting explorable explanations, web documentaries and interfaces." />
      <div className="pages-wrapper">
        <div className="pages-text-container">
        <h1>The Studio</h1>
        <p>We craft <a href="https://en.wikipedia.org/wiki/Explorable_explanation" target="_blank" rel="noreferrer">visual essays</a>, <a href="https://en.wikipedia.org/wiki/Web_documentary" target="_blank" rel="noreferrer">web documentaries</a> and choice-driven narratives by combining the audio, visual, and interactive capabilities of dynamic media.</p>
        <p>Using capabilities in 3D, data visualisation, video, interaction design and code we have produced work for commercial or institutional clients.</p>
        <p>Interactive articles and video are proven to help boost engagement, time spent and virality when compared to static alternatives, both of these metrics are predictive of successful learning outcomes for readers.</p>
        </div>
        <Clients />
        <ContactBox />
      </div> 
      <Footer />
  </div>
  )
}

export default Studio;