import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';

class ArticleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: props.category || 'all'
    }
    this.categoryAllHandler = this.categoryAllHandler.bind(this);
    this.categoryHandler = this.categoryHandler.bind(this);
  }

  categoryAllHandler(e) {
    const filters = document.querySelectorAll(".filter-category");
    console.log(filters);
    filters.forEach(filter => filter.style.color = "#636363");
    e.target.style.color = "white";
    this.setState({selectedCategory: 'all'});
  };
  categoryHandler(category, e) {
    const filters = document.querySelectorAll(".filter-category");
    console.log(filters);
    filters.forEach(filter => filter.style.color = "#636363");
    e.target.style.color = "white";
    this.setState({ selectedCategory: category });
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

    // need to use in(e) => categoryAllHandler(e)
    return (
      <div className="articles-index-wrapper">
        <div className="featured-article-wrapper">
            <div>
              {featuredArticles.map((article) => {
                const creator = article.creator.toUpperCase();
                const category = article.categories[0].toUpperCase();
                return <a href={`${article.slug}`} key={article.slug}>
                  <div className="featured-article">
                  <div className="featured-article-tag">FEATURED</div>
                  <div className="article-redirect">{article.deployURL? "" : <FontAwesomeIcon icon={faExternalLinkAlt} />}</div>
                  <img className="featured-article-image" src={article.image}></img>
                  <div className="featured-article-details">
                    <div className="article-category">{category}</div>
                    <div className="featured-article-title">{article.title}</div>
                    <div className="article-creator">CREATOR: {creator}</div>
                  </div>
                </div>
                </a>
              })}
            </div>
        </div>
        <div>
          <div className="index-filters">
            <div className="filter-category" onClick={this.categoryAllHandler}>
              All
            </div>
            {allCategories.map((category) => {
              return <div key={category} className="filter-category" onClick={(e) => this.categoryHandler(category, e)}>
                {category}
              </div>
            })}
          </div>
          <div className="articles-index">
            {selectedCategoryArticles.map((article) => {
                const creator = article.creator.toUpperCase();
                const category = article.categories[0].toUpperCase();
                const router = useRouter()
                // IF ROUTE IS CATEGORY -> prefix article.image with "../"
                // uppercase categories, lowercase in json
                return <a href={`${article.slug}`} key={article.slug}>
                  <div className="article-card">
                  <div className="article-redirect">{article.deployURL? "" : <FontAwesomeIcon icon={faExternalLinkAlt} />}</div>
                  <img className="article-image" src={article.image}></img>
                  <div className="article-details">
                    <div className="article-category">{category}</div>
                    <div className="article-title">{article.title}</div>
                    <div className="article-creator">CREATOR: {creator}</div>
                  </div>
                </div>
                </a>
            })}
          </div>
        </div>
        <div className="button-container">
          <Link href="/articles">
            <button className="button-white">See More</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ArticleList;
