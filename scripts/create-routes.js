const fs = require('fs');
const path = require('path');
const articles = require('../articles.json');

fs.writeFileSync(path.resolve(path.join(__dirname, '..', 'next.config.js')),
`
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        "source": "/about/:path*",
        "destination": "https://buried-signals-about.vercel.app/:path*"
      },
      ${articles.filter(article => {
        return !article.slug.startsWith('http://') && !article.slug.startsWith('https://');
      }).map((article) => {
        return JSON.stringify({ "source": `${article.slug}/:path*`, "destination": `${article.deployUrl}/:path*` })
      }).join(',\n')}
    ]
  }
}
`);