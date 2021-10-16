

const fs = require('fs');
const path = require('path');
const articles = require('../data/articles.json');

fs.writeFileSync(path.resolve(path.join(__dirname, '..', 'vercel.json')), JSON.stringify(
  {
    "version": 2,
    // "alias": "buriedsignals.pub",
    "routes": [
      {
        "src": "/([^/]+)",
        "status": 302,
        "headers": { "Location": "/$1/" }
      },
      { "src": "/about/(.*)", "dest": "https://buried-signals-about.vercel.app/$1" },
      ...articles.map((article) => {
        return { "src": `/${article.slug}/(.*)`, "dest": `${article.deployUrl}/$1` }
      })
    ]
  }
, null, 2))