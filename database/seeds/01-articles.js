const axios = require('axios');

let newArticles = [];
axios.get('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b3adbcbadfd84e74a47c3b3fd647a024')
  .then(response => {
    let data = response.data.articles;
    newArticles = data.map(article => {
      return {author: article.author, title: article.title, content: article.content, image: article.urlToImage};
    });
    return newArticles;
  })
  .catch(err => console.log(err.message));

exports.seed = function(knex) {
  return knex('articles').insert(newArticles);
};
