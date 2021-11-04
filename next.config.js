const articles = require('./articles.json');

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      ...articles.filter(article => {
        return !article.slug.startsWith('http://') && !article.slug.startsWith('https://');
      }).map((article) => {
        return { "source": `${article.slug}/:path*`, "destination": `${article.deployUrl}/:path*` }
      })
    ]
  }
}
