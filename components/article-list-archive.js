const React = require('react');
import { useRouter } from 'next/router'
import Link from 'next/link'

const ArticleListRouter = (props) => {
  const router = useRouter()
  return <ArticleList {...props} router={router} />
}

class ArticleList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: props.category || 'all'
    }
  }

  render() {
    const { hasError, idyll, updateProps, clickCount, ...props } = this.props;
    console.log('rendering article list archive', props.category);

    const allArticles = props.articles;
    const allCategories = [...(new Set(allArticles.flatMap(article => article.categories)))];

    allCategories.sort((a, b) => {
      return a.localeCompare(b);
    })

    const selectedCategoryArticles = props.category === 'all' ? allArticles : allArticles.filter((article) => article.categories.includes(props.category));

    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '2em'}}>
          <div className={'article-category'}>
              <Link href="/articles">
                All
              </Link>
          </div>
          {allCategories.map((category) => {
            return <div key={category} className={'article-category'}>
              <Link href={`/articles/${category}`}>
                {category}
              </Link>
            </div>
          })}
        </div>
        {selectedCategoryArticles.map((article) => {
          return <div key={article.slug}>
            <a href={`${article.slug}`}>{article.title}</a>
          </div>
        })}
      </div>
    );
  }
}

export default ArticleListRouter;
