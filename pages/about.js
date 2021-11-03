import NavigationPages from '../components/navigation-pages';
import Footer from '../components/footer';
import Head from 'next/head';
import HeaderPages from '../components/header-pages';
import articles from '../articles.json';
import NewsletterBox from '../components/newsletter-box';

const About = () => {

  return (
    <div className="global-wrapper">
    <NavigationPages />
      <Head>
        <meta />
      </Head>
      <HeaderPages />
      <div className="pages-wrapper">
        <h1>The Publication</h1>
        <p>Buried Signals is an outlet for technical and creative experiments in visual storytelling, we use it as a platform to explore strange ideas that inevitably require continuous research and learning. Our priority is to visualise investigative journalism, philosophical essays and experimental physics.</p>
        <p>To abstain from false claims of objectivity we try to keep our identities small and apply the tenets of Jim Lehrer’s journalism principles.</p>
        <h1>Manifesto</h1>
        <p>We aim to:</p>
        <ul>
            <li>Communicate in a clear and concise manner</li>
            <li>Seek to understand the opposing viewpoint and give readers access to both perspectives</li>
            <li>Fight stereotypes, fear-mongering and bipartisan polarisation</li>
            <li>Controversy for it’s own sake is entertainment</li>
            <li>Our writing should and can be challenged</li>
            <li>Collaborate with experts, identify uncertainty when it exists</li>
            <li>Propose solutions to the problem</li>
            <li>Sources are verified and always accessible</li>
            <li>Privacy matters, analytics and cookies on this site are non-invasive</li>
        </ul>
      </div> 
      <NewsletterBox />
      <Footer />
  </div>
  )
}

export default About;