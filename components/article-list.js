import React from 'react';
import Link from 'next/link'

class ArticleList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: props.category || 'all'
    }
  }

  render() {
    const { hasError, idyll, updateProps, clickCount, ...props } = this.props;

    const allArticles = props.articles;
    const allCategories = [...(new Set(allArticles.flatMap(article => article.categories)))];

    allCategories.sort((a, b) => {
      return a.localeCompare(b);
    })


    const featuredArticles = allArticles.filter(article => article.featured);
    const unfeaturedArticles = allArticles.filter(article => !article.featured);

    const selectedCategoryArticles = this.state.selectedCategory === 'all' ? unfeaturedArticles : unfeaturedArticles.filter((article) => article.categories.includes(this.state.selectedCategory));

    return (
      <div>
        <div>
            Featured
            <div>
              {featuredArticles.map((article) => {
                return <div style={{width: 600, height: 300, background: '#ddd'}} key={article.slug}>
                  <a href={`${article.slug}`}>{article.title}</a>
                </div>
              })}
            </div>
        </div>
        <div>
          <div style={{display: 'flex', flexDirection: 'row', marginTop: '2em'}}>
            <div className={'article-category'} onClick={() => this.setState({ selectedCategory: 'all' })}>
              All
            </div>
            {allCategories.map((category) => {
              return <div key={category} className={'article-category'} onClick={() => this.setState({ selectedCategory: category })}>
                {category}
              </div>
            })}
          </div>
          {selectedCategoryArticles.map((article) => {
            return <div key={article.slug}>
              <a href={`${article.slug}`}>{article.title}</a>
            </div>
          })}
        </div>
        <div>
          <Link href="/articles">
            <a>See more...</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default ArticleList;
