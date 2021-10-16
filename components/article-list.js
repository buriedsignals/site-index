const React = require('react');

class ArticleList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { hasError, idyll, updateProps, clickCount, ...props } = this.props;
    return (

      <div>
        {props.articles.map((article) => {
          return <div key={article.slug}>
            <a href={`/${article.slug}`}>{article.title}</a>
          </div>
        })}
      </div>
    );
  }
}

module.exports = ArticleList;
