import NavigationPages from '../components/navigation-pages';
import ContactBox from '../components/contact-box';
import Footer from '../components/footer';
import Head from 'next/head';
import HeaderPages from '../components/header-pages';
import NewsletterBox from '../components/newsletter-box';

const Studio = () => {

  return (
    <div className="global-wrapper">
      <NavigationPages />
      <Head>
        <meta />
      </Head>
      <HeaderPages />
      <div className="pages-wrapper">
        <p>Test content lorem Test content lorem Test content lorem </p>
        <ContactBox />
      </div> 
      <NewsletterBox />
      <Footer />
  </div>
  )
}

export default Studio;