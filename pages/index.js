import { useRouter } from 'next/router';
import ArticleList from '../components/article-list';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Header from '../components/header';
import Head from 'next/head';
import articles from '../articles.json';
import NewsletterBox from '../components/newsletter-box';

const ArticleCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="global-wrapper">
      <Navigation />
      <Head>
        <meta />
      </Head>
      <div className="index-wrapper">
        <Header />
        <ArticleList articles={articles} catgory={category} />
        <NewsletterBox />
      </div> 
      <Footer />
  </div>
  )
}

export default ArticleCategory;