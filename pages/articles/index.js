import { useRouter } from 'next/router';
import ArticleListArchive from '../../components/article-list-archive';
import articles from '../../articles.json';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Head from 'next/head';

const ArticleCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="global-wrapper">
    <Navigation />
    <Head></Head>
      <div className="index-wrapper">
        <ArticleListArchive articles={articles} category={'all'} />
      </div>
    <Footer/>
    </div>
  );
}

export default ArticleCategory;





