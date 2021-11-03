import { useRouter } from 'next/router';
import ArticleList from '../../components/article-list-archive';
import articles from '../../articles.json';
const allCategories = [...(new Set(articles.flatMap(article => article.categories)))];

const ArticleCategory = (props) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
    <ArticleList articles={articles} category={category || props.category} />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      category: context.params.category
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: allCategories.map((category) => {
      return {
        params: { category }
      }
    }),
    fallback: true
  };
}

export default ArticleCategory;