const articles = require('../articles.json');

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        "source": "/about/:path*",
        "destination": "https://buried-signals-about.vercel.app/:path*"
      },
      ...articles.filter(article => {
        return !article.slug.startsWith('http://') && !article.slug.startsWith('https://');
      }).map((article) => {
        return { "source": `${article.slug}/:path*`, "destination": `${article.deployUrl}/:path*` }
      })
    ]
  }
}
