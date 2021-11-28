import NavigationPages from '../components/navigation-pages';
import ContactBox from '../components/contact-box';
import Clients from '../components/clients';
import Footer from '../components/footer';
import Head from 'next/head';
import HeaderPages from '../components/header-pages';

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
      <HeaderPages title="We craft visual essays, interactive video and web documentaries." />
      <div className="pages-wrapper">
        <div className="pages-text-container">
        <h1>The Studio</h1>
        <p>We craft <a href="https://en.wikipedia.org/wiki/Explorable_explanation" target="_blank" rel="noreferrer">visual essays</a>, <a href="https://en.wikipedia.org/wiki/Web_documentary" target="_blank" rel="noreferrer">web documentaries</a> and choice-driven narratives by combining the audio, visual, and interactive capabilities of dynamic media.</p>
        <p>The studio relies on a constellation of senior artists and production partners from around the world to deliver outstanding results. Using capabilities in 3D, data visualisation, video, interaction design and code we&apos;ve produced work in multiple mediums for commercial or institutional clients.</p>
        <p>We work alongside the Human Data Interface Group to continuously improve our experiences, integrating the latest technological developments and user interaction research in our conceptualisation. Interactive articles and moving images are proven to amplify learning for readers by boosting engagement, time spent and virality when compared to static alternatives - we aim to continue challenging ourselves to find the most optimal mediums and methods for interactive storytelling.</p>
        </div>
        <Clients />
        <ContactBox />
      </div> 
      <Footer />
  </div>
  )
}

export default Studio;