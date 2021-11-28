import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import ArticleCard from "./article-card/article-card";

const ArticleListRouter = (props) => {
  const { asPath, pathname } = useRouter();
  console.log("path", asPath);
  console.log("path", pathname);
  return <ArticleList {...props} />;
};

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: props.category || "all",
    };
    this.categoryAllHandler = this.categoryAllHandler.bind(this);
    this.categoryHandler = this.categoryHandler.bind(this);
  }

  categoryAllHandler(e) {
    this.setState({ selectedCategory: "all" });
  }
  categoryHandler(category, e) {
    this.setState({ selectedCategory: category });
  }

  render() {
    const { hasError, idyll, updateProps, clickCount, ...props } = this.props;

    const allArticles = props.articles;
    const allCategories = [
      ...new Set(allArticles.flatMap((article) => article.categories)),
    ];

    allCategories.sort((a, b) => {
      return a.localeCompare(b);
    });

    const featuredArticles = allArticles.filter((article) => article.featured);
    const unfeaturedArticles = allArticles.filter(
      (article) => !article.featured
    );

    const selectedCategoryArticles =
      this.state.selectedCategory === "all"
        ? unfeaturedArticles
        : unfeaturedArticles.filter((article) =>
            article.categories.includes(this.state.selectedCategory)
          );

    // need to use in(e) => categoryAllHandler(e)
    return (
      <div className="articles-index-wrapper">
        <div className="featured-article-wrapper">
          <div>
            {featuredArticles.map((article) => {
              return (
                <ArticleCard key={article.slug} article={article} featured />
              );
            })}
          </div>
        </div>
        <div>
          <div className="index-filters">
            <div
              className="filter-category"
              onClick={this.categoryAllHandler}
              data-active={this.state.selectedCategory === "all"}
            >
              All
            </div>
            {allCategories.map((category) => {
              return (
                <div
                  key={category}
                  className="filter-category"
                  onClick={(e) => this.categoryHandler(category, e)}
                  data-active={this.state.selectedCategory === category}
                >
                  {category.toUpperCase()}
                </div>
              );
            })}
          </div>
          <div className="articles-index">
            {selectedCategoryArticles.map((article) => {
              return <ArticleCard key={article.slug} article={article} />;
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

export default ArticleListRouter;
